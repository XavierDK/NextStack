import { ThemeProvider } from '@material-ui/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement, useEffect } from 'react';
import theme from '../web/constants/theme';
import DebugMenu from '../web/components/DebugMenu';
import '../web/utils/debug'; // Needed to make debug working
import CacheProvider from '../web/utils/cache';
import { UserProvider } from '@auth0/nextjs-auth0';
import AppProvider from '../web/providers/AppProvider';

export default function App(props: AppProps): ReactElement {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider>
      <UserProvider>
        <AppProvider>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <DebugMenu />
          </ThemeProvider>
        </AppProvider>
      </UserProvider>
    </CacheProvider>
  );
}
