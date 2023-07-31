import React from 'react';
import Styled from '../styles';
import CheckBoxInput from '../InputField/CheckBoxInput';
import { useState } from 'react';

const Agreement = () => {
  const [isAllChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(2).fill(false));

  const handleAllCheck = () => {
    setAllChecked(prev => !prev);
    let clearAllCheck = new Array(2).fill(!isAllChecked);
    setCheckedState(clearAllCheck);
  };

  const handleMonoCheck = (position: number) => {
    const updatedCheckedState = checkedState.map((input, index) =>
      index === position ? !input : input,
    );
    setCheckedState(updatedCheckedState);
    const checkedLength = updatedCheckedState.reduce((sum, currentState) => {
      if (currentState === true) {
        return sum + 1;
      }
      return sum;
    }, 0);
    setAllChecked(checkedLength === updatedCheckedState.length);
  };
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
          <Styled.InnerPaddingWrapper field="agreement">
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
        <CheckBoxInput label="결제대행 서비스 이용약관 동의 (필수)" />
      </Styled.FlexWrapper>
    </Styled.AgreementWrapper>
  );
};

export default Agreement;
