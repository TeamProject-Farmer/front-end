import React from 'react';
import { Styled } from '../styles';
import { cartLabels } from 'src/utils/mypage/orderTimeList';
import theme from '@styles/theme';
import CartItems from './CartItems';
import { CartListProps } from 'src/types/mypage/types';
import { RootState } from 'store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleAllChecked } from 'store/reducers/cartIndexSlice';
const cartSelector = (state: RootState) => state.cartIndex;

const CartList = ({ cartListArray }: { cartListArray: CartListProps[] }) => {
  const dispatch = useDispatch();
  const selector = useSelector(cartSelector);

  return (
    <Styled.CheckWrapper>
      <Styled.ListText>장바구니 목록</Styled.ListText>

      {/* 리스트 상단 */}
      <Styled.FlexCartRow>
        <Styled.CartCheckBox
          checked={selector.allChecked || false}
          onChange={() => dispatch(toggleAllChecked())}
          type="checkbox"
        />
        {cartLabels.map((text, index) => (
          <Styled.ListInfoText key={index} size="16" color={theme.colors.white}>
            {text}
          </Styled.ListInfoText>
        ))}
      </Styled.FlexCartRow>

      <CartItems cartListArray={cartListArray} />

      <Styled.CartCommonButton
        onClick={() => console.log('쇼핑 페이지로')}
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
