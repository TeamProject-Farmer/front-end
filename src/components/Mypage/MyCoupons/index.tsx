import { Styled } from '@components/Mypage/styles';
import React from 'react';
import { couponsData } from 'src/utils/mypage/coupons';

// 맥북 기준 3개까지 정렬가능 (반응형 필요)`

const Row = () => {
  return (
    <Styled.BoxWrapper>
      <Styled.CardBox size="500">
        <Styled.HeaderDiv>
          <Styled.HeaderText>나의 쿠폰</Styled.HeaderText>
        </Styled.HeaderDiv>
        <Styled.CouponWrapper>
          {couponsData.map((coupon, index) => (
            <Styled.Coupon key={index}>
              {coupon.icon}
              <Styled.CouponText>{coupon.title}</Styled.CouponText>
            </Styled.Coupon>
          ))}
        </Styled.CouponWrapper>
      </Styled.CardBox>
    </Styled.BoxWrapper>
  );
};

export default Row;
