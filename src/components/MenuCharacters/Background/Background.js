import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: new TimelineMax({ delay: 4.2, paused: false }),
      durationInit: 6,
      duration: 0.55
    };
  }

  componentDidMount() {
    const { tl, durationInit, duration } = this.state;
    tl.addLabel('initIntro')
      .from(
        '.menuCharacters_background',
        durationInit,
        {
          alpha: 0,
          ease: Power1.easeInOut
        },
        '+=0'
      )
      .addPause()
      .addLabel('initIn')
      .to(
        '.menuCharacters_background',
        duration,
        {
          alpha: 0.85,
          ease: Bounce.easeOut
        },
        '+=0'
      )
      .addPause()
      .addLabel('initOut')
      .to(
        '.menuCharacters_background',
        duration,
        {
          alpha: 0.7,
          ease: Bounce.easeOut
        },
        '+=0'
      )
      .addPause();
  }

  componentDidUpdate() {
    const { isActiveMenuLettersAnimation } = this.props;
    isActiveMenuLettersAnimation ? this.animate('in') : this.animate('out');
  }

  animate(mode) {
    const { tl } = this.state;
    mode === 'in' ? tl.play('initIn') : tl.play('initOut');
  }

  render() {
    return <div className="menuCharacters_background" />;
  }
}

const mapStateToProps = state => ({
  isActiveMenuLettersAnimation: state.isActiveMenuLettersAnimation
});

Background.propTypes = {
  isActiveMenuLettersAnimation: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Background);
