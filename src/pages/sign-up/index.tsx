import React from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from '../../context/AuthContext';

import Header from '../../components/header';
import SignUpContainer from '../../container/sign-up';

import HardModStylesProvider from '../../layout/GlobalStyles';

import 'react-toastify/dist/ReactToastify.min.css';

function SignUpPage() {
  return (
    <>
      <Head>
        <title>Registre-se | HardMode Clan</title>
      </Head>

      <ToastContainer />

      <HardModStylesProvider>
        <AuthProvider authData={{ bearer: '', expiration: '' }}>

          <Header />

          <SignUpContainer />

        </AuthProvider>
      </HardModStylesProvider>
    </>
  )
}

export default SignUpPage;
