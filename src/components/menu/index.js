import React from 'react';

/** Components */
import Sidedrawer from './Sidedrawer';
import Bg from './Bg';
import Letters from './Letters';

/* Reducer */
import { reducer, superheroesState } from '../../store/reducer';

/* Actions */
import { setActiveSuperhero } from '../../store/actions';

const Menu = () => {
  const [superheroes, dispatch] = React.useReducer(reducer, superheroesState);
  const sidedrawerList = React.useRef(null);
  const bgList = React.useRef(null);
  const lettersList = React.useRef(null);

  sidedrawerList.current = superheroes.map(item => ({
    alias: item.alias,
    class: item.class,
    active: item.active,
    index: item.index,
    icon: item.icon,
    iconMeasures: item.iconMeasures
  }));

  bgList.current = superheroes.map(item => ({
    alias: item.alias,
    class: item.class,
    active: item.active
  }));

  lettersList.current = superheroes.map(item => ({
    alias: item.alias,
    class: item.class,
    active: item.active,
    breakpoint: item.breakpoint
  }));

  return (
    <div className="menu">
      <Sidedrawer
        list={sidedrawerList.current}
        onClickItem={indexItem =>
          setActiveSuperhero(dispatch, superheroes, indexItem)
        }
      />
      <Bg list={bgList.current} />
      <Letters list={lettersList.current} />
    </div>
  );
};

export default Menu;
