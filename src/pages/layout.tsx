import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@components/Common/Header';
import Footer from '@components/Common/Footer';
import styled from '@emotion/styled';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Farmer' }: LayoutProps) => (
  <div className={inter.className}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <script>
        {`(function(j,ennifer) {
        j['dmndata']=[];j['jenniferFront']=function(args){window.dmndata.push(args)};
        j['dmnaid']=ennifer;j['dmnatime']=new Date();j['dmnanocookie']=false;j['dmnajennifer']='JENNIFER_FRONT@INTG';
    }(window, '5bb1ff'));`}
      </script>
      <script
        async
        src="https://d-collect.jennifersoft.com/5bb1ff/demian.js"
      ></script>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
    <Styled.Wrapper>
      <Header />
      {children}
      <Footer />
    </Styled.Wrapper>
  </div>
);

export default Layout;

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
