import React from 'react';
import Styled from '../styles';
import theme from '@styles/theme';

const Footer = () => {
  return (
    <>
      <Styled.SplitLine />
      <Styled.SubText color={theme.colors.black} size={16}>
        비회원 주문 조회하기 {/* 추후 Link 설정 */}
      </Styled.SubText>
    </>
  );
};

export default Footer;
