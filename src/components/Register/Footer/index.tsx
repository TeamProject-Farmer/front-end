import React from 'react';
import Styled from '../styles';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <Styled.LoginText>
        이미 아이디가 있으신가요?
        <Link href="/login">
          <span>로그인</span>
        </Link>
      </Styled.LoginText>
    </>
  );
};

export default Footer;
