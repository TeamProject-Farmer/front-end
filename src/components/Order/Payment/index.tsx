import { useState, useEffect } from 'react';

import Styled from '../styles';

import { PaymentProps } from 'src/types/order/types';

import PaymentInput from '../InputField/PaymentInput';
import InputGroup from '../InputGroup';

const Payment = ({
  couponList,
  usedPoint,
  typedPoint,
  selectedCouponId,
  handlePointChange,
  handleSelectedCoupon,
  discountedPrice,
  finalPrice,
  handlePointClick,
  totalPrice,
}: PaymentProps) => {
  const [disabledCouponBtn, setDisabledCouponBtn] = useState(false);
  const [disabledPointBtn, setDisabledPointBtn] = useState(false);

  useEffect(() => {
    setDisabledPointBtn(selectedCouponId === 0 ? false : true);
    selectedCouponId !== 0 && setDisabledCouponBtn(false);
  }, [selectedCouponId]);

  const totalDiscountedAmount =
    disabledCouponBtn && !disabledPointBtn ? usedPoint : discountedPrice;

  return (
    <>
      <InputGroup title="적립금/쿠폰">
        <PaymentInput
          label="적립금"
          caption="point"
          usedPoint={usedPoint}
          typedPoint={typedPoint}
          handlePoint={handlePointChange}
          disabledPointBtn={disabledPointBtn}
          setDisabledCouponBtn={setDisabledCouponBtn}
          handlePointClick={handlePointClick}
        />
        <PaymentInput
          label="쿠폰"
          caption="coupon"
          couponOptions={couponList}
          handleSelectedCoupon={handleSelectedCoupon}
          disabledCouponBtn={disabledCouponBtn}
        />
        <Styled.InnerMarginWrapper>
          <Styled.DiscountedPrice>
            <Styled.Title>적용금액</Styled.Title>
            <Styled.Title>-{discountedPrice}원</Styled.Title>
          </Styled.DiscountedPrice>
        </Styled.InnerMarginWrapper>
      </InputGroup>
      <InputGroup title="결제금액" before="none">
        <Styled.FlexColumnWrapper>
          <Styled.FlexWrapper>
            <Styled.InfoTitle>주문상품</Styled.InfoTitle>
            <Styled.InfoContent>{totalPrice}원</Styled.InfoContent>
          </Styled.FlexWrapper>
          <Styled.FlexWrapper>
            <Styled.InfoTitle>배송비</Styled.InfoTitle>
            <Styled.InfoContent>+2500원</Styled.InfoContent>
          </Styled.FlexWrapper>
          <Styled.FlexWrapper>
            <Styled.InfoTitle>할인/부가결제</Styled.InfoTitle>
            <Styled.InfoContent>
              <Styled.RedFont>-{totalDiscountedAmount}</Styled.RedFont>원
            </Styled.InfoContent>
          </Styled.FlexWrapper>
          <Styled.InnerMarginWrapper>
            <Styled.DiscountedPrice>
              <Styled.Title>최종 결제 금액</Styled.Title>
              <Styled.Title>{finalPrice + 2500}원</Styled.Title>
            </Styled.DiscountedPrice>
          </Styled.InnerMarginWrapper>
        </Styled.FlexColumnWrapper>
      </InputGroup>
    </>
  );
};

export default Payment;
