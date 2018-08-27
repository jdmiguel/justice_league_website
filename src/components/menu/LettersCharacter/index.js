import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

class LettersCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: new TimelineMax({ paused: true }),
      configTl: {
        introAnimation: {
          delay: 4.5,
          duration: 1.1
        },
        outAnimation: {
          delay: 0,
          duration: 0.4
        },
        inAnimation: {
          delay: 0,
          duration: 1.1
        }
      },
      chars: null,
      totalChars: 0
    };

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const { tl, configTl } = this.state;
    const { superhero } = this.props;
    const classSelected = `.${superhero}`;

    const { introAnimation, inAnimation, outAnimation } = configTl;
    const mySplitText = new SplitText(classSelected, {
      type: 'words,chars'
    });
    const { chars } = mySplitText;

    this.setState({
      chars,
      totalChars: chars.length
    });

    tl.addLabel('introAnimation')
      .staggerFromTo(
        chars,
        introAnimation.duration,
        {
          alpha: 0,
          x: -50,
          rotationY: 120
        },
        {
          alpha: 1,
          x: 0,
          rotationY: 0,
          transformOrigin: '50% 50%',
          ease: Power1.easeOut
        },
        0.08,
        `+=${introAnimation.delay}`
      )
      .addPause()
      .addLabel('outAnimation')
      .staggerFromTo(
        chars,
        outAnimation.duration,
        {
          alpha: 1,
          x: 0,
          rotationY: 0
        },
        {
          cycle: { x: i => 50 + i * 40 },
          alpha: 0,
          rotationY: 0,
          ease: Power1.easeIn
        },
        0.01,
        `+=${outAnimation.delay}`
      )
      .addPause()
      .addLabel('inAnimation')
      .staggerFromTo(
        chars,
        inAnimation.duration,
        {
          alpha: 0,
          rotationY: 0,
          cycle: { x: i => -200 - i * 20 }
        },
        {
          alpha: 1,
          rotationY: 0,
          x: 0,
          ease: Power1.easeOut
        },
        0.02,
        `+=${inAnimation.delay}`
      )
      .addPause();

    tl.play('introAnimation');
  }

  getDistance(index) {
    const { totalChars } = this.state;
    const factor = totalChars / 2;
    const distance =
      index < totalChars / 2
        ? (Math.sin(index) - totalChars) * (factor - index)
        : (Math.sin(index) + totalChars) * (index - factor);
    return distance;
  }

  mouseOverHandler() {
    const { chars, totalChars } = this.state;
    const { inLogoAnimation } = this.props;

    chars.forEach((char, i) => {
      if (i < totalChars / 2)
        TweenMax.to(char, 1, {
          x: `${this.getDistance(i)}`,
          ease: Power1.easeOut
        });
      if (i > totalChars / 2)
        TweenMax.to(char, 1.2, {
          x: `${this.getDistance(i)}`,
          ease: Power1.easeOut
        });
    });

    inLogoAnimation();
  }

  mouseOutHandler() {
    const { chars } = this.state;
    const { outLogoAnimation } = this.props;

    chars.forEach(char => {
      TweenMax.to(char, 1, {
        x: 0,
        ease: Power1.easeOut
      });
    });

    outLogoAnimation();
  }

  clickHandler() {
    const { tl } = this.state;
    const { desactiveOverMenuLetters } = this.props;
    tl.play('outAnimation');
    desactiveOverMenuLetters();
  }

  render() {
    const { superhero, isActiveOverMenuLetters } = this.props;
    const getLettersClasses = () =>
      !isActiveOverMenuLetters
        ? `letters ${superhero}`
        : `letters ${superhero} active`;

    return (
      <div className="letters_container">
        <button
          type="button"
          className={getLettersClasses()}
          onMouseEnter={() => {
            if (isActiveOverMenuLetters) this.mouseOverHandler();
          }}
          onMouseLeave={() => {
            if (isActiveOverMenuLetters) this.mouseOutHandler();
          }}
          onClick={this.clickHandler}
        >
          {superhero}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters
});

const mapDispatchToProps = dispatch => ({
  inLogoAnimation: () => dispatch({ type: actionTypes.MENU_LOGO_ANIMATION_IN }),
  outLogoAnimation: () =>
    dispatch({ type: actionTypes.MENU_LOGO_ANIMATION_OUT }),
  desactiveOverMenuLetters: () =>
    dispatch({ type: actionTypes.DESACTIVE_OVER_MENU_LETTERS })
});

LettersCharacter.propTypes = {
  superhero: PropTypes.string.isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  inLogoAnimation: PropTypes.func.isRequired,
  outLogoAnimation: PropTypes.func.isRequired,
  desactiveOverMenuLetters: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LettersCharacter);
