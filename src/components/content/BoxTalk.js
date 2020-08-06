import PropTypes from 'prop-types';
import React from 'react';

const BoxTalk = ({ name, url, imageUrl }) => {
  const linkTo = `https://slides.com${url}`;

  return (
    <div className="mb-8 md:w-1/3 md:mb-0 md:py-4 md:px-2">
      <h3 className="text-2xl">
        <a href={ linkTo } target="_blank" rel="noopener noreferrer">{ name }</a>
      </h3>
      <img src={ imageUrl } alt={ name } />
    </div>
  );
};

BoxTalk.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string
};

export default BoxTalk;
