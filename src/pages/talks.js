import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import BoxTalk from '../components/content/BoxTalk';
import SEO from '../components/Seo';

const Talks = () => {
  const { allTalk: { nodes } } = useStaticQuery(graphql`
    query myTalks {
      allTalk {
        nodes {
          imageUrl
          name
          url
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Talks" />
      <div className="container mt-10 px-4 md:px-0">
        <h2 className="text-4xl">Talks</h2>
        <div className="md:flex md:flex-wrap">
          {nodes.map(talk => <BoxTalk key={talk.name} {...talk} />)}
        </div>
      </div>
    </Layout>
  );
};

export default Talks;
