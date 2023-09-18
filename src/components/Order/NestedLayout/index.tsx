import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { LayoutProps } from '../../../types/common/types';
import { useRouter } from 'next/router';

const NestedLayout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();
  const router = useRouter();
  const isOrderPath = pathname === '/order';

  return (
    <Styled.Wrapper>
      <Styled.FlexWrapper>
        <Styled.Title>{isOrderPath ? '주문/결제' : '주문완료'}</Styled.Title>
        <Styled.StateBox>
          <Styled.State colored={isOrderPath}>주문결제 &gt; </Styled.State>
          <Styled.State colored={!isOrderPath}>주문완료</Styled.State>
        </Styled.StateBox>
      </Styled.FlexWrapper>
      {children}
    </Styled.Wrapper>
  );
};

export default NestedLayout;

const Styled = {
  Wrapper: styled.div`
    width: 1920px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  FlexWrapper: styled.div`
    width: 1200px;
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.div`
    font-size: 30px;
  `,
  StateBox: styled.div`
    display: flex;
    gap: 10px;
  `,
  State: styled.div<{ colored: boolean }>`
    color: ${({ colored }) => (colored ? '#59B941' : '#000')};
  `,
};
