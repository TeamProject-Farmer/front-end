import React from 'react';
import Styled from '../styles';
import CheckBoxInput from '../InputField/CheckBoxInput';

const Agreement = () => {
  return (
    <Styled.AgreementWrapper>
      <Styled.FlexWrapper agreement={true}>
        <Styled.FlexColumnWrapper>
          <CheckBoxInput
            smallBox={false}
            label="아래 내용에 모두 동의합니다. (필수)"
          />
          <Styled.InnerPaddingWrapper field="agreement">
            <CheckBoxInput label="개인정보 제 3자 제공" />
            <CheckBoxInput label="개인정보 수집 및 이용" />
          </Styled.InnerPaddingWrapper>
        </Styled.FlexColumnWrapper>
        <CheckBoxInput label="결제대행 서비스 이용약관 동의 (필수)" />
      </Styled.FlexWrapper>
    </Styled.AgreementWrapper>
  );
};

export default Agreement;
