import React from 'react';
import { Styled } from '../styles';
import { CouponProps } from 'src/types/mypage/types';

const Coupons = ({ index, code, title, validity }: CouponProps) => {
  return (
    <Styled.Coupon key={index}>
      <Styled.CouponTextWrapper>
        <Styled.CouponText>{code}</Styled.CouponText>
        <Styled.CouponText>{title}</Styled.CouponText>
        <Styled.CouponText>{validity}</Styled.CouponText>
      </Styled.CouponTextWrapper>
    </Styled.Coupon>
  );
};

export default Coupons;
