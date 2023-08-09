import Styled from '../styles';
import InputField from '../InputField';
import InputGroup from '../InputGroup';
import PaymentList from '../List/PaymentList';
import useDiscount from 'src/hooks/order/useDiscount';

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
  const {
    coupon,
    usedPoint,
    handlePointChange,
    handleSelectedCoupon,
    disabledPointBtn,
    disabledCouponBtn,
    getDiscountedPrice,
    discountedPrice,
  } = useDiscount();

  const finalPrice = isNaN(productData.price - discountedPrice)
    ? productData.price
    : productData.price - discountedPrice;

  return (
    <div>
      <InputGroup title="적립금/쿠폰">
        <InputField
          label="적립금"
          field="point"
          usedPoint={usedPoint}
          handlePoint={handlePointChange}
          disabledPointBtn={disabledPointBtn}
          getDiscountedPrice={() => getDiscountedPrice(productData.price)}
        />
        <InputField
          label="쿠폰"
          field="coupon"
          couponOptions={coupon}
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
              <Styled.Title>{finalPrice}원</Styled.Title>
            </Styled.DiscountedPrice>
          </Styled.InnerMarginWrapper>
        </Styled.FlexColumnWrapper>
      </InputGroup>
      {/* 결제수단 */}
      <InputGroup title="결제수단" before="none">
        <Styled.InnerPaddingWrapper field="payment">
          <PaymentList />
          {/* <InputField field="card" placeholder="카드를 선택해주세요." />
          <InputField field="card" placeholder="일시불" /> */}
        </Styled.InnerPaddingWrapper>
      </InputGroup>
    </div>
  );
};

export default Payment;
