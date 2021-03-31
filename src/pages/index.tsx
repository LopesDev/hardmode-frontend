import React from 'react';
import Head from 'next/head';

import { AuthProvider } from '../context/AuthContext';
import HardModStylesProvider from '../layout/GlobalStyles';

import Header from '../components/header';

import WellcomeSection from '../container/wellcome-section';
import MembersSection from '../container/members-section';

function Home() {
  return (
    <>
      <Head>
        <title>HardMode Clan</title>
      </Head>

      <HardModStylesProvider>
        <AuthProvider authData={{ bearer: '', expiration: '' }}>

          <Header />

          <WellcomeSection />
          <MembersSection />

        </AuthProvider>
      </HardModStylesProvider>
    </>
  )
}

export default Home;
