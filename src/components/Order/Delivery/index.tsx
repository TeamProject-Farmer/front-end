import React, { useEffect, useState, useMemo } from 'react';
import InputGroup from '../InputGroup';
import InputField from '../InputField';
import CheckBoxInput from '../InputField/CheckBoxInput';
import Styled from '../styles';
import { getMemberOrderAddress } from 'src/apis/order/order';

const Delivery = () => {
  // 최근 배송지가 있는 경우에만 배송지 선택 라디오 버튼이 보이도록
  const [recentAddress, setRecentAddress] = useState<string>();
  useEffect(() => {
    getMemberOrderAddress().then(data => setRecentAddress(data));
  }, []);
  const recentAddressMemo = useMemo(() => recentAddress, [recentAddress]);

  return (
    <>
      <InputGroup title="배송지">
        {recentAddressMemo && recentAddressMemo.length !== 0 && (
          <Styled.FlexWrapper>
            <Styled.RadioWrapper>
              <input type="radio" name="address" id="recentAddress" />
              <label htmlFor="recentAddress">최근 배송지</label>
            </Styled.RadioWrapper>
            <Styled.RadioWrapper>
              <input type="radio" name="address" id="newAddress" checked />
              <label htmlFor="newAddress">새로운 배송지</label>
            </Styled.RadioWrapper>
          </Styled.FlexWrapper>
        )}
        <InputField label="받는사람" field="name" required={true} />
        <InputField label="주소" field="address" required={true} />
        <InputField label="휴대전화" field="mobile" required={true} />
      </InputGroup>
      <InputGroup title="" before="none">
        <Styled.InnerPaddingWrapper field="shippingMsg">
          <InputField field="shippingMsg" />
          <CheckBoxInput field="shippingMsg" label="기본 배송지로 저장" />
        </Styled.InnerPaddingWrapper>
      </InputGroup>
    </>
  );
};

export default Delivery;
