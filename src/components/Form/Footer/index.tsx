import Styled from '@components/Form/styles';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Styled.LoginText>
        이미 아이디가 있으신가요?
        <span onClick={() => console.log('Login')}>로그인</span>
      </Styled.LoginText>
    </>
  );
};

export default Footer;
