import React from 'react';
import CustomButton from '../button/CustomButton';
import Nav from '../nav/Nav';

import btnStyles from '../button/buttons.style';

const Header = function () {
  return (
    <header
      className="w-full h-[37.5rem] rounded-bl-100 bg-gradient-to-b from-gradientLight-925 to-gradientLight-950
        md:bg-gradient-to-r
        relative content-none before:absolute before:inset-0 before:w-full before:h-full
        before:bg-[url('/images/bg-pattern-intro-mobile.svg')]
        before:bg-auto before:bg-custom before:bg-no-repeat overflow-hidden"
    >
      <Nav />
      <div className="w-11/12 max-w-7xl m-auto relative z-10 mb-10 grid place-items-center gap-4 content-center">
        <h1 className="pt-32 w-[95%] mb-4 text-white text-4xl lg:text-6xl text-center">A modern publishing platofrm</h1>
        <p className="mb-8 text-white text-xl text-center"> Grow your audience andbuild your online brand</p>
        <div className="flex items-center gap-4">
          <CustomButton
            btnText="start for free"
            defaultBtn={btnStyles.defaultBtn}
            bg={btnStyles.bgWhite}
            hover={btnStyles.hover}
          />
          <CustomButton
            btnText="learn more"
            defaultBtn={btnStyles.defaultBtn}
            border={btnStyles.border}
            hover={btnStyles.whiteHover}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
