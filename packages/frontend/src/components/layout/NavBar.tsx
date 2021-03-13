import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Menu as MenuIcon } from '@material-ui/icons';
import infos from '../../constants/infos';
import Link from '../Link';
import useAppState from '../../hooks/useAppState';
import { useAuthUser } from 'next-firebase-auth';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: 36
  },
  title: {
    flexGrow: 1
  },
  appBarImage: {
    maxHeight: '60px',
    paddingRight: '12px'
  }
}));

const NavBar = (): ReactElement => {
  const classes = useStyles();
  const [current, send] = useAppState();
  const { signOut } = useAuthUser();
  const isAuthenticated = current.matches('user.loggedIn');

  const toggleDrawer = () => send('TOGGLE_DRAWER');

  return (
    <AppBar position="absolute" className={clsx(classes.appBar)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          className={clsx(classes.menuButton)}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        {/* <img className={classes.appBarImage} src={Logo} alt="ChessOpenings logo" /> */}
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {infos.siteName}
        </Typography>
        {!isAuthenticated && (
          <Button color="inherit" component={Link} href="/auth">
            Login
          </Button>
        )}
        {isAuthenticated && (
          <Button
            color="inherit"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
