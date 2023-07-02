import { Styled } from '@components/Mypage/styles';
import theme from '@styles/theme';
import React from 'react';
import { orderLabels } from 'src/utils/mypage/orderTimeList';
import { OrderItem } from './OrderItem';
import { OrderProps } from 'src/types/mypage/types';

// 주문 데이터 배열 임시 생성(백엔드에서 받을 예정)
const orderData: OrderProps[] = [
  {
    date: '20230507',
    // image
    productName: '피쉬본',
    productDescription: '[수량]1개/ [옵션]화분 Black',
    quantity: '1개',
    price: '12,900원',
    status: '주문완료',
  },
];

const OrderHistory = () => {
  return (
    <Styled.CheckWrapper>
      {/* 주문 내역 조회 API */}
      <Styled.TitleText>주문내역 조회</Styled.TitleText>
      <Styled.FlexRow>
        {orderLabels.map((text, index) => (
          <Styled.ListInfoText
            key={index}
            size="16"
            color={theme.colors.mypageGray}
          >
            {text}
          </Styled.ListInfoText>
        ))}
      </Styled.FlexRow>

      {/* API 통해서 받아온 데이터 렌더링 */}
      {orderData.map((order, index) => (
        <OrderItem key={index} order={order} />
      ))}
    </Styled.CheckWrapper>
  );
};

export default OrderHistory;
