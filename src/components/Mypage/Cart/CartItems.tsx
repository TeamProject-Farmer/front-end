import React, { useEffect } from 'react';
import { Styled } from '../styles';
import theme from '@styles/theme';
import { CartListProps } from 'src/types/mypage/types';
import Image from 'next/image';
import { getEditCount } from 'src/apis/mypage/cart';
import { useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setCartIndex, setChecked } from 'store/reducers/cartSlice';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
const cartSelector = (state: RootState) => state.cartIndex;

const CartItems = ({ cartListArray }: { cartListArray: CartListProps[] }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const selector = useSelector(cartSelector);
  const lengthChecked = cartListArray?.length === selector.idArray.length;

  // 상품 개수 변경 기능
  const handleEditCount = async (id: number, operation: 'minus' | 'plus') => {
    try {
      await getEditCount(id, operation);
      await queryClient.invalidateQueries(['cartList']);
    } catch (error) {
      console.error(error);
    }
  };

  // 상품 선택 기능
  const handleCheckboxClick = (cartId: number) => {
    dispatch(
      setCartIndex({
        idArray: selector.idArray.includes(cartId)
          ? selector.idArray.filter(id => id !== cartId)
          : [...selector.idArray, cartId],
      }),
    );
  };

  // 전체선택 및 전체해제 싸이클 관리
  useEffect(() => {
    if (cartListArray) {
      if (selector.allChecked) {
        const allChecked = cartListArray.map(item => item.cartId);
        dispatch(setCartIndex({ idArray: allChecked }));
      } else if (lengthChecked && !selector.allChecked) {
        dispatch(setCartIndex({ idArray: [] }));
      }
    }
  }, [selector.allChecked]);

  // 개별적으로 모든 아이템 선택시 -> 전체선택 || 전체선택에서 하나라도 해제시 -> 전체선택 해제
  useEffect(() => {
    if (cartListArray) {
      lengthChecked ? dispatch(setChecked(true)) : dispatch(setChecked(false));
    }
  }, [selector.idArray]);

  return (
    <>
      {cartListArray?.map((item, index) => (
        <Styled.CartRow
          key={index}
          style={
            index === cartListArray.length - 1 ? { marginBottom: '2rem' } : null
          }
        >
          <Styled.CartCheckBox
            checked={selector.idArray.includes(item.cartId)}
            onChange={() => handleCheckboxClick(item.cartId)}
            type="checkbox"
          />
          <Image
            src={item.imgUrl}
            priority
            alt="식물 사진"
            width={100}
            height={100}
            style={{ width: '100px', height: '100px' }}
          />
          <Styled.ListInfoText size="18" color={theme.colors.black}>
            {item.productName} <br />
            <Styled.ListSpan>{item.optionName}</Styled.ListSpan>
          </Styled.ListInfoText>
          <Styled.QuantityContainer>
            <Styled.QuantityButton
              // 상품 개수가 1개면 마이너스 되지 않도록
              disabled={item.count === 1}
              onClick={() => handleEditCount(item.cartId, 'minus')}
            >
              -
            </Styled.QuantityButton>
            <Styled.QuantityText>{item.count}</Styled.QuantityText>
            <Styled.QuantityButton
              onClick={() => handleEditCount(item.cartId, 'plus')}
            >
              +
            </Styled.QuantityButton>
          </Styled.QuantityContainer>
          <Styled.ListInfoText size="15" color={theme.colors.black}>
            {item.productPrice.toLocaleString()}원
          </Styled.ListInfoText>
          <Styled.ListInfoText size="15" color={theme.colors.black}>
            {item.totalPrice.toLocaleString()}원
          </Styled.ListInfoText>
        </Styled.CartRow>
      ))}
    </>
  );
};

export default CartItems;
