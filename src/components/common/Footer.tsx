import React from 'react';
import { Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} AutoEmail. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
