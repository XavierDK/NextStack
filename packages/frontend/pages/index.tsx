import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../web/components/layout/Layout';
import { Container } from '@material-ui/core';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import path from 'path';
import fs from 'fs';
import { GetStaticProps } from 'next';

type Props = {
  content: string;
};

export default function Home({ content }: Props): ReactElement {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Container>{unified().use(parse).use(remark2react).processSync(content).result}</Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const dir = path.resolve('./README.md');
  const fileContent = fs.readFileSync(dir, 'utf8');
  return {
    props: {
      content: fileContent
    }
  };
};
