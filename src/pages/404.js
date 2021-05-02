import React from 'react'
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not Found" />
    <div className="container mt-10 px-4 md:px-0">
      <h1 className="text-6xl">
        (ノಠ益ಠ)ノ彡 <div className="transform rotate-180">404</div>
      </h1>
      <p>Nothing to see here - move on</p>
    </div>
  </Layout>
);

export default NotFoundPage;
