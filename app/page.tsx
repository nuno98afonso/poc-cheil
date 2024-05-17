import React from 'react';
import Layout from './layout';
import { Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h3">Welcome to Your App!</Typography>
      <Typography variant="body1">This is the home page content.</Typography>
    </Layout>
  );
};

export default HomePage;
