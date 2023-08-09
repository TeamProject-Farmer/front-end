import { useState } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { PayMethod } from 'src/types/order/types';

const payMethod: PayMethod[] = [
  { title: '카드', pg: 'INIpayTest', method: 'card' },
  { title: '계좌이체', pg: 'INIBillTst', method: 'trans' },
  { title: '가상계좌', pg: 'TC0ONETIME', method: 'vbank' },
  { title: '카카오페이', pg: 'TC0ONETIME', method: 'kakaopay' },
  { title: '핸드폰', pg: 'A010002002', method: 'phone' },
];

const payMethodList = ({ selectedMethod, setSelectedMethod }) => {
  return (
    <Styled.Wrapper>
      {payMethod &&
        payMethod.map(ele => {
          const { method, title, pg } = ele;
          const isClicked = selectedMethod?.method === method;
          return (
            <Styled.List
              key={method}
              onClick={() => {
                setSelectedMethod(prev => ({
                  ...prev,
                  pg: pg,
                  method: method,
                }));
              }}
              isClicked={isClicked}
            >
              <Styled.ImgBox />
              <Styled.Title>{title}</Styled.Title>
            </Styled.List>
          );
        })}
    </Styled.Wrapper>
  );
};

export default payMethodList;

const Styled = {
  Wrapper: styled.ul`
    display: flex;
  `,
  List: styled.li<{ isClicked: boolean }>`
    width: 141px;
    height: 155px;
    box-sizing: border-box;
    border: ${({ isClicked }) =>
      isClicked ? '3px solid #47AC3A;' : '1px solid #ABABAB'};
    :not(:last-child) {
      border-right: ${({ isClicked }) => (isClicked ? '' : 'none')};
    }
    background-color: ${({ isClicked }) => (isClicked ? '#ECFFEA' : '#fff')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 21px;
  `,
  ImgBox: styled.div`
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    background-color: ${theme.colors.lightGray};
  `,
  Title: styled.div`
    text-align: center;
    font-size: 16px;
  `,
};
