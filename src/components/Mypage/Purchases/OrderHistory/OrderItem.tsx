import theme from '@styles/theme';
import React from 'react';
import { OrderProps } from 'src/types/mypage/types';
import { Styled } from '@components/Mypage/styles';
import OrderInfoText from './OrderInfoText';

export const OrderItem = ({ order }: { order: OrderProps }) => {
  return (
    <Styled.FlexRowCenter>
      <OrderInfoText size="20" color={theme.colors.black} text={order.date} />
      <Styled.Image />
      <Styled.ProductInfoWrapper>
        <OrderInfoText
          size="16"
          color={theme.colors.black}
          text={order.productName}
        />
        <OrderInfoText
          size="16"
          color={theme.colors.mypageGray}
          text={order.productDescription}
        />
        {/* 상세보기 페이지로 이동 */}
        <Styled.ProductButton>상품 상세보기</Styled.ProductButton>
      </Styled.ProductInfoWrapper>
      <OrderInfoText
        size="20"
        color={theme.colors.black}
        text={order.quantity}
      />
      <OrderInfoText size="20" color={theme.colors.black} text={order.price} />
      <OrderInfoText size="20" color={theme.colors.black} text={order.status} />
    </Styled.FlexRowCenter>
  );
};
