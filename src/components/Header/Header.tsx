import React from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';

export const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ borderRadius: '5px' }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PhoneBook
            </Typography>
            <Button color="inherit">exit</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
