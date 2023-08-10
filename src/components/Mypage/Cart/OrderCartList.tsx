import React from 'react';
import { Styled } from '../styles';
import theme from '@styles/theme';
import CartButtonComponent from './CartButtonComponent';
import Plus from '@assets/images/mypage/cartPlus.svg';
import Equals from '@assets/images/mypage/cartEquals.svg';
import { CartListProps } from 'src/types/mypage/types';
import { useSelector } from 'react-redux';
import { clearCartIndex, setChecked } from 'store/reducers/cartSlice';
import { useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { RootState } from 'store';
import { getRemoveCartList } from 'src/apis/mypage/cart';
import { setOrderProduct } from 'store/reducers/orderProductSlice';
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
      <Styled.CartOrderBox>
        <Styled.OrderText>
          총 <span>{cartListArray?.length}</span>개의 상품금액
        </Styled.OrderText>
        <Styled.OrderText>
          <span>{handleTotalPrice()}</span>원
        </Styled.OrderText>
        <Plus />
        <Styled.OrderText>
          배송비 <span>0</span>원
        </Styled.OrderText>
        <Equals />
        <Styled.OrderText>합계</Styled.OrderText>
        <Styled.OrderText>
          <span>{handleTotalPrice()}</span>원
        </Styled.OrderText>
      </Styled.CartOrderBox>

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
    </Styled.CheckWrapper>
  );
};

export default OrderCartList;
