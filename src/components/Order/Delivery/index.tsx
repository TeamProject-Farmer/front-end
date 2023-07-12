import React from 'react';
import InputGroup from '../InputGroup';
import InputField from '../InputField';
import CheckBoxInput from '../InputField/CheckBoxInput';
import Styled from '../styles';

const Delivery = () => {
  return (
    <>
      {/* 주문정보 */}
      <InputGroup title="주문정보">
        <InputField label="주문자" field="name" required={true} />
        <InputField label="휴대전화" field="mobile" required={true} />
        <InputField label="주소" field="address" required={true} />
      </InputGroup>
      {/* 배송지 */}
      <InputGroup title="배송지">
        <InputField label="받는사람" field="name" required={true} />
        <InputField label="주소" field="address" required={true} />
        <InputField label="휴대전화" field="mobile" required={true} />
      </InputGroup>
      <InputGroup title="" before="none">
        <Styled.InnerPaddingWrapper field="shippingMsg">
          <InputField field="shippingMsg" />
          <CheckBoxInput label="기본 배송지로 저장" />
        </Styled.InnerPaddingWrapper>
      </InputGroup>
    </>
  );
};

export default Delivery;
