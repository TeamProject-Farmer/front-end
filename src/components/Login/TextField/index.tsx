import React from 'react';
import Styled from '../styles';
import theme from '@styles/theme';
import Link from 'next/link';

const TextField = () => {
  return (
    <>
      <Styled.TextWrapper>
        <Styled.SubText color={theme.colors.black} size={14}>
          <Link href="/register">회원가입</Link>
        </Styled.SubText>
      </Styled.TextWrapper>
      <Styled.SubText color={theme.colors.black} size={12}>
        SNS 계정으로 간편 로그인/회원가입
      </Styled.SubText>
    </>
  );
};

export default TextField;
