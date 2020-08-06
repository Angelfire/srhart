import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import BoxProject from '../components/content/BoxProject';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const Projects = () => {
  const { allProject: { nodes } } = useStaticQuery(graphql`
  query MyProjectsQuery {
    allProject {
      nodes {
        description
        image
        linkTo
        name
        tag
      }
    }
  }
`);

  return (
    <Layout>
      <SEO title="Projects" />
      <div className="container mt-10 px-4 md:px-0">
        <h2 className="text-4xl">Projects</h2>
        <p>Small projects made in my spare time</p>
        <div className="md:flex md:flex-wrap">
          {nodes.map(project => <BoxProject key={ project.name } { ...project } />)}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
