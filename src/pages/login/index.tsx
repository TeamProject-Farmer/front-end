import React from 'react';
import SnsCircles from '@components/Login/SnsCircles';
import Styled from '@components/Login/styles';
import InputGroup from '@components/Login/InputGroup';
// import Footer from '@components/Login/Footer';
import TextField from '@components/Login/TextField';

const LoginPage = () => {
  return (
    <Styled.Container>
      <Styled.LoginBox>
        <Styled.Logo />

        <InputGroup />

        <TextField />

        <SnsCircles />

        {/* <Footer /> */}
      </Styled.LoginBox>
    </Styled.Container>
  );
};

export default LoginPage;
