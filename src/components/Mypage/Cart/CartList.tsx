import React from 'react';
import { Styled } from '../styles';
import { cartLabels } from 'src/utils/mypage/orderTimeList';
import theme from '@styles/theme';
import CartItems from './CartItems';
import { CartListProps } from 'src/types/mypage/types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setChecked } from 'store/reducers/cartSlice';
import { RootState } from 'store';
const cartSelector = (state: RootState) => state.cartIndex;

const CartList = ({ cartListArray }: { cartListArray: CartListProps[] }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selector = useSelector(cartSelector);
  return (
    <Styled.CheckWrapper>
      <Styled.ListText>장바구니 목록</Styled.ListText>
      {/* 리스트 상단 */}
      <Styled.FlexCartRow>
        <Styled.CartCheckBox
          checked={selector.allChecked || false}
          onChange={() => dispatch(setChecked(!selector.allChecked))}
          type="checkbox"
        />
        {cartLabels.map((text, index) => (
          <Styled.ListInfoText key={index} size="16" color={theme.colors.white}>
            {text}
          </Styled.ListInfoText>
        ))}
      </Styled.FlexCartRow>
      {/* 장바구니 아이템 */}
      {cartListArray === undefined ? (
        <Styled.EmptyCart>장바구니에 담은 상품이 없습니다.</Styled.EmptyCart>
      ) : (
        <CartItems cartListArray={cartListArray} />
      )}

      {/* 페이지 하단부 버튼 */}
      <Styled.CartCommonButton
        backgroundColor={theme.colors.cartButtonGray}
        padding="0.7"
        width="125"
      >
        <Styled.ButtonText
          size="14"
          color={theme.colors.black}
          weight="300"
          onClick={() => router.push('/shop')}
        >
          쇼핑 계속하기
        </Styled.ButtonText>
      </Styled.CartCommonButton>
    </Styled.CheckWrapper>
  );
};

export default CartList;
