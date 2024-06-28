import React from 'react';
import { Typography } from '@mui/material';
import Header from '@/components/common/Header';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Typography variant="h4" align="center" gutterBottom>
        User Dashboard
      </Typography>
      <Typography variant="body1" align="center">
        Welcome to your dashboard.
      </Typography>
    </div>
  );
};

export default DashboardPage;
