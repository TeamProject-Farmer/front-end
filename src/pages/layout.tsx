import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@components/Common/Header';
import Footer from '@components/Common/Footer';
import styled from '@emotion/styled';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Farmer FE' }: LayoutProps) => {
  return (
    <div className={inter.className}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Styled.Wrapper>
        <Header />
        {children}
        <Footer />
      </Styled.Wrapper>
    </div>
  );
};

export default Layout;

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
