import { Styled } from '@components/Mypage/styles';
import React from 'react';

const OrderInfoText = ({
  size,
  color,
  text,
}: {
  size: string;
  color: string;
  text: string;
}) => {
  return (
    <Styled.ListInfoText size={size} color={color}>
      {text}
    </Styled.ListInfoText>
  );
};

export default OrderInfoText;
