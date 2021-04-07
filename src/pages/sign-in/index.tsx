import React from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from '../../context/AuthContext';

import Header from '../../components/header';
import SignInContainer from '../../container/sign-in';

import HardModStylesProvider from '../../layout/GlobalStyles';

import 'react-toastify/dist/ReactToastify.min.css';

function SignUpPage() {
  return (
    <>
      <Head>
        <title>Entrar | HardMode Clan</title>
      </Head>

      <ToastContainer />

      <HardModStylesProvider>
        <AuthProvider authData={{ bearer: '', expiration: '' }}>

          <Header />

          <SignInContainer />

        </AuthProvider>
      </HardModStylesProvider>
    </>
  )
}

export default SignUpPage;
