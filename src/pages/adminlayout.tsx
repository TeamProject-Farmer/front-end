import react, { ReactNode } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Inter } from 'next/font/google';
import SideBar from '@components/Admin/SideBar';
import Header from '@components/Admin/Common/Header';

const inter = Inter({ subsets: ['latin'] });

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const AdminLayout = ({ children, title = 'Farmer' }: LayoutProps) => (
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
      <SideBar />
      <Styled.MainWrapper>
        <Header />
        {children}
      </Styled.MainWrapper>
    </Styled.Wrapper>
  </div>
);

export default AdminLayout;

const Styled = {
  Wrapper: styled.div`
    display: flex;
  `,
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 240px;
    margin-top: 80px;
    padding-left: 32px;
    padding-top: 24px;
  `,
};
