import React from 'react';
import Navlink from './Navlink';

const DropdownMenu = function ({ list, darkText }) {
  const productList = ['overview', 'pricing', 'marketplace', 'features', 'integrations'];
  const companyList = ['about', 'team', 'blog', 'careers'];
  const connectList = ['contact', 'newsletter', 'linkedin'];

  const populateList = (category) => {
    if (category === 'product') {
      return productList.map((text) => <Navlink key={text} href={`/${text}`} linkText={text} />);
    }

    if (category === 'company') {
      return companyList.map((text) => <Navlink key={text} href={`/${text}`} linkText={text} />);
    }

    if (category === 'connect') {
      return connectList.map((text) => <Navlink key={text} href={`/${text}`} linkText={text} />);
    }
  };

  return (
    <ul className={`flex flex-col gap-2 items-center justify-center lg:items-start ${!darkText ? 'text-gradientDark-925' : 'text-neutral-txtFooter'}`}>
      {populateList(list)}
    </ul>
  );
};

export default DropdownMenu;
