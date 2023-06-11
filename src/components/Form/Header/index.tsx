import { Styled } from '@pages/register/styles';
import React from 'react';
import SnsCircles from '../SnsCircles';

const Header = () => {
  return (
    <>
      <Styled.Header>회원가입</Styled.Header>
      {/* sns로그인 기능 아직 구현 X -> 백엔드 준비 안됨 */}
      <Styled.SubText>SNS 계정으로 간편 로그인/회원가입</Styled.SubText>
      <SnsCircles />
      <Styled.SplitLine />
    </>
  );
};

export default Header;
