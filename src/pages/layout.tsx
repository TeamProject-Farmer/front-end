import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@components/Common/Header';
import Footer from '@components/Login/Footer';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Farmer FE' }: Props) => (
  <div className={inter.className}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header/>
    {children}
    <Footer/>
  </div>
);

export default Layout;
