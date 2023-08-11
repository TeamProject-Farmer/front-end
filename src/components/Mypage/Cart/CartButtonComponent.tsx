import React from 'react';
import { Styled } from '../styles';
import { CartButtonProps } from 'src/types/mypage/types';

const CartButtonComponent = ({
  backgroundColor,
  padding,
  width,
  size,
  color,
  weight,
  label,
  onClick,
}: CartButtonProps) => {
  return (
    <Styled.CartCommonButton
      backgroundColor={backgroundColor}
      padding={padding}
      width={width}
      style={{ marginRight: '0.5rem' }}
      onClick={onClick}
    >
      <Styled.ButtonText size={size} color={color} weight={weight}>
        {label}
      </Styled.ButtonText>
    </Styled.CartCommonButton>
  );
};

export default CartButtonComponent;
