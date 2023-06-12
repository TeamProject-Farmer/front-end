import React from 'react';
import Styled from '../styles';

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
