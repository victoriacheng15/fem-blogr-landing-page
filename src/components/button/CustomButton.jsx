/* eslint-disable no-nested-ternary */
import React from 'react';

const CustomButton = ({ src, alt, btnText, classes, onclick, rotateArrow }) => (
  <button onClick={onclick} type="button" className={classes}>
    {
        btnText && src
          ? (
            <span className="flex items-center gap-2 capitalizez">
              {btnText}
              <img className={rotateArrow} src={src} alt={alt} />
            </span>
          ) : src
            ? <img src={src} alt={alt} />
            : btnText
      }
  </button>
);

export default CustomButton;
