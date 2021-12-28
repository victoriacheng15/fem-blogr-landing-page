import React, { useState } from 'react';
// components
import CustomButton from '../button/CustomButton';
import DropdownMenu from './DropdownMenu';
import MobileNav from './MobileNav';

import blogr from '../../../images/logo.svg';
import hamburger from '../../../images/icon-hamburger.svg';
import arrow from '../../../images/icon-arrow-light.svg';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const mobileMenu = () => setToggleMenu(!toggleMenu);

  const [deskDrop, setDeskDrop] = useState(false);
  const [deskDrop2, setDeskDrop2] = useState(false);
  const [deskDrop3, setDeskDrop3] = useState(false);

  const toggleDeskDrop = () => setDeskDrop(!deskDrop);
  const toggleDeskDrop2 = () => setDeskDrop2(!deskDrop2);
  const toggleDeskDrop3 = () => setDeskDrop3(!deskDrop3);

  return (
    <nav className="relative w-11/12 max-w-6xl pt-8 m-auto">
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-8">
          <li>
            <a href="/home">
              <img src={blogr} alt="logo" />
            </a>
          </li>
          <li className="relative hidden md:flex">
            <CustomButton
              onclick={toggleDeskDrop}
              btnText="product"
              classes="btn text-white hover:underline"
              src={arrow}
              alt="arrow"
              rotateArrow={`${deskDrop ? 'rotate-180' : ''} duration-300 ease`}
            />
            <DropdownMenu list="product" classes={`${!deskDrop ? 'hidden' : ''} desktop-dropdown`} />
          </li>
          <li className="relative hidden md:flex">
            <CustomButton
              onclick={toggleDeskDrop2}
              btnText="company"
              classes="btn text-white hover:underline"
              src={arrow}
              alt="arrow"
              rotateArrow={`${deskDrop2 ? 'rotate-180' : ''} duration-300 ease`}
            />
            <DropdownMenu list="company" classes={`${!deskDrop2 ? 'hidden' : ''} desktop-dropdown`} />
          </li>
          <li className="relative hidden md:flex">
            <CustomButton
              onclick={toggleDeskDrop3}
              btnText="connect"
              classes="btn text-white hover:underline"
              src={arrow}
              alt="arrow"
              rotateArrow={`${deskDrop3 ? 'rotate-180' : ''} duration-300 ease`}
            />
            <DropdownMenu list="connect" classes={`${!deskDrop3 ? 'hidden' : ''} desktop-dropdown`} />
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <CustomButton
            btnText="login"
            classes="btn text-white hidden md:flex"
          />
          <CustomButton
            btnText="sign up"
            classes="btn bg-white text-primary-cta hover:bg-primary-ctaHover hover:text-white hidden md:flex"
          />
          <CustomButton
            onclick={mobileMenu}
            src={hamburger}
            alt="hamburger menu"
            classes="md:hidden"
          />
        </div>
      </div>
      <div className={`${!toggleMenu ? 'hidden' : ''} p-4 w-9/12 left-1/2 -translate-x-2/4 translate-y-4 bg-white flex flex-col items-center gap-3 text-center absolute z-20`}>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
