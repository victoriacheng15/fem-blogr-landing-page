import React from 'react';
// components
import InfoBlock from '../info-block/InfoBlock';

import circles from '../../../images/bg-pattern-circles.svg';
import editor from '../../../images/illustration-editor-mobile.svg';
import phones from '../../../images/illustration-phones.svg';
import laptop from '../../../images/illustration-laptop-mobile.svg';

const Main = function () {
  return (
    <main className="py-36 flex flex-col items-center justify-center gap-20 overflow-hidden">
      <div className="my-20 text-primary-heading text-center">
        <h2 className="text-4xl font-semibold">Designed for the future</h2>
      </div>
      <div className="max-w-6xl lg:h-[28rem] flex flex-col gap-8 lg:flex-row-reverse relative">
        <section className="px-5 flex-1 grid-center">
          <img className="img-full-width lg:absolute lg:w-10/12 lg:-right-[18.75rem]" src={editor} alt="editor" />
        </section>
        <div className="flex-1 flex flex-col gap-8 justify-between">
          <InfoBlock
            title="Introducing an extensible editor"
            textBlock="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
            change the looks of a blog."
          />
          <InfoBlock
            title="Robust content management"
            textBlock="Flexible content management enables users to easily move through posts. Increase the usability of your blog
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
          />
        </div>
      </div>
      <div className="mt-72 lg:mt-48 h-[38rem] lg:h-[25rem] w-full
        bg-gray-800 rounded-bl-100 rounded-tr-100 relative content-none after:w-full after:h-[65%] after:absolute after:bg-white after:-top-[25rem] lg:after:-top-[16.25rem] -z-10"
      >
        <div className="max-w-6xl h-full m-auto flex flex-col gap-8 lg:flex-row">
          <section className="mb-8 flex-1 grid-center">
            <img className="img-full-width absolute sm:max-w-lg lg:w-full -top-[40%] sm:-top-[40%] lg:-top-20 z-10" src={phones} alt="phones" />
            <div className="w-full absolute sm:w-9/12 lg:w-[40%] sm:-top-[15.625rem] lg:-top-[15.625rem] lg:left-20">
              <img className="img-full-width" src={circles} alt="circles" />
            </div>
          </section>
          <div className="mb-28 flex-1 p-4 grid-center lg:m-0">
            <InfoBlock
              dark
              title="State of the Art Infrastructure"
              textBlock="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
            />
          </div>
        </div>
      </div>
      <div className="max-w-6xl lg:mt-32 lg:h-[28.125rem] flex flex-col gap-8 lg:flex-row relative">
        <section className="mb-8 px-5 flex-1 grid-center">
          <img className="img-full-width lg:absolute lg:-left-[29rem]" src={laptop} alt="laptop" />
        </section>
        <div className="lg:pr-20 flex-1 flex flex-col gap-8 justify-between">
          <InfoBlock
            title="Free, open, simple"
            textBlock="Blogr is a free and open source application backed by a large community of helpful developers. It supports
        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.."
          />
          <InfoBlock
            title="Powerful tooling"
            textBlock="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
        capable of producing even the most complicated sites."
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
