import React, { Fragment } from 'react';
import Repo from './Repo';
import useResources from '../../../hooks/useResources';

const Repos = () => {
  const { resources, isLoading, isError } = useResources('Angelfire');

  const items = resources.slice(0, 6).map(i => {
    const props = {
      name: i.name,
      description: i.description,
      url: i.html_url,
      language: i.language,
    };

    return <Repo key={i.name} {...props} />;
  });

  return (
    <div className="bg-gray-100 mt-4 md:mt-10">
      <div className="container px-4 py-4 md:px-0 md:py-8">
        {isError && <div>Something went wrong</div>}

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Fragment>
            <h3 className="text-4xl">Latest Repos</h3>
            <div className="flex-none md:flex md:flex-wrap">{ items }</div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Repos;
