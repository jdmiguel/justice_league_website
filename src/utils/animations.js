// INTRO ANIMATIONS

export const introLogoIntro = firstElementToAnimate => secondElementToAnimate => {
  TweenMax.fromTo(
    firstElementToAnimate,
    1.7,
    {
      alpha: 0,
      scaleX: 1.5,
      rotationY: 180,
      transformOrigin: '50% 50%'
    },
    {
      alpha: 1,
      scaleX: 1,
      rotationY: 0,
      transformOrigin: '50% 50%',
      ease: Back.easeInOut
    }
  );

  TweenMax.to(secondElementToAnimate, 3.5, {
    delay: 2.6,
    fillOpacity: 0.3,
    scale: 0.8,
    transformOrigin: '50% 50%',
    ease: Cubic.easeOut
  });
};

export const introLettersIntro = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    2.4,
    {
      cycle: { y: i => (i % 2 ? 50 * (i / 12) : -100 * (i / 12)) },
      alpha: 0,
      transformOrigin: '50% 50%'
    },
    {
      delay: 2,
      y: 0,
      alpha: 1,
      ease: Power1.easeOut
    },
    0.03
  );

  TweenMax.to(elementToAnimate, 2, {
    delay: 3,
    drawSVG: 0,
    stroke: '#FFFFFF',
    ease: Power1.easeInOut
  });
};

export const outIntro = elementToAnimate => {
  TweenMax.to(elementToAnimate, 0.5, {
    delay: 0,
    y: '-100%',
    ease: Cubic.easeIn
  });
};

// LETTERS MENU ANIMATIONS

export const introLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    1.1,
    {
      alpha: 0,
      x: -50,
      rotationY: 120,
      transformOrigin: '50% 50%'
    },
    {
      delay: 5,
      alpha: 1,
      x: 0,
      rotationY: 0,
      transformOrigin: '50% 50%',
      ease: Power1.easeOut
    },
    0.08
  );
};

export const inRightLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.55,
    {
      alpha: 0,
      cycle: { x: i => 50 + i * 40 },
      rotationY: 0
    },
    {
      delay: 0.35,
      x: 0,
      alpha: 1,
      rotationY: 0,
      ease: Power1.easeOut
    },
    0.01
  );
};

export const inLeftLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.55,
    {
      alpha: 0,
      cycle: { x: i => -200 + i * 20 },
      rotationY: 0
    },
    {
      delay: 0.35,
      x: 0,
      alpha: 1,
      rotationY: 0,
      ease: Power1.easeOut
    },
    0.01
  );
};

export const outRightLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.4,
    {
      alpha: 1,
      x: 0,
      rotationY: 0
    },
    {
      delay: 0,
      cycle: { x: i => 50 + i * 40 },
      alpha: 0,
      rotationY: 0,
      ease: Power1.easeIn
    },
    0.01
  );
};

export const outLeftLettersMenu = elementToAnimate => {
  TweenMax.staggerFromTo(
    elementToAnimate,
    0.4,
    {
      alpha: 1,
      x: 0,
      rotationY: 0
    },
    {
      delay: 0,
      cycle: { x: i => -200 + i * 20 },
      alpha: 0,
      rotationY: 0,
      ease: Power1.easeIn
    },
    0.01
  );
};

// MENU LOGO ANIMATIONS

export const introLogoMenu = firstElementToAnimate => secondElementToAnimate => callback => {
  TweenMax.fromTo(
    firstElementToAnimate,
    3,
    {
      alpha: 0,
      scale: 0.5,
      transformOrigin: '50% 50%'
    },
    {
      delay: 3.5,
      alpha: 1,
      scale: 1,
      transformOrigin: '50% 50%',
      ease: Power1.easeOut,
      onComplete: () => callback()
    }
  );

  TweenMax.fromTo(
    secondElementToAnimate,
    6.5,
    {
      drawSVG: '100%'
    },
    {
      delay: '-=3.5',
      drawSVG: 0,
      ease: Power1.easeOut
    }
  );
};
