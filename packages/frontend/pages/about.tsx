import * as React from 'react';
import ProTip from '../src/components/ProTip';
import Link from '../src/components/Link';
import Layout from '../src/components/layout/Layout';
import Head from 'next/head';
import { Container, Box, Typography, Button } from '@material-ui/core';

export default function About(): React.ReactElement {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js v5-alpha with TypeScript example
          </Typography>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the main page
          </Button>
          <ProTip />
        </Box>
      </Container>
    </Layout>
  );
}
