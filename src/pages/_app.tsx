import 'tailwindcss/tailwind.css';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import theme from '../styles/theme';
import Layout from './layout';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { globalStyles } from '@styles/globalStyle';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Layout>
          {globalStyles}
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
