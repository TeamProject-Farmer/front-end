import React from 'react';
import { Styled } from '../styles';
import { CartListProps } from 'src/types/mypage/types';
import { useSelector } from 'react-redux';
import { clearCartIndex, setChecked } from 'store/reducers/cartSlice';
import { useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { RootState } from 'store';
import { getRemoveCartList } from 'src/apis/mypage/cart';
import { setSelectedCart } from 'store/reducers/selectedCartSlice';
import CartOrderBox from './CartOrderBox';
import CartButtonBox from './CartButtonBox';
import { useRouter } from 'next/router';
const cartSelector = (state: RootState) => state.cartIndex;

const OrderCartList = ({
  cartListArray,
}: {
  cartListArray: CartListProps[];
}) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const selector = useSelector(cartSelector);

  // 장바구니 삭제 기능
  const handleRemoveCartList = async () => {
    await getRemoveCartList(selector.idArray);
    await queryClient.invalidateQueries(['cartList']);
    dispatch(clearCartIndex());
    dispatch(setChecked(false));
  };

  // 장버구니에서 선택된 상품들을 저장
  const getSelectedCartItems = () => {
    if (!selector.idArray) {
      return [];
    }

    return cartListArray?.filter(item =>
      selector.idArray.includes(item.cartId),
    );
  };

  // 선택된 상품들을 store 저장 후 주문 페이지로 route
  const handlePlaceOrder = (selectedItems: CartListProps[] | undefined) => {
    if (selectedItems && selectedItems.length === 0) {
      alert('상품을 선택해주세요');
      return;
    }

    selectedItems
      ? dispatch(setSelectedCart(selectedItems))
      : dispatch(setSelectedCart(cartListArray));

    dispatch(clearCartIndex());

    router.push('/order');
  };

  return (
    <Styled.CheckWrapper>
      <CartOrderBox cartListArray={getSelectedCartItems()} />

      <CartButtonBox
        getSelectedCartItems={getSelectedCartItems}
        handlePlaceOrder={handlePlaceOrder}
        handleRemoveCartList={handleRemoveCartList}
      />
    </Styled.CheckWrapper>
  );
};

export default OrderCartList;
