import React from 'react';
import Styled from './styles';
import Button from './Button';
import { PaymentInputProps } from 'src/types/order/types';
const PaymentInput = ({
  label,
  caption,
  couponOptions,
  usedPoint,
  handleSelectedCoupon,
  handlePoint,
  disabledPointBtn,
  disabledCouponBtn,
  getDiscountedPrice,
}: PaymentInputProps) => {
  console.log('usedPoint', usedPoint);
  return (
    <Styled.InputWrapper caption={caption}>
      {label && <Styled.Label>{label}</Styled.Label>}
      {
        {
          coupon: (
            <Styled.FlexColumnWrapper>
              <Styled.FlexWrapper>
                <Styled.Dropdown
                  caption={caption}
                  onChange={handleSelectedCoupon}
                >
                  <option value={0}>쿠폰을 선택해주세요</option>
                  {couponOptions &&
                    couponOptions.map(coupon => (
                      <Styled.Option
                        key={coupon.memberCouponId}
                        value={coupon.memberCouponId}
                      >
                        {coupon.name}
                      </Styled.Option>
                    ))}
                </Styled.Dropdown>
                <Button text="쿠폰적용" disabled={disabledCouponBtn} />
              </Styled.FlexWrapper>
              <Styled.FlexGapWrapper>
                <Styled.Explanation>
                  적립금과 쿠폰은 중복사용이 불가합니다.
                </Styled.Explanation>
                <Styled.Explanation>
                  일부 할인 상품에 한하여 쿠폰 사용이 제한될 수 있습니다.
                </Styled.Explanation>
              </Styled.FlexGapWrapper>
            </Styled.FlexColumnWrapper>
          ),
          point: (
            <Styled.FlexColumnWrapper>
              <Styled.FlexWrapper>
                <Styled.Input
                  width={660}
                  value={usedPoint ? usedPoint : 0}
                  onChange={handlePoint}
                  disabled={disabledPointBtn}
                />
                <Button
                  text="적용하기"
                  disabled={disabledPointBtn}
                  onClick={getDiscountedPrice}
                />
              </Styled.FlexWrapper>
              <Styled.FlexGapWrapper>
                <Styled.Explanation>
                  1회 구매시 적립금 최소 사용금액은 2,000원입니다.
                </Styled.Explanation>
              </Styled.FlexGapWrapper>
            </Styled.FlexColumnWrapper>
          ),
        }[caption]
      }
    </Styled.InputWrapper>
  );
};

export default PaymentInput;
