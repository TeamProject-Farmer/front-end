import React from 'react';
import styled from '@emotion/styled';
import { LayoutProps } from 'src/types/common/types';

const NestedLayout = ({ children }: LayoutProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default NestedLayout;

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  `,
};
