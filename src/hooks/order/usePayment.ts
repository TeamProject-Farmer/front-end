import { useState } from 'react';
import { ISelectedMethod } from 'src/types/order/types';

const usePayment = () => {
  // 최종 주문 금액
  const [totalAmount, setTotalAmount] = useState<number>();
  // 약관동의
  const [payNowDisabled, setPayNowDisabled] = useState<boolean>(true);
  // 결제 방식
  const [selectedMethod, setSelectedMethod] = useState<ISelectedMethod>();

  const getTotalAmount = (amount: number) => {
    setTotalAmount(amount);
  };

  const handleAgreementChange = (
    isAllChecked: boolean,
    paymentChecked: boolean,
  ) => {
    if (isAllChecked && paymentChecked) {
      setPayNowDisabled(false);
    } else {
      setPayNowDisabled(true);
    }
  };

  return {
    payNowDisabled,
    totalAmount,
    selectedMethod,
    setSelectedMethod,
    getTotalAmount,
    handleAgreementChange,
  };
};

export default usePayment;
