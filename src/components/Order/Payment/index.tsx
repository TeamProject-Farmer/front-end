import Styled from '../styles';
import PaymentInput from '../InputField/PaymentInput';
import InputGroup from '../InputGroup';
import useDiscount from 'src/hooks/order/useDiscount';
import { useEffect } from 'react';

const Payment = ({
  totalPrice,
  getTotalAmount,
  getUsedPoint,
  getUsedCoupon,
}) => {
  const {
    coupon,
    usedPoint,
    selectedCouponId,
    handlePointChange,
    handleSelectedCoupon,
    disabledPointBtn,
    disabledCouponBtn,
    discountedPrice,
    finalPrice,
    calculateDiscountedPointPrice,
  } = useDiscount(totalPrice);

  useEffect(() => {
    getTotalAmount(finalPrice);
    getUsedPoint(selectedCouponId === 0 ? usedPoint : 0);
    getUsedCoupon(selectedCouponId);
  }, [finalPrice]);

  return (
    <>
      <InputGroup title="적립금/쿠폰">
        <PaymentInput
          label="적립금"
          caption="point"
          usedPoint={usedPoint}
          handlePoint={handlePointChange}
          disabledPointBtn={disabledPointBtn}
          getDiscountedPrice={calculateDiscountedPointPrice}
        />
        <PaymentInput
          label="쿠폰"
          caption="coupon"
          couponOptions={coupon}
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
              <Styled.RedFont>-{discountedPrice}</Styled.RedFont>원
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
