import React from 'react';
import { Typography } from '@mui/material';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" align="center">
        Sorry, the page you are looking for does not exist.
      </Typography>
    </div>
  );
};

export default NotFoundPage;
