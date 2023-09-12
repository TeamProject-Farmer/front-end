import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '@styles/theme';
import { InputGroupProps } from 'src/types/order/types';

const InputGroup = ({ title, before, children }: InputGroupProps) => {
  return (
    <>
      {before === 'none' ? (
        <Styled.Wrapper>
          <Styled.GroupTitle>{title}</Styled.GroupTitle>
          {children}
        </Styled.Wrapper>
      ) : (
        <Styled.WrapperBefore>
          <Styled.GroupTitle>{title}</Styled.GroupTitle>
          {children}
        </Styled.WrapperBefore>
      )}
    </>
  );
};

export default InputGroup;

const WrapperStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 1200px;
  padding: 20px;
  border-bottom: 1px solid #000;
`;

const Styled = {
  Wrapper: styled.div`
    ${WrapperStyle}
  `,
  WrapperBefore: styled.div`
    ${WrapperStyle}
    ::before {
      content: '';
      position: absolute;
      display: 'block';
      background-color: ${theme.colors.green4};
      width: 1198px;
      height: 15px;
      top: 0;
      left: 0;
    }
  `,
  GroupTitle: styled.p`
    font-size: 20px;
    font-weight: 500;
  `,
};
