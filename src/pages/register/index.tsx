import Footer from '@components/Register/Footer';
import Header from '@components/Register/Header';
import InputGroup from '@components/Register/InputGroup';
import Styled from '@components/Register/styles';
import React from 'react';

const RegisterPage = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Header />

        <InputGroup />

        <Footer />
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default RegisterPage;
