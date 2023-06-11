import React from 'react';
import Header from '@components/Form/Header';
import InputGroup from '@components/Form/InputGroup';
import Styled from '../../components/Form/styles';
import Footer from '@components/Form/Footer';

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
