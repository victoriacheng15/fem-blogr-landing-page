/* eslint-disable react/prop-types */
import React from 'react';

const Navlink = function ({ href, linkText }) {
  return (
    <li>
      <a className="capitalize" href={href}>
        {linkText}
      </a>
    </li>
  );
};

export default Navlink;
