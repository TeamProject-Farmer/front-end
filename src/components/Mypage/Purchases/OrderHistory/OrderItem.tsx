import theme from '@styles/theme';
import React from 'react';
import { OrderProps } from 'src/types/mypage/types';
import { Styled } from '@components/Mypage/styles';
import OrderInfoText from './OrderInfoText';

export const OrderItem = ({ order }: { order: OrderProps }) => {
  return (
    <Styled.FlexRowCenter>
      <OrderInfoText size="20" color={theme.colors.black} text={order.date} />
      {/* 임시 이미지 박스 - 이미지 클릭시 해당 제품 상세 페이지 */}
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
        {/* 상세 클릭시 주문 상세보기 이동 */}
        <Styled.ProductButton>주문 상세보기</Styled.ProductButton>
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
