import React from 'react';
// components
import CustomButton from '../button/CustomButton';
import MobileNav from './MobileNav';

import blogr from '../../../images/logo.svg';
import hamburger from '../../../images/icon-hamburger.svg';
import arrow from '../../../images/icon-arrow-light.svg';
import btnStyles from '../button/buttons.style';

const Nav = function () {
  return (
    <nav className="w-11/12 max-w-6xl m-auto pt-8 relative z-10">
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-8">
          <a href="/home">
            <img src={blogr} alt="logo" />
          </a>
          <div className="hidden md:flex items-center">
            <CustomButton
              btnText="product"
              defaultBtn={btnStyles.defaultBtn}
              src={arrow}
              alt="arrow"
            />
            <CustomButton
              btnText="company"
              defaultBtn={btnStyles.defaultBtn}
              src={arrow}
              alt="arrow"
            />
            <CustomButton
              btnText="connect"
              defaultBtn={btnStyles.defaultBtn}
              src={arrow}
              alt="arrow"
            />
          </div>
        </ul>
        <u className="flex items-center">
          <div className="hidden md:flex items-center gap-4">
            <CustomButton
              btnText="login"
              defaultBtn={btnStyles.defaultBtn}
              whiteText={btnStyles.whiteText}
            />
            <CustomButton
              btnText="sign up"
              defaultBtn={btnStyles.defaultBtn}
              bg={btnStyles.bgWhite}
              hover={btnStyles.hover}
            />
          </div>
          <div className="md:hidden">
            <CustomButton src={hamburger} alt="hamburger menu" />
          </div>
        </u>
      </div>
      <div className="p-4 w-full m-auto bg-slate-100 flex flex-col items-center gap-4 text-center absolute z-10">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
