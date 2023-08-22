import { useState } from 'react';
import { PayMethod } from 'src/types/order/types';

const usePayment = () => {
  // 최종 주문 금액
  const [totalAmount, setTotalAmount] = useState<number>();
  // 약관동의
  const [payNowDisabled, setPayNowDisabled] = useState<boolean>(false);
  // 결제 방식
  const [selectedMethod, setSelectedMethod] = useState<PayMethod>();
  // 결제 완료
  const [paySuccess, setPaySuccess] = useState<boolean>();
  // 사용된 포인트
  const [point, setPoint] = useState<number>();

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
    selectedMethod,
    setSelectedMethod,
    getTotalAmount,
    handleAgreementChange,
    setPaySuccess,
    getUsedPoint,
    point,
  };
};

export default usePayment;
