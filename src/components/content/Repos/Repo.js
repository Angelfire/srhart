import PropTypes from 'prop-types';
import React from 'react';

const Repo = ({ name, description, url, language }) => (
  <div className="pb-6 md:w-1/3">
    <h3 className="text-2xl">
      <a className="text-blue pr-2" href={url}>{name}</a>
      {language ? <span className="align-middle bg-blue font-mono rounded text-xs text-white">{language}</span> : null}
    </h3>
    <p className="latest-repo__decription">{description}</p>
  </div>
);

Repo.propTypes = {
  description: PropTypes.string,
  language: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string
};

export default Repo;