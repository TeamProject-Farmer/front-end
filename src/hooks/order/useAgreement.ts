import { useState } from 'react';

const useAgreement = () => {
  // 약관동의
  const [payNowDisabled, setPayNowDisabled] = useState<boolean>(false);

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
    handleAgreementChange,
  };
};

export default useAgreement;
