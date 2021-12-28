import React from 'react';
import CustomButton from '../button/CustomButton';
import Nav from '../nav/Nav';

import btnStyles from '../button/buttons.style';

const Header = () => (
  <header
    className="w-full h-[37.5rem] rounded-bl-100 bg-gradient-to-b from-gradientLight-925 to-gradientLight-950
        md:bg-gradient-to-r
        relative content-none before:absolute before:inset-0 before:w-full before:h-full
        before:bg-[url('/images/bg-pattern-intro-mobile.svg')]
        before:bg-auto before:bg-custom before:bg-no-repeat overflow-hidden"
  >
    <Nav />
    <div className="relative z-10 grid content-center w-11/12 gap-4 m-auto mb-10 max-w-7xl place-items-center">
      <h1 className="pt-32 w-[95%] mb-4 fonr-overpass font-medium text-white text-4xl lg:text-6xl text-center">A modern publishing platofrm</h1>
      <p className="mb-8 text-xl text-center text-white font-ubuntu"> Grow your audience andbuild your online brand</p>
      <div className="flex items-center gap-4">
        <CustomButton
          btnText="start for free"
          btnStyle={btnStyles.bgWhite}
        />
        <CustomButton
          btnText="learn more"
          btnStyle={btnStyles.borderBtn}
        />
      </div>
    </div>
  </header>
);

export default Header;
