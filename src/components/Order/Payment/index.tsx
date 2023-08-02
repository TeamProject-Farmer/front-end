import React, { useState, useEffect, useMemo } from 'react';
import Styled from '../styles';
import InputField from '../InputField';
import InputGroup from '../InputGroup';
import PaymentList from '../List/PaymentList';
import { getMemberCoupon, postMemberPoint } from 'src/apis/order/order';
import { ICoupon } from 'src/types/order/types';
//상품 데이터
const productData = {
  productId: 1,
  productName: '리돕스',
  discountRate: 0,
  price: 40000,
  averageStarRating: 0.0,
  reviewCount: null,
};

const Payment = () => {
  //쿠폰 적용
  const [coupon, setCoupon] = useState<ICoupon[]>();
  useEffect(() => {
    getMemberCoupon().then(res => setCoupon(res));
  }, []);
  const couponOptions = useMemo(() => coupon, [coupon]);
  //선택된 쿠폰
  const [selectedCouponId, setSelectedCouponId] = useState<number>();
  const [selectedCoupon, setSelectedCoupon] = useState<ICoupon>();
  const [disabledCouponBtn, setDisabledCouponBtn] = useState(false);
  const handleSelectedCoupon = event => {
    const selectedValue = event.target.value;
    setSelectedCouponId(Number(selectedValue));
    //쿠폰을 선택하지 않았을 때
    if (selectedValue === 0) {
      setDisabledPointBtn(false);
    }
  };
  useEffect(() => {
    const selectedOption =
      couponOptions &&
      couponOptions?.find(coupon => coupon.couponId === selectedCouponId);
    if (selectedOption) {
      setSelectedCoupon(selectedOption);
      setDisabledPointBtn(true);
    } else {
      setSelectedCoupon(null);
      setDisabledPointBtn(false);
    }
  }, [selectedCouponId]);

  // 적립금
  const [point, setPoint] = useState<number>();
  const [usedPoint, setUsedPoint] = useState<number>();
  const [disabledPointBtn, setDisabledPointBtn] = useState(false);
  useEffect(() => {
    postMemberPoint().then(res => {
      setPoint(res);
      setUsedPoint(res);
    });
  }, []);

  const handlePointChange = event => {
    const typedPoint = Number(event.target.value);
    setUsedPoint(typedPoint);
    if (typedPoint > point) {
      alert('최대로 사용할 수 있는 적립금을 초과하였습니다.');
      setDisabledPointBtn(true);
    }
  };
  // 할인된 가격
  const [discountedPrice, setDiscountedPrice] = useState<number>();
  console.log(selectedCoupon);
  const getDiscountedPrice = (fullPrice: number) => {
    if (selectedCoupon === null && usedPoint) {
      setDiscountedPrice(usedPoint);
      setDisabledCouponBtn(true);
      return;
    }
    if (selectedCoupon && selectedCoupon.couponPolicy === 'FIXED') {
      setDiscountedPrice(selectedCoupon.fixedPrice);
    }
    if (selectedCoupon && selectedCoupon.couponPolicy === 'RATE') {
      const price = fullPrice * (selectedCoupon.rateAmount / 100);
      setDiscountedPrice(price);
    }
  };

  return (
    <div>
      <InputGroup title="적립금/쿠폰">
        <InputField
          label="적립금"
          field="point"
          usedPoint={usedPoint}
          handlePointChange={handlePointChange}
          disabledPointBtn={disabledPointBtn}
          getDiscountedPrice={() => getDiscountedPrice(productData.price)}
        />
        <InputField
          label="쿠폰"
          field="coupon"
          couponOptions={couponOptions}
          handleSelectedCoupon={handleSelectedCoupon}
          disabledCouponBtn={disabledCouponBtn}
          getDiscountedPrice={() => getDiscountedPrice(productData.price)}
        />
        <Styled.InnerMarginWrapper>
          <Styled.DiscountedPrice>
            <Styled.Title>적용금액</Styled.Title>
            <Styled.Title>-0원</Styled.Title>
          </Styled.DiscountedPrice>
        </Styled.InnerMarginWrapper>
      </InputGroup>
      <InputGroup title="결제금액" before="none">
        <Styled.FlexColumnWrapper>
          <Styled.FlexWrapper>
            <Styled.InfoTitle>주문상품</Styled.InfoTitle>
            <Styled.InfoContent>{productData.price}원</Styled.InfoContent>
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
