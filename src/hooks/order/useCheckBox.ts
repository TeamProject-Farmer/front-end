import { useState } from 'react';

const useCheckBox = () => {
  // 개인정보 체크 여부 확인
  const [isAllChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(2).fill(false));

  const handleAllCheck = () => {
    setAllChecked(prev => !prev);
    let clearAllCheck = new Array(2).fill(!isAllChecked);
    setCheckedState(clearAllCheck);
  };

  const handleMonoCheck = (position: number) => {
    setCheckedState(prevCheckedState => {
      const updatedCheckedState = [...prevCheckedState];
      updatedCheckedState[position] = !updatedCheckedState[position];

      const checkedLength = updatedCheckedState.filter(Boolean).length;
      setAllChecked(checkedLength === updatedCheckedState.length);

      return updatedCheckedState;
    });
  };

  // 결제대행 체크 여부 확인
  const [paymentChecked, setPaymentChecked] = useState(false);

  const handlePaymentCheck = () => {
    setPaymentChecked(prev => !prev);
  };
  return {
    isAllChecked,
    checkedState,
    handleAllCheck,
    handleMonoCheck,
    paymentChecked,
    handlePaymentCheck,
  };
};

export default useCheckBox;
