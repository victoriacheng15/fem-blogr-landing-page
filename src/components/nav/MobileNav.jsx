import React, { useState } from 'react';
// components
import CustomButton from '../button/CustomButton';
import DropdownMenu from './DropdownMenu';

import btnStyles from '../button/buttons.style';
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
        btnStyle={btnStyles.mobileBtn}
        src={darkArrow}
        alt="arrow"
        rotateArrow={`${dropdown ? 'rotate-180' : ''} duration-300 ease`}
      />
      <DropdownMenu list="product" classes={`${!dropdown ? 'hidden' : ''} mobile-dropdown`} />
      <CustomButton
        onclick={toggleDropdown2}
        btnText="company"
        btnStyle={btnStyles.mobileBtn}
        src={darkArrow}
        alt="arrow"
        rotateArrow={`${dropdown2 ? 'rotate-180' : ''} duration-300 ease`}
      />
      <DropdownMenu list="company" classes={`${!dropdown2 ? 'hidden' : ''} mobile-dropdown`} />
      <CustomButton
        onclick={toggleDropdown3}
        btnText="connect"
        btnStyle={btnStyles.mobileBtn}
        src={darkArrow}
        alt="arrow"
        rotateArrow={`${dropdown3 ? 'rotate-180' : ''} duration-300 ease`}
      />
      <DropdownMenu list="company" classes={`${!dropdown3 ? 'hidden' : ''} mobile-dropdown`} />
      <div className="grid justify-center w-full gap-2 p-4 border-t-2">
        <CustomButton
          btnText="login"
          btnStyle={btnStyles.mobileBtn}
        />
        <CustomButton
          btnText="sign up"
          btnStyle={btnStyles.mobileGradient}
        />
      </div>
    </>
  );
};

export default MobileNav;
