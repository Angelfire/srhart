import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

const Header = ({ siteTitle }) => {
  const { allMenu: { nodes } } = useStaticQuery(graphql`
    query MyMenus {
      allMenu {
        nodes {
          linkTo
          name
        }
      }
    }
  `);

  return (
    <header className="border-b border-gray-300">
      <div
        className="container px-4 py-4 md:px-0 flex flex-col items-center md:flex-row md:justify-between"
      >
        <h1>
          <Link to="/">{ siteTitle }</Link>
        </h1>
        <nav>
          {nodes.map(item => (
            <Link
              key={ item.name }
              className="px-2 hover:text-blue hover:underline"
              activeClassName="text-blue"
              to={ item.linkTo }
            >
              { item.name }
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
