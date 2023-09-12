import React from 'react';
import CartButtonComponent from './CartButtonComponent';
import theme from '@styles/theme';
import { Styled } from '../styles';
import { CartButtonBoxProps } from 'src/types/mypage/types';

const CartButtonBox = ({
  handleRemoveCartList,
  handlePlaceOrder,
  getSelectedCartItems,
}: CartButtonBoxProps) => {
  return (
    <Styled.ButtonWrapper>
      <div>
        <CartButtonComponent
          onClick={handleRemoveCartList}
          backgroundColor={theme.colors.lightGray}
          padding="0.7"
          width="125"
          size="14"
          color={theme.colors.black}
          weight="300"
          label="선택 상품 삭제"
        />
      </div>

      <div>
        <CartButtonComponent
          onClick={() => handlePlaceOrder(getSelectedCartItems())}
          backgroundColor={theme.colors.cartButtonGray}
          padding="1"
          width="170"
          size="15"
          color={theme.colors.black}
          weight="700"
          label="선택 상품 주문"
        />
        <CartButtonComponent
          onClick={() => handlePlaceOrder(undefined)}
          backgroundColor={theme.colors.green3}
          padding="1"
          width="170"
          size="15"
          color={theme.colors.white}
          weight="700"
          label="전체 상품 주문"
        />
      </div>
    </Styled.ButtonWrapper>
  );
};

export default CartButtonBox;
