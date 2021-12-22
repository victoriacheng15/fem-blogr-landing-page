import React from 'react';
// components
import CustomButton from '../button/CustomButton';
import DropdownMenu from './DropdownMenu';

import btnStyles from '../button/buttons.style';

import darkArrow from '../../../images/icon-arrow-dark.svg';

const MobileNav = function () {
  return (
    <>
      <CustomButton
        btnText="product"
        defaultBtn={btnStyles.mobileBtn}
        src={darkArrow}
        alt="arrow"
      />
      <div className="hidden">
        <DropdownMenu list="product" />
      </div>
      <CustomButton
        btnText="company"
        defaultBtn={btnStyles.mobileBtn}
        src={darkArrow}
        alt="arrow"
      />
      <div className="hidden">
        <DropdownMenu list="company" />
      </div>
      <CustomButton
        btnText="connect"
        defaultBtn={btnStyles.mobileBtn}
        src={darkArrow}
        alt="arrow"
      />
      <div>
        <DropdownMenu list="connect" />
      </div>
    </>
  );
};

export default MobileNav;
