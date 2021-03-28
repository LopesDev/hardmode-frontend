import React from 'react';
import Head from 'next/head';

import { AuthProvider } from '../../context/AuthContext';

import Header from '../../components/header';

import HardModStylesProvider from '../../layout/GlobalStyles';

function SignUpPage() {
  return (
    <>
      <Head>
        <title>Registre-se | HardMode Clan</title>
      </Head>

      <HardModStylesProvider>
        <AuthProvider authData={{ bearer: '', expiration: '' }}>

          <Header />

        </AuthProvider>
      </HardModStylesProvider>
    </>
  )
}

export default SignUpPage;
