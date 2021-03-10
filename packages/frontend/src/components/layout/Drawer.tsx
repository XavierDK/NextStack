import {
  Divider,
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Link from '../Link';
import pages from '../../constants/pages';
import useAppState from '../../hooks/useAppState';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(9)} + 1px)`
    }
  },
  drawerContainer: {
    overflow: 'auto'
  },
  navLink: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

const Drawer = (): ReactElement => {
  const classes = useStyles();
  const [current] = useAppState();
  const isDrawerOpened = current.matches('drawer.opened');
  return (
    <MUIDrawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isDrawerOpened,
        [classes.drawerClose]: !isDrawerOpened
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isDrawerOpened,
          [classes.drawerClose]: !isDrawerOpened
        })
      }}
      open={isDrawerOpened}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {pages.map((page) => (
            <Link key={page.id} href={page.href} className={classes.navLink} underline="none">
              <ListItem button>
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText primary={page.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
      <Divider />
    </MUIDrawer>
  );
};

export default Drawer;
