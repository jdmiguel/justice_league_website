import React from 'react';
import PropTypes from 'prop-types';
import Logo from './SuperheroLogo';

const LogoWrapper = ({ list }) =>
  list.map(superhero => (
    <Logo
      key={superhero.id}
      superheroName={superhero.name}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
    />
  ));

LogoWrapper.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LogoWrapper;