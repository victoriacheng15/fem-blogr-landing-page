/* eslint-disable no-nested-ternary */
import React from 'react';

const CustomButton = function ({ src, alt, btnText, btnStyle, onclick, rotateArrow }) {
  return (
    <button onClick={onclick} type="button" className={`${btnStyle}`}>
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
};

export default CustomButton;
