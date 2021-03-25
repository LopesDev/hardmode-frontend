import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { ChallengesProvider } from '../context/AuthContext';

import Header from '../components/header';

import WellcomeSection from '../container/wellcome-section';

import theme from '../layout/Theme';
import GlobalStyles from '../layout/GlobalStyles';

export default function Home() {
  return (
    <>
      <Head>
        <title>HardMode Clan</title>
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <ChallengesProvider authData={{ bearer: '', expiration: '' }}>
          <Header />
          <WellcomeSection />
        </ChallengesProvider>

      </ThemeProvider>
    </>
  )
}
