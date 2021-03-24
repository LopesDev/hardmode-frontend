import React from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../layout/Theme';
import GlobalStyles from '../layout/GlobalStyles';

import Header from '../components/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>HardMode Clan</title>
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header />

      </ThemeProvider>
    </>
  )
}
