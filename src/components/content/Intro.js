import React from 'react';
import ProfilePic from '../../images/profile.jpg';

const Intro = () => (
  <div className="w-full lg:w-1/3 flex flex-col items-center">
    <h2 className="text-5xl">Andrés Bedoya</h2>
    <img className="rounded-full my-6" src={ ProfilePic } alt="Andrés Bedoya" />
    <h3 className="text-3xl">Hardcore Javascript Developer</h3>
    <p className="py-6">
      Blogger Evangelist at{' '}
      <a
        aria-label="Geek the Planet blog"
        className="hover:no-underline text-blue underline"
        href="https://geektheplanet.net"
        rel="noopener noreferrer"
        target="_blank"
        title="Geek the Planet"
      >Geek the Planet</a>
      {' '} - {' '}
      <a
        aria-label="Velocidad de Escape blog"
        className="hover:no-underline text-blue underline"
        href="https://velocidadescape.com/"
        rel="noopener noreferrer"
        target="_blank"
        title="Velocidad de Escape"
      >Velocidad de Escape</a>
    </p>
    <p>
      Front-end developer with more than 9 years of experience -
      Node.js/Python/Deno enthusiast
    </p>
  </div>
);

export default Intro;
