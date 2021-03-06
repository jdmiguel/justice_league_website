import PropTypes from 'prop-types';

export const superheroesModel = PropTypes.arrayOf(
  PropTypes.shape({
    alias: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    class: PropTypes.string,
    active: PropTypes.bool,
    breakpoint: PropTypes.number,
    index: PropTypes.number,
    icon: PropTypes.func,
    characterImg: PropTypes.string,
    iconMeasurements: PropTypes.shape({
      width: PropTypes.string,
      height: PropTypes.string,
    }),
  }),
);

export const menuDirectionModel = PropTypes.shape({
  inHero: PropTypes.string,
  outHero: PropTypes.string,
});

export const superheroModel = PropTypes.shape({
  alias: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  class: PropTypes.string,
  active: PropTypes.bool,
  breakpoint: PropTypes.number,
  index: PropTypes.number,
  icon: PropTypes.func,
  characterImg: PropTypes.string,
  iconMeasurements: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
});

export const tabsModel = PropTypes.arrayOf(
  PropTypes.shape({
    txt: PropTypes.string,
    id: PropTypes.string,
    activ: PropTypes.bool,
  }),
);

export const dataSheetModel = PropTypes.shape({
  originConnections: PropTypes.shape({
    section: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  }),
  appearance: PropTypes.shape({
    section: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  }),
});

export const skillsModel = PropTypes.shape({
  stats: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.number,
      }),
    ),
  }),
  powers: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.string),
  }),
});
