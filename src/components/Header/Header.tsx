import React from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { AppRoutes, LinksApi } from 'types/types';
import { queryClient, useExitUser } from 'api';
import { removeTokenLocalStore } from 'utils/LocalStore';

export const Header = () => {
  const navigator = useNavigate();
  const { mutateAsync } = useExitUser();

  const handleClickLogo = () => {
    navigator(AppRoutes.home);
  };

  const handleClickExitUser = async () => {
    await mutateAsync();

    removeTokenLocalStore();
    queryClient.setQueryData(LinksApi.getAllContactsKey, null);
  };

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
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={handleClickLogo}
            >
              PhoneBook
            </Typography>
            <Button color="inherit" onClick={handleClickExitUser}>
              exit
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
