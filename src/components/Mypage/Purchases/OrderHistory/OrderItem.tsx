import React from 'react';
import theme from '@styles/theme';
import { Styled } from '@components/Mypage/styles';
import OrderInfoText from './OrderInfoText';
import { OrderListProps } from 'src/types/mypage/types';
import Image from 'next/image';

export const OrderItem = ({ order }: { order: OrderListProps }) => {
  return (
    <Styled.FlexRowCenter>
      <OrderInfoText
        size="20"
        color={theme.colors.black}
        text={order.serialNumber}
      />
      <Image
        src={order.imgUrl}
        priority
        alt="식물 사진"
        width="0"
        height="0"
        sizes="150px"
        style={{ width: '150px', height: '150px' }}
      />
      <Styled.ProductInfoWrapper>
        <OrderInfoText
          size="16"
          color={theme.colors.black}
          text={order.productName}
        />
        <OrderInfoText
          size="13"
          color={theme.colors.mypageGray}
          text={`[옵션] ${order.optionName}`}
        />
        {/* 상세보기 페이지로 이동 */}
        <Styled.ProductButton>상품 상세보기</Styled.ProductButton>
      </Styled.ProductInfoWrapper>
      <OrderInfoText
        size="20"
        color={theme.colors.black}
        text={`${order.count}개`}
      />
      <OrderInfoText
        size="20"
        color={theme.colors.black}
        text={`${order.orderPrice.toLocaleString()}원`}
      />
      <OrderInfoText
        size="20"
        color={theme.colors.black}
        text={order.orderStatus}
      />
    </Styled.FlexRowCenter>
  );
};
