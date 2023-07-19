import React from 'react';
import { Styled } from '../styles';

export interface CartButtonProps {
  backgroundColor: string;
  padding: string;
  width: string;
  size: string;
  color: string;
  weight: string;
  label: string;
}

const CartButtonComponent = ({
  backgroundColor,
  padding,
  width,
  size,
  color,
  weight,
  label,
}: CartButtonProps) => {
  return (
    <Styled.CartCommonButton
      backgroundColor={backgroundColor}
      padding={padding}
      width={width}
      style={{ marginRight: '0.5rem' }}
    >
      <Styled.ButtonText size={size} color={color} weight={weight}>
        {label}
      </Styled.ButtonText>
    </Styled.CartCommonButton>
  );
};

export default CartButtonComponent;
