import 'tailwindcss/tailwind.css';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { globalStyles } from '../styles/globalStyle';
import theme from '../styles/theme';
import Layout from './layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}
