import React from 'react';
import { Styled } from '../styles';
import { CartListProps } from 'src/types/mypage/types';
import { useSelector } from 'react-redux';
import { clearCartIndex, setChecked } from 'store/reducers/cartSlice';
import { useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { RootState } from 'store';
import { getRemoveCartList } from 'src/apis/mypage/cart';
import { setOrderProduct } from 'store/reducers/orderProductSlice';
import CartOrderBox from './CartOrderBox';
import CartButtonBox from './CartButtonBox';
const cartSelector = (state: RootState) => state.cartIndex;

const OrderCartList = ({
  cartListArray,
}: {
  cartListArray: CartListProps[];
}) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const selector = useSelector(cartSelector);

  // CartListArray의 모든 객체의 total price 값을 합산
  const handleTotalPrice = () => {
    if (cartListArray) {
      const totalPrice = cartListArray.reduce(
        (acc, item) => acc + item.totalPrice,
        0,
      );
      return totalPrice.toLocaleString();
    }
  };

  // 장바구니 삭제 기능
  const handleRemoveCartList = async () => {
    await getRemoveCartList(selector.idArray);
    await queryClient.invalidateQueries('cartList');
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
    selectedItems
      ? dispatch(setOrderProduct(selectedItems))
      : dispatch(setOrderProduct(cartListArray));

    dispatch(clearCartIndex());
    // 주문 페이지 이동
  };

  return (
    <Styled.CheckWrapper>
      <CartOrderBox
        cartListArray={cartListArray}
        handleTotalPrice={handleTotalPrice}
      />

      <CartButtonBox
        getSelectedCartItems={getSelectedCartItems}
        handlePlaceOrder={handlePlaceOrder}
        handleRemoveCartList={handleRemoveCartList}
      />
    </Styled.CheckWrapper>
  );
};

export default OrderCartList;
