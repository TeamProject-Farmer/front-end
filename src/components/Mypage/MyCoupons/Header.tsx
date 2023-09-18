import React from 'react';
import { Styled } from '../styles';

const CouponHeader = () => {
  return (
    <Styled.CouponHeader>
      <Styled.HeaderLabel className="-ml-2">쿠폰번호</Styled.HeaderLabel>
      <Styled.HeaderLabel>쿠폰명</Styled.HeaderLabel>
      <Styled.HeaderLabel className="ml-8">사용가능기간</Styled.HeaderLabel>
    </Styled.CouponHeader>
  );
};

export default CouponHeader;
