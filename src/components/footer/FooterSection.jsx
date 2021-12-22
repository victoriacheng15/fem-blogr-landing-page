import React from 'react';
// components
import DropdownMenu from '../nav/DropdownMenu';

import blogr from '../../../images/logo.svg';

const FooterSection = function () {
  const h4Style = 'text-lg text-white capitalize font-semibold';

  return (
    <footer className="mt-10 p-10 bg-neutral-bgFooter rounded-tr-100 text-neutral-txtFooter">
      <div className="w-9/12 max-w-6xl m-auto flex flex-col gap-8 items-center lg:flex-row lg:items-start lg:justify-between">
        <a href="/home">
          <img src={blogr} alt="logo" />
        </a>
        <div>
          <h4 className={h4Style}>product</h4>
          <DropdownMenu list="product" />
        </div>
        <div>
          <h4 className={h4Style}>company</h4>
          <DropdownMenu list="company" />
        </div>
        <div>
          <h4 className={h4Style}>connect</h4>
          <DropdownMenu list="connect" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
