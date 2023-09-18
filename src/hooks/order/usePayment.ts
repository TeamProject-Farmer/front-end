import { useState } from 'react';
import { PayMethod } from 'src/types/order/types';

const usePayment = () => {
  // 사용된 포인트
  const [point, setPoint] = useState<number>();
  // 사용된 쿠폰
  const [couponId, setCouponId] = useState<number>();
  // 최종 주문 금액
  const [totalAmount, setTotalAmount] = useState<number>();
  // 약관동의
  const [payNowDisabled, setPayNowDisabled] = useState<boolean>(false);

  const getUsedCoupon = (couponId: number) => {
    setCouponId(couponId);
  };

  const getUsedPoint = (point: number) => {
    setPoint(point);
  };
  const getTotalAmount = (amount: number) => {
    setTotalAmount(amount);
  };

  const handleAgreementChange = (
    isAllChecked: boolean,
    paymentChecked: boolean,
  ) => {
    isAllChecked && paymentChecked
      ? setPayNowDisabled(false)
      : setPayNowDisabled(true);
  };

  return {
    payNowDisabled,
    totalAmount,
    getTotalAmount,
    handleAgreementChange,
    getUsedPoint,
    point,
    getUsedCoupon,
    couponId,
  };
};

export default usePayment;
