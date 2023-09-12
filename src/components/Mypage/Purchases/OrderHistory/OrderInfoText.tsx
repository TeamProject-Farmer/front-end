import React from 'react';
import { Styled } from '@components/Mypage/styles';
import { OrderTextProps } from 'src/types/mypage/types';

const OrderInfoText = ({ size, color, text }: OrderTextProps) => {
  return (
    <Styled.ListInfoText size={size} color={color}>
      {text}
    </Styled.ListInfoText>
  );
};

export default OrderInfoText;
