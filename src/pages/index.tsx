import React from 'react';
import Head from 'next/head';

import {AuthCookieEnum} from '../constants/AuthSessionConstant';

import { AuthProvider } from '../context/AuthContext';
import HardModStylesProvider from '../layout/GlobalStyles';

import Header from '../components/header';

import WellcomeSection from '../container/wellcome-section';

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

        </AuthProvider>
      </HardModStylesProvider>
    </>
  )
}

export async function getServerSideProps({ req, res, ...context }) {
  // see the rest of parameters by uncommenting the following line.
  // console.log(context);
  const JWT = req.cookies[AuthCookieEnum.CURRENT_COOKIE];
  if (JWT) {
    // @Todo Implement get User from JWT;
    return {
      props: {}
    }
  }

  return {
    props: {}
  }
}

export default Home;
