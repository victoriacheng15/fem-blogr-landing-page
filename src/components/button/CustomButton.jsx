/* eslint-disable no-nested-ternary */
import React from 'react';

const CustomButton = function ({
  src, alt, btnText, defaultBtn, whiteText, bg, border, hover, onclick,
}) {
  return (
    <button
      onClick={onclick}
      type="button"
      className={`${defaultBtn} ${whiteText || ''} ${bg || ''} ${border || ''} ${hover || ''}`}
    >
      {
        btnText && src
          ? (
            <span className="flex items-center gap-2 capitalizez">
              {btnText}
              <img src={src} alt={alt} />
            </span>
          ) : src
            ? <img src={src} alt={alt} />
            : btnText
      }
    </button>
  );
};

export default CustomButton;
