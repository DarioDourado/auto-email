import React from 'react';
import { Typography } from '@mui/material';
import Header from '@/components/common/Header';

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur ut velit at ultricies.
      </Typography>
    </div>
  );
};

export default AboutUsPage;
