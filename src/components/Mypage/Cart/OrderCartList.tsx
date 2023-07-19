import React from 'react';
import { Styled } from '../styles';
import theme from '@styles/theme';
import CartButtonComponent from './CartButtonComponent';
import Plus from '@assets/images/mypage/cartPlus.svg';
import Equals from '@assets/images/mypage/cartEquals.svg';

const OrderCartList = () => {
  return (
    <Styled.CheckWrapper>
      <Styled.CartOrderBox>
        <Styled.OrderText>
          총 <span>2</span>개의 상품금액
        </Styled.OrderText>
        <Styled.OrderText>
          <span>25,800</span>원
        </Styled.OrderText>
        <Plus />
        <Styled.OrderText>
          배송비 <span>0</span>원
        </Styled.OrderText>
        <Equals />
        <Styled.OrderText>합계</Styled.OrderText>
        <Styled.OrderText>
          <span>25,800</span>원
        </Styled.OrderText>
      </Styled.CartOrderBox>

      <Styled.ButtonWrapper>
        <div>
          <CartButtonComponent
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
            backgroundColor={theme.colors.cartButtonGray}
            padding="1"
            width="170"
            size="15"
            color={theme.colors.black}
            weight="700"
            label="선택 상품 주문"
          />
          <CartButtonComponent
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
