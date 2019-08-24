import React from 'react';
import { hot } from 'react-hot-loader';

/** Components */
import Layout from './components/layout';
import Intro from './components/intro';
import Menu from './components/menu';
import Character from './components/character';

/** Assets */
import { landscapeImgPath } from './utils/imgPaths';

const App = () => {
  // States
  const [introStatus, setIntroStatus] = React.useState(true);
  const [menuStatus, setMenuStatus] = React.useState(true);
  const [superheroClass, setSuperheroClass] = React.useState('true');

  return (
    <React.Fragment>
      <div className="landscape">
        <img alt="landscape forced" src={landscapeImgPath} />
        <p>
          Change your device from portrait to landscape orientation to enjoy a
          better experience.
        </p>
      </div>
      {introStatus ? (
        <Intro endIntro={() => setIntroStatus(false)} />
      ) : (
        <Layout show={introStatus}>
          {menuStatus ? (
            <Menu
              goCharacter={superheroClass => {
                setSuperheroClass(superheroClass);
                setMenuStatus(false);
              }}
            />
          ) : (
            <Character superheroClass={superheroClass} />
          )}
        </Layout>
      )}
    </React.Fragment>
  );
};

export default hot(module)(App);
