import React from 'react';
// components
import DropdownMenu from '../nav/DropdownMenu';
import MadeBy from './MadeBy';

import blogr from '../../../images/logo.svg';

const FooterSection = function () {
  const h4Style = 'mb-8 font-overpass text-xl text-white capitalize font-semibold';

  return (
    <footer className="mt-10 p-10 bg-neutral-bgFooter rounded-tr-100 text-neutral-txtFooter">
      <div className="w-9/12 max-w-6xl m-auto flex flex-col gap-8 items-center lg:flex-row lg:items-start lg:justify-between">
        <a href="/home">
          <img className="mb-6" src={blogr} alt="logo" />
        </a>
        <div className="flex flex-col items-center lg:items-start">
          <h4 className={h4Style}>product</h4>
          <DropdownMenu list="product" darkText />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h4 className={h4Style}>company</h4>
          <DropdownMenu list="company" darkText />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h4 className={h4Style}>connect</h4>
          <DropdownMenu list="connect" darkText />
        </div>
      </div>
      <MadeBy />
    </footer>
  );
};

export default FooterSection;
