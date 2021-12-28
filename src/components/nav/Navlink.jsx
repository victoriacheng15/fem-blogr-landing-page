/* eslint-disable react/prop-types */
import React from 'react';

const Navlink = ({ href, linkText }) => (
  <li>
    <a className="font-medium capitalize font-ubuntu hover:font-semibold" href={href}>
      {linkText}
    </a>
  </li>
);

export default Navlink;
