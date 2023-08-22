import { useEffect, useState, useMemo } from 'react';
import InputGroup from '../InputGroup';
import InputField from '../InputField';
import Styled from '../styles';
import { getMemberOrderAddress } from 'src/apis/order/order';
import { OrderedData } from 'src/types/order/types';

const Delivery = ({ control, setValue, trigger }) => {
  // 주문 이력이 있는 경우 배송지 선택 라디오 버튼이 보이도록
  const [haveOrdered, setHaveOrdered] = useState<boolean>(false);
  const [orderedData, setOrderedData] = useState<OrderedData>();
  // 배송 메시지 직접 입력 input
  const [showShippingMsgInput, setShowShippingMsgInput] =
    useState<boolean>(false);
  // 최근 배송 목록 불러오기
  useEffect(() => {
    getMemberOrderAddress().then(data => {
      if (data) {
        setOrderedData(data);
        setHaveOrdered(true);
      }
    });
  }, []);

  // 라디오 버튼에 따라
  useEffect(() => {
    if (haveOrdered) {
      setValue('username', orderedData.username);
      setValue('zipcode', orderedData.zipcode);
      setValue('address', orderedData.address);
      setValue('addressDetail', orderedData.addressDetail);
      setValue('phoneNumber', orderedData.phoneNumber);
    } else {
      setValue('username', '');
      setValue('zipcode', '');
      setValue('address', '');
      setValue('addressDetail', '');
      setValue('phoneNumber', '010-');
    }
  }, [haveOrdered]);

  return (
    <>
      <InputGroup title="배송지">
        {orderedData && (
          <Styled.FlexWrapper>
            <Styled.RadioWrapper>
              <input
                type="radio"
                name="address"
                id="recentAddress"
                checked={haveOrdered}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setHaveOrdered(event.target.checked);
                }}
              />
              <label htmlFor="recentAddress">최근 배송지</label>
            </Styled.RadioWrapper>
            <Styled.RadioWrapper>
              <input
                type="radio"
                name="address"
                id="newAddress"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setHaveOrdered(!event.target.checked)
                }
              />
              <label htmlFor="newAddress">새로운 배송지</label>
            </Styled.RadioWrapper>
          </Styled.FlexWrapper>
        )}
        <InputField label="받는사람" caption="username" control={control} />
        <InputField
          label="주소"
          caption="address"
          control={control}
          setValue={setValue}
          trigger={trigger}
        />
        <InputField label="휴대전화" caption="phoneNumber" control={control} />
      </InputGroup>
      <InputGroup title="" before="none">
        <Styled.InnerPaddingWrapper caption="shippingMsg">
          <InputField
            control={control}
            setShowShippingMsgInput={setShowShippingMsgInput}
            caption="shippingMsg"
          />
          {showShippingMsgInput && (
            <InputField control={control} caption="selfMsg" />
          )}
          <InputField control={control} caption="defaultAddr" />
        </Styled.InnerPaddingWrapper>
      </InputGroup>
    </>
  );
};

export default Delivery;
