import React from 'react';
import { Styled } from '../styles';
import theme from '@styles/theme';

const Footer = () => {
  return (
    <>
      <Styled.SubText color="#BCBCBC" size={14} weight={600}>
        로그인에 문제가 있으신가요? {/* 추후 Link 설정 */}
      </Styled.SubText>
      <Styled.SplitLine />
      <Styled.SubText color={theme.colors.black} size={16}>
        비회원 주문 조회하기 {/* 추후 Link 설정 */}
      </Styled.SubText>
    </>
  );
};

export default Footer;
