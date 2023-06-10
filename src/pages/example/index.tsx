import styled from '@emotion/styled';
import theme from '@styles/theme';
import React from 'react';

const index = () => {
  return (
    <Styled.Container>
      <Styled.LoginBox>안녕하세요 테스트입니다.</Styled.LoginBox>
    </Styled.Container>
  );
};

export default index;

const Styled = {
  Container: styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
  `,
  LoginBox: styled.div`
    width: 503px;
    height: 737px;
    border: 1px solid ${theme.colors.black};
    border-radius: 35px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  `,
};
