import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client'

import {AuthCookieEnum} from '../constants/AuthSessionConstant';

import { AuthProvider } from '../context/AuthContext';
import HardModStylesProvider from '../layout/GlobalStyles';
import initializeApollo from '../services/ApolloService';

import GET_USER from '../services/queries/getUser';

import Header from '../components/header';

import WellcomeSection from '../container/wellcome-section';

function Home({initialApolloState}) {
  const { data, loading, error } = useQuery(GET_USER);

  console.log({data, loading, error});

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
  try {
    const JWT = req.cookies[AuthCookieEnum.CURRENT_COOKIE];
    if (JWT) {
      const apolloClient = initializeApollo(null, JWT);

      await apolloClient.query({
        query: GET_USER,
      });

      return {
        props: {
          initialApolloState: apolloClient.cache.extract(),
        }
      }
    }

    return {
      props: {}
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}

export default Home;
