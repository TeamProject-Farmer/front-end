import { Styled } from '@components/Mypage/styles';
import theme from '@styles/theme';
import React from 'react';
import { OrderProps } from 'src/types/mypage/types';

export const OrderItem = ({ order }: { order: OrderProps }) => {
  return (
    <Styled.FlexRowCenter>
      <Styled.ListInfoText size="20" color={theme.colors.black}>
        {order.date}
      </Styled.ListInfoText>
      {/* 임시 이미지 박스 */}
      <Styled.Image />
      <Styled.ProductInfoWrapper>
        <Styled.ListInfoText size="16" color={theme.colors.black}>
          {order.productName}
        </Styled.ListInfoText>
        <Styled.ListInfoText size="16" color={theme.colors.mypageGray}>
          {order.productDescription}
        </Styled.ListInfoText>
        {/* 상세 클릭시 어떤 기능인지 미정 */}
        <Styled.ProductButton>제품상세확인</Styled.ProductButton>
      </Styled.ProductInfoWrapper>
      <Styled.ListInfoText size="20" color={theme.colors.black}>
        {order.quantity}
      </Styled.ListInfoText>
      <Styled.ListInfoText size="20" color={theme.colors.black}>
        {order.price}
      </Styled.ListInfoText>
      <Styled.ListInfoText size="20" color={theme.colors.black}>
        {order.status}
      </Styled.ListInfoText>
    </Styled.FlexRowCenter>
  );
};
