import React, { ReactElement } from 'react';
import Head from 'next/head';
import { Box, makeStyles, Container, CssBaseline } from '@material-ui/core';
import Copyright from './Copyright';
import Drawer from './Drawer';
import NavBar from './NavBar';
import infos from '../../constants/infos';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

type Props = {
  children: ReactElement | ReactElement[];
};

const Layout = (props: Props): ReactElement => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div>
      <Head>
        <meta name="description" content={infos.description} />
        <meta name="og:title" content="NextJS" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <div className={classes.root}>
        <NavBar />
        <Drawer />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth={false} className={classes.container}>
            {children}
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default Layout;
