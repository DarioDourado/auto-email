import React from 'react';
import { Typography } from '@mui/material';
import Header from '@/components/common/Header';



const MainProductPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Typography variant="h4" align="center" gutterBottom>
        Main Product Page
      </Typography>
      <Typography variant="body1" align="center">
        Welcome to AutoEmail, your automated email management solution.
      </Typography>
    </div>
  );
};

export default MainProductPage;
