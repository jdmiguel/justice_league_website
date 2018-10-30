import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import LettersWrapper from './Letters';
import LogoWrapper from './Logo';
import BackgroundWrapper from './Background';
import SideDrawer from './sideDrawer';
import Footer from '../../components/Footer';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onMouseWheel: false,
      delayOnMouseWheel: null
    };
  }

  componentDidMount() {
    const { setInititalCounterValueActivateSuperheroes } = this.props;

    setInititalCounterValueActivateSuperheroes();

    document.addEventListener('mousewheel', event =>
      this.mouseWheelHandler(event)
    );
  }

  changeMenu(e) {
    const { delayOnMouseWheel } = this.state;
    const { setActiveSuperhero, setDirectionIn, setDirectionOut } = this.props;

    // console.log('changeMenu from MenuCharactersWrapper');

    if (e.deltaY > 0) {
      // console.log('go next superhero');
      setDirectionIn('left');
      setDirectionOut('right');
      setActiveSuperhero('next');
    } else {
      // console.log('go prev superhero');
      setDirectionIn('right');
      setDirectionOut('left');
      setActiveSuperhero('prev');
    }

    clearTimeout(delayOnMouseWheel);

    this.setState({
      onMouseWheel: false
    });
  }

  mouseWheelHandler(e) {
    const { isActiveOverMenuLetters } = this.props;
    const { onMouseWheel } = this.state;

    if (onMouseWheel || !isActiveOverMenuLetters) return;

    this.setState({
      onMouseWheel: true,
      delayOnMouseWheel: setTimeout(() => this.changeMenu(e), 1000)
    });
  }

  render() {
    const { superheroesList } = this.props;
    return (
      <div className="menuCharacters_wrapper">
        <LettersWrapper list={superheroesList} />
        <LogoWrapper list={superheroesList} />
        <BackgroundWrapper list={superheroesList} />
        <SideDrawer list={superheroesList} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  superheroesList: state.superheroesMenuRdc.superheroesList,
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters
});

const mapDispatchToProps = dispatch => ({
  setInititalCounterValueActivateSuperheroes: () =>
    dispatch({
      type: actionTypes.SET_COUNTER_VALUE_ACTIVE_SUPERHERO_MENU
    }),
  setActiveSuperhero: selected =>
    dispatch({
      type: actionTypes.SET_ACTIVE_SUPERHERO_MENU,
      active: selected
    }),
  setDirectionIn: directionSelected =>
    dispatch({
      type: actionTypes.SET_DIRECTION_IN_MENU,
      direction: directionSelected
    }),
  setDirectionOut: directionSelected =>
    dispatch({
      type: actionTypes.SET_DIRECTION_OUT_MENU,
      direction: directionSelected
    })
});

Menu.propTypes = {
  superheroesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  setInititalCounterValueActivateSuperheroes: PropTypes.func.isRequired,
  setActiveSuperhero: PropTypes.func.isRequired,
  setDirectionIn: PropTypes.func.isRequired,
  setDirectionOut: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
