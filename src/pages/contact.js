import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Contact = () => (
  <Layout>
    <Seo title="Contact Me" />
    <div className="container mt-10 px-4 md:px-0">
      <h2 className="text-4xl">Contact me</h2>
      <p className="mb-4">Please no support questions, questionnaires, etc.</p>
      <a
        className="hover:no-underline text-blue underline"
        href="mailto:andres.paranoid@gmail.com"
      >Contact</a>
    </div>
  </Layout>
);

export default Contact;