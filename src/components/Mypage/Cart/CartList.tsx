import React from 'react';
import { Styled } from '../styles';
import { cartLabels } from 'src/utils/mypage/orderTimeList';
import theme from '@styles/theme';
import CartItems from './CartItems';

const CartList = () => {
  return (
    <Styled.CheckWrapper>
      <Styled.ListText>장바구니 목록</Styled.ListText>

      <Styled.FlexCartRow>
        <input type="checkbox" style={{ width: '16px', height: '16px' }} />
        {cartLabels.map((text, index) => (
          <Styled.ListInfoText key={index} size="16" color={theme.colors.white}>
            {text}
          </Styled.ListInfoText>
        ))}
      </Styled.FlexCartRow>

      <CartItems />

      {/* 클릭하면 제품 페이지로 */}
      <Styled.CartCommonButton
        backgroundColor={theme.colors.cartButtonGray}
        padding="0.7"
        width="125"
      >
        <Styled.ButtonText size="14" color={theme.colors.black} weight="300">
          쇼핑 계속하기
        </Styled.ButtonText>
      </Styled.CartCommonButton>
    </Styled.CheckWrapper>
  );
};

export default CartList;
