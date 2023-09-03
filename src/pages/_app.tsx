import 'tailwindcss/tailwind.css';
import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import theme from '../styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { globalStyles } from '@styles/globalStyle';
import store from 'store';
import { Provider } from 'react-redux';
import IconLoader from '@components/Common/IconLoader';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import 'react-datepicker/dist/react-datepicker.css';
import '@components/Mypage/Purchases/Calendar/react-datepicker.css';
import { CookiesProvider } from 'react-cookie';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

function App({ Component, pageProps, ...rest }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <IconLoader />
          {globalStyles}
          <ThemeProvider theme={theme}>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
