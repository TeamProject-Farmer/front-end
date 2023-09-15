import React, { ReactNode } from 'react';
import { Styled } from '../styles';
import Header from '@components/Common/Header';
import Navbar from './Navbar';
import Footer from '@components/Common/Footer';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Navbar />
      <Styled.Container>{children}</Styled.Container>
      <Footer />
    </>
  );
};

export default Layout;
