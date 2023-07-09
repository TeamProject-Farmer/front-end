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
    <Styled.Container>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </Styled.Container>
  );
};

export default Layout;
