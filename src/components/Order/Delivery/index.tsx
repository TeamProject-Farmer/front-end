import { useEffect, useState, useMemo } from 'react';
import InputGroup from '../InputGroup';
import InputField from '../InputField';
import CheckBoxInput from '../InputField/CheckBoxInput';
import Styled from '../styles';
import { getMemberOrderAddress } from 'src/apis/order/order';

const Delivery = ({ control, setValue, trigger }) => {
  // 최근 배송지가 있는 경우에만 배송지 선택 라디오 버튼이 보이도록
  const [recentAddress, setRecentAddress] = useState<string>();
  const [showShippingMsgInput, setShowShippingMsgInput] =
    useState<boolean>(false);
  useEffect(() => {
    getMemberOrderAddress().then(data => setRecentAddress(data));
  }, []);

  return (
    <>
      <InputGroup title="배송지">
        {recentAddress && recentAddress.length !== 0 && (
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
        <InputField
          label="받는사람"
          caption="name"
          required={true}
          control={control}
        />
        <InputField
          label="주소"
          caption="address"
          required={true}
          control={control}
          setValue={setValue}
          trigger={trigger}
        />
        <InputField
          label="휴대전화"
          caption="mobile"
          required={true}
          control={control}
        />
      </InputGroup>
      <InputGroup title="" before="none">
        <Styled.InnerPaddingWrapper field="shippingMsg">
          <InputField
            control={control}
            setShowShippingMsgInput={setShowShippingMsgInput}
            caption="shippingMsg"
          />
          <CheckBoxInput
            control={control}
            caption="shippingMsg"
            label="기본 배송지로 저장"
          />
          {showShippingMsgInput && (
            <InputField control={control} caption="selfMsg" />
          )}
        </Styled.InnerPaddingWrapper>
      </InputGroup>
    </>
  );
};

export default Delivery;
