import React, { useState } from 'react';
// components
import CustomButton from '../button/CustomButton';
import DropdownMenu from './DropdownMenu';
import MobileNav from './MobileNav';

import blogr from '../../../images/logo.svg';
import hamburger from '../../../images/icon-hamburger.svg';
import arrow from '../../../images/icon-arrow-light.svg';
import btnStyles from '../button/buttons.style';

const Nav = function () {
  const [toggleMenu, setToggleMenu] = useState(false);
  const mobileMenu = () => setToggleMenu(!toggleMenu);

  const [deskDrop, setDeskDrop] = useState(false);
  const [deskDrop2, setDeskDrop2] = useState(false);
  const [deskDrop3, setDeskDrop3] = useState(false);

  const toggleDeskDrop = () => setDeskDrop(!deskDrop);
  const toggleDeskDrop2 = () => setDeskDrop2(!deskDrop2);
  const toggleDeskDrop3 = () => setDeskDrop3(!deskDrop3);

  return (
    <nav className="w-11/12 max-w-6xl m-auto pt-8 relative">
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-8">
          <a href="/home">
            <img src={blogr} alt="logo" />
          </a>
          <div className="hidden md:flex items-center">
            <div className="relative">
              <CustomButton
                onclick={toggleDeskDrop}
                btnText="product"
                btnStyle={btnStyles.underlineHover}
                src={arrow}
                alt="arrow"
                rotateArrow={`${deskDrop ? 'rotate-180' : ''} duration-300 ease`}
              />
              <div className={`${!deskDrop ? 'hidden' : ''} absolute z-30 py-8 px-6 w-40 bg-slate-100 rounded-lg`}>
                <DropdownMenu list="product" bold />
              </div>
            </div>
            <div>
              <CustomButton
                onclick={toggleDeskDrop2}
                btnText="company"
                btnStyle={btnStyles.underlineHover}
                src={arrow}
                alt="arrow"
                rotateArrow={`${deskDrop2 ? 'rotate-180' : ''} duration-300 ease`}
              />
              <div className={`${!deskDrop2 ? 'hidden' : ''} absolute z-30 py-8 px-6 w-40 bg-slate-100 rounded-lg`}>
                <DropdownMenu list="company" />
              </div>
            </div>
            <div>
              <CustomButton
                onclick={toggleDeskDrop3}
                btnText="connect"
                btnStyle={btnStyles.underlineHover}
                src={arrow}
                alt="arrow"
                rotateArrow={`${deskDrop3 ? 'rotate-180' : ''} duration-300 ease`}
              />
              <div className={`${!deskDrop3 ? 'hidden' : ''} absolute z-30 py-8 px-6 w-40 bg-slate-100 rounded-lg`}>
                <DropdownMenu list="connect" />
              </div>
            </div>
          </div>
        </ul>
        <ul className="flex items-center">
          <div className="hidden md:flex items-center gap-4">
            <CustomButton
              btnText="login"
              btnStyle={btnStyles.defaultBtn}
            />
            <CustomButton
              btnText="sign up"
              btnStyle={btnStyles.bgWhite}
            />
          </div>
          <div className="md:hidden">
            <CustomButton
              onclick={mobileMenu}
              src={hamburger}
              alt="hamburger menu"
            />
          </div>
        </ul>
      </div>
      <div className={`${!toggleMenu ? 'hidden' : ''} p-4 w-9/12 left-1/2 -translate-x-2/4 translate-y-4 bg-white flex flex-col items-center gap-4 text-center absolute z-20`}>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
