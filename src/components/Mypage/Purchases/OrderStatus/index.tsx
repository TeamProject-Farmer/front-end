import React, { ChangeEvent } from 'react';
import { OptionList } from 'src/utils/mypage/orderStatusData';
import { Styled } from '@components/Mypage/styles';
import { OrderStatusProps } from 'src/types/mypage/types';

const OrderStatus = ({ orderStatus, setOrderStatus }: OrderStatusProps) => {
  // 주문 처리상태 선택
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrderStatus(event.target.value);
  };

  return (
    <Styled.IconWrapper>
      <Styled.SearchInput onChange={handleSelect} value={orderStatus}>
        {OptionList.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </Styled.SearchInput>
      <Styled.OPtionIcon />
    </Styled.IconWrapper>
  );
};

export default OrderStatus;
