import React from 'react';
import Styled from '../styles';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <Styled.LoginText>
        이미 아이디가 있으신가요?
        <span onClick={() => router.push('/login')}>로그인</span>
      </Styled.LoginText>
    </>
  );
};

export default Footer;
