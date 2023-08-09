import 'tailwindcss/tailwind.css';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import theme from '../styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { globalStyles } from '@styles/globalStyle';
import { persistor, wrapper } from 'store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import IconLoader from '@components/Common/IconLoader';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import 'react-datepicker/dist/react-datepicker.css';
import '@components/Mypage/Purchases/Calendar/react-datepicker.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

function App({ Component, pageProps, ...rest }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  const { store } = wrapper.useWrappedStore(rest);
  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IconLoader />
          {globalStyles}
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>,
  );
}

export default App;
