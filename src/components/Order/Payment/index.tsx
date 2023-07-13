import React from 'react';
import Styled from '../styles';
import InputField from '../InputField';
import InputGroup from '../InputGroup';
import PaymentList from '../List/PaymentList';

const Payment = () => {
  return (
    <div>
      {/* 적립금/쿠폰 */}
      <InputGroup title="적립금/쿠폰">
        <InputField label="적립금" field="point" />
        <InputField label="쿠폰" field="coupon" />
        <Styled.InnerMarginWrapper>
          <Styled.DiscountedPrice>
            <Styled.Title>적용금액</Styled.Title>
            <Styled.Title>-0원</Styled.Title>
          </Styled.DiscountedPrice>
        </Styled.InnerMarginWrapper>
      </InputGroup>
      {/* 적립금/쿠폰 */}
      <InputGroup title="결제금액" before="none">
        <Styled.FlexColumnWrapper>
          <Styled.FlexWrapper>
            <Styled.InfoTitle>주문상품</Styled.InfoTitle>
            <Styled.InfoContent>129000원</Styled.InfoContent>
          </Styled.FlexWrapper>
          <Styled.FlexWrapper>
            <Styled.InfoTitle>배송비</Styled.InfoTitle>
            <Styled.InfoContent>+2500원</Styled.InfoContent>
          </Styled.FlexWrapper>
          <Styled.FlexWrapper>
            <Styled.InfoTitle>할인/부가결제</Styled.InfoTitle>
            <Styled.InfoContent>
              <Styled.RedFont>-0</Styled.RedFont>원
            </Styled.InfoContent>
          </Styled.FlexWrapper>
          <Styled.InnerMarginWrapper>
            <Styled.DiscountedPrice>
              <Styled.Title>최종 결제 금액</Styled.Title>
              <Styled.Title>15400원</Styled.Title>
            </Styled.DiscountedPrice>
          </Styled.InnerMarginWrapper>
        </Styled.FlexColumnWrapper>
      </InputGroup>
      {/* 결제수단 */}
      <InputGroup title="결제수단" before="none">
        <Styled.InnerPaddingWrapper field="payment">
          <PaymentList />
          <InputField field="card" placeholder="카드를 선택해주세요." />
          <InputField field="card" placeholder="일시불" />
        </Styled.InnerPaddingWrapper>
      </InputGroup>
    </div>
  );
};

export default Payment;
