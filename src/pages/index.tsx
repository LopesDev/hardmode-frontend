import React from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../layout/Theme';
import GlobalStyles from '../layout/GlobalStyles';

const Title = styled.h1`
  color: green;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello Word</title>
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Title>Olá mundo</Title>

      </ThemeProvider>
    </>
  )
}
