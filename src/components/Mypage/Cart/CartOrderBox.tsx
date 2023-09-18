import React from 'react';
import Plus from '@assets/images/mypage/cartPlus.svg';
import Equals from '@assets/images/mypage/cartEquals.svg';
import { Styled } from '../styles';
import { CartListProps } from 'src/types/mypage/types';

const CartOrderBox = ({
  cartListArray,
}: {
  cartListArray: CartListProps[];
}) => {
  // CartListArray의 모든 객체의 total price 값을 합산
  const handleTotalPrice = () => {
    if (cartListArray) {
      const totalPrice = cartListArray.reduce(
        (acc, item) => acc + item.totalPrice,
        0,
      );
      return totalPrice + 2500;
    }
  };
  return (
    <Styled.CartOrderBox>
      <Styled.OrderText>
        총 <span>{cartListArray?.length}</span>개의 상품금액
      </Styled.OrderText>
      <Styled.OrderText>
        <span>{handleTotalPrice()}</span>원
      </Styled.OrderText>
      <Plus />
      <Styled.OrderText>
        배송비 <span>2,500</span>원
      </Styled.OrderText>
      <Equals />
      <Styled.OrderText>합계</Styled.OrderText>
      <Styled.OrderText>
        <span>{handleTotalPrice()}</span>원
      </Styled.OrderText>
    </Styled.CartOrderBox>
  );
};

export default CartOrderBox;
