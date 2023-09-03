import React from 'react';
import theme from '@styles/theme';
import { Styled } from '@components/Mypage/styles';
import { orderLabels } from 'src/utils/mypage/orderTimeList';
import { OrderItem } from './OrderItem';
import { OrderListProps } from 'src/types/mypage/types';

const OrderHistory = ({ purchaseList }: { purchaseList: OrderListProps[] }) => {
  return (
    <Styled.CheckWrapper>
      {purchaseList && purchaseList.length > 0 ? (
        <>
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

          {purchaseList.map((order, index) => (
            <OrderItem key={index} order={order} />
          ))}
        </>
      ) : (
        // 주문 내역이 비었을 경우
        <Styled.NoneText>주문 조회내역이 없습니다.</Styled.NoneText>
      )}
    </Styled.CheckWrapper>
  );
};

export default OrderHistory;
