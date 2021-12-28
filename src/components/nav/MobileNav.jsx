import React, { useState } from 'react';
// components
import CustomButton from '../button/CustomButton';
import DropdownMenu from './DropdownMenu';

import darkArrow from '../../../images/icon-arrow-dark.svg';

const MobileNav = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);
  const toggleDropdown2 = () => setDropdown2(!dropdown2);
  const toggleDropdown3 = () => setDropdown3(!dropdown3);

  return (
    <>
      <CustomButton
        onclick={toggleDropdown}
        btnText="product"
        classes="btn text-black"
        src={darkArrow}
        alt="arrow"
        rotateArrow={`${dropdown ? 'rotate-180' : ''} duration-300 ease`}
      />
      <DropdownMenu list="product" classes={`${!dropdown ? 'hidden' : ''} mobile-dropdown`} />
      <CustomButton
        onclick={toggleDropdown2}
        btnText="company"
        classes="btn text-black"
        src={darkArrow}
        alt="arrow"
        rotateArrow={`${dropdown2 ? 'rotate-180' : ''} duration-300 ease`}
      />
      <DropdownMenu list="company" classes={`${!dropdown2 ? 'hidden' : ''} mobile-dropdown`} />
      <CustomButton
        onclick={toggleDropdown3}
        btnText="connect"
        classes="btn text-black"
        src={darkArrow}
        alt="arrow"
        rotateArrow={`${dropdown3 ? 'rotate-180' : ''} duration-300 ease`}
      />
      <DropdownMenu list="company" classes={`${!dropdown3 ? 'hidden' : ''} mobile-dropdown`} />
      <div className="grid justify-center w-full gap-2 p-4 border-t-2">
        <CustomButton
          btnText="login"
          classes="btn text-black"
        />
        <CustomButton
          btnText="sign up"
          classes="btn w-28 text-white bg-gradient-to-r from-gradientLight-925 to-gradientLight-950"
        />
      </div>
    </>
  );
};

export default MobileNav;
