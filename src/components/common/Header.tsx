import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleAboutUs = () => {
    router.push('/about-us');
  };

  const handleHome = () => {
    router.push('/main-products');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AutoEmail
        </Typography>
        <Button color="inherit" onClick={handleHome}>Home</Button>
        <Button color="inherit" onClick={handleAboutUs}>About Us</Button>
        <Button color="inherit" onClick={handleLogin}>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
