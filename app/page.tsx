import React from 'react';
import Layout from './components/Layout/layout';
import Header from './components/Layout/header';
import { useSession } from 'next-auth/react';
import Profile from './components/Layout/profile';

const Component = () => {

  return (
    <>
      <Layout><Header />
      <div>Welcome, </div>;
      </Layout>
    </>
    
  )
};

export default Component;
