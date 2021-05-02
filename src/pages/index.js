import React from 'react';
import Footer from '../components/content/Footer';
import Intro from '../components/content/Intro';
import Layout from '../components/Layout';
import Repos from '../components/content/Repos/Repos';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container flex flex-wrap mt-10"> 
      <Intro />
      <Repos />
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
