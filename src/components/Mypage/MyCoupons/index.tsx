import { Styled } from '@components/Mypage/styles';
import React from 'react';
import { getCoupon } from 'src/apis/mypage/coupon';
import CouponHeader from './Header';
import Coupons from './Coupons';
import { CouponArrayProps } from 'src/types/mypage/types';
import { useQuery } from '@tanstack/react-query';
const Row = () => {
  const { data: couponArray } = useQuery<CouponArrayProps[]>({
    queryKey: ['coupons'],
    queryFn: getCoupon,
  });

  return (
    <Styled.BoxWrapper>
      <Styled.CouponBox>
        <Styled.HeaderDiv>
          <Styled.HeaderText>나의 쿠폰</Styled.HeaderText>
        </Styled.HeaderDiv>
        <CouponHeader />
        {couponArray ? (
          couponArray.map(coupon => (
            <Coupons
              key={coupon.couponId}
              index={coupon.couponId}
              title={coupon.name}
              code={coupon.serialNumber}
              validity={`${coupon.startDateTime.slice(
                0,
                10,
              )} ~ ${coupon.endDateTime.slice(0, 10)}`}
            />
          ))
        ) : (
          <Styled.NoneText>보유중인 쿠폰이 없습니다.</Styled.NoneText>
        )}
      </Styled.CouponBox>
    </Styled.BoxWrapper>
  );
};

export default Row;
