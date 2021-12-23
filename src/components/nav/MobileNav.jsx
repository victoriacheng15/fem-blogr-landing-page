import React, { useState } from 'react';
// components
import CustomButton from '../button/CustomButton';
import DropdownMenu from './DropdownMenu';

import btnStyles from '../button/buttons.style';
import darkArrow from '../../../images/icon-arrow-dark.svg';

const MobileNav = function () {
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
      <div className={`${!dropdown ? 'hidden' : ''} w-full p-4 bg-neutral-body/25 rounded-lg`}>
        <DropdownMenu list="product" />
      </div>
      <CustomButton
        onclick={toggleDropdown2}
        btnText="company"
        btnStyle={btnStyles.mobileBtn}
        src={darkArrow}
        alt="arrow"
        rotateArrow={`${dropdown2 ? 'rotate-180' : ''} duration-300 ease`}
      />
      <div className={`${!dropdown2 ? 'hidden' : ''} w-full p-4 bg-neutral-body/25 rounded-lg`}>
        <DropdownMenu list="company" />
      </div>
      <CustomButton
        onclick={toggleDropdown3}
        btnText="connect"
        btnStyle={btnStyles.mobileBtn}
        src={darkArrow}
        alt="arrow"
        rotateArrow={`${dropdown3 ? 'rotate-180' : ''} duration-300 ease`}
      />
      <div className={`${!dropdown3 ? 'hidden' : ''} w-full p-4 bg-neutral-body/25 rounded-lg`}>
        <DropdownMenu list="connect" />
      </div>
      <div className="p-4 w-full grid gap-2 justify-center border-t-2">
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
