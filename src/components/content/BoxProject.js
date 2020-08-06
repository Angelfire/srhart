import PropTypes from 'prop-types';
import React from 'react';

export const BoxProject = ({ name, linkTo, description, image, tag }) => (
  <div className="mb-8 md:w-1/3 md:mb-0 md:py-4 md:px-2">
    <a href={ linkTo } target="_blank" rel="noopener noreferrer">
      <img src={ image } alt={ name } />
      <h3 className="text-2xl">
        { name }
        <span className="align-middle bg-blue font-mono ml-2 rounded text-xs text-white">{ tag }</span>
      </h3>
      <p>{ description }</p>
    </a>
  </div>
);

BoxProject.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  linkTo: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string
};

export default BoxProject;
