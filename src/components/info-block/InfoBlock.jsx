import React from 'react';

const InfoBlock = ({ title, textBlock, dark }) => {
  const darkTitle = 'mb-8 font-overpass text-center text-2xl lg:text-3xl text-primary-heading font-semibold lg:text-left';
  const darkParaph = 'font-ubuntu text-center text-lg text-neutral-body lg:text-left';

  const lightTitle = 'mb-8 font-overpass text-center text-3xl lg:text-3xl text-white font-semibold lg:text-left';
  const lightParaph = 'font-ubuntu text-center text-lg text-white lg:text-left';

  return (
    <section className="w-full px-4 m-auto">
      <h3 className={!dark ? darkTitle : lightTitle}>{title}</h3>
      <p className={!dark ? darkParaph : lightParaph}>{textBlock}</p>
    </section>
  );
};

export default InfoBlock;
