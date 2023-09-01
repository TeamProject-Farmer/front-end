import 'tailwindcss/tailwind.css';
import React, { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import theme from '../styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { globalStyles } from '@styles/globalStyle';
// import { persistor, wrapper } from 'store';
import store from 'store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import IconLoader from '@components/Common/IconLoader';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import 'react-datepicker/dist/react-datepicker.css';
import '@components/Mypage/Purchases/Calendar/react-datepicker.css';
import { useRouter } from 'next/router';
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

  const router = useRouter();

  // useEffect(() => {
  //   const state = store.getState();
  //   const token = state.user.accessToken;

  //   // 페이지에 1초 정도 로딩됐다가 리다이렉션 이슈
  //   if (router.pathname.startsWith('/mypage') && token.length === 0) {
  //     alert('로그인 후 이용 가능한 서비스입니다');
  //     router.push('/');
  //   }

  //   if (
  //     (router.pathname.startsWith('/login') && token) ||
  //     (router.pathname.startsWith('/register') && token)
  //   ) {
  //     router.push('/');
  //   }
  // }, [router.pathname]);

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
