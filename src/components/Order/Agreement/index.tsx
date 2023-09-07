import Styled from '../styles';
import CheckBoxInput from '../InputField/CheckBoxInput';
import useCheckBox from 'src/hooks/order/useCheckBox';
import { useEffect } from 'react';

const Agreement = ({ handleAgreementChange }) => {
  const {
    isAllChecked,
    checkedState,
    handleAllCheck,
    handleMonoCheck,
    paymentChecked,
    handlePaymentCheck,
  } = useCheckBox();

  useEffect(() => {
    handleAgreementChange(isAllChecked, paymentChecked);
  }, [isAllChecked, paymentChecked]);

  return (
    <Styled.AgreementWrapper>
      <Styled.FlexWrapper agreement={true}>
        <Styled.FlexColumnWrapper>
          <CheckBoxInput
            smallBox={false}
            label="아래 내용에 모두 동의합니다. (필수)"
            checked={isAllChecked}
            onChange={handleAllCheck}
          />
          <Styled.InnerPaddingWrapper caption="agreement">
            <CheckBoxInput
              label="개인정보 제 3자 제공"
              checked={checkedState[0]}
              onChange={() => handleMonoCheck(0)}
            />
            <CheckBoxInput
              label="개인정보 수집 및 이용"
              checked={checkedState[1]}
              onChange={() => handleMonoCheck(1)}
            />
          </Styled.InnerPaddingWrapper>
        </Styled.FlexColumnWrapper>
        <CheckBoxInput
          label="결제대행 서비스 이용약관 동의 (필수)"
          checked={paymentChecked}
          onChange={handlePaymentCheck}
        />
      </Styled.FlexWrapper>
    </Styled.AgreementWrapper>
  );
};

export default Agreement;
