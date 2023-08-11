import React from 'react';
import Plus from '@assets/images/mypage/cartPlus.svg';
import Equals from '@assets/images/mypage/cartEquals.svg';
import { Styled } from '../styles';
import { CartOrderBoxProps } from 'src/types/mypage/types';

const CartOrderBox = ({
  cartListArray,
  handleTotalPrice,
}: CartOrderBoxProps) => {
  return (
    <Styled.CartOrderBox>
      <Styled.OrderText>
        총 <span>{cartListArray?.length}</span>개의 상품금액
      </Styled.OrderText>
      <Styled.OrderText>
        <span>{handleTotalPrice()}</span>원
      </Styled.OrderText>
      <Plus />
      {/* 배송비 2500원 고정 */}
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
