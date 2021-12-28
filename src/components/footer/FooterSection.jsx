import React from 'react';
// components
import DropdownMenu from '../nav/DropdownMenu';
import MadeBy from './MadeBy';

import blogr from '../../../images/logo.svg';

const FooterSection = () => {
  const h4Style = 'font-overpass text-xl text-white capitalize font-semibold';

  return (
    <footer className="p-10 mt-10 bg-neutral-bgFooter rounded-tr-100 text-neutral-txtFooter">
      <div className="flex flex-col items-center w-9/12 max-w-6xl gap-8 m-auto lg:flex-row lg:items-start lg:justify-between">
        <a href="/home">
          <img className="mb-6" src={blogr} alt="logo" />
        </a>
        <section className="grid gap-4 text-center lg:text-left">
          <h4 className={h4Style}>product</h4>
          <DropdownMenu list="product" classes="grid gap-2" />
        </section>
        <section className="grid gap-4 text-center lg:text-left">
          <h4 className={h4Style}>company</h4>
          <DropdownMenu list="company" classes="grid gap-2" />
        </section>
        <section className="grid gap-4 text-center lg:text-left">
          <h4 className={h4Style}>connect</h4>
          <DropdownMenu list="connect" classes="grid gap-2" />
        </section>
      </div>
      <MadeBy />
    </footer>
  );
};

export default FooterSection;
