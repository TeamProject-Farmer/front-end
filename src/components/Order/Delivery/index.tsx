import { useEffect, useState } from 'react';

import Styled from '../styles';

import InputGroup from '../InputGroup';
import InputField from '../InputField';

import { useQuery } from '@tanstack/react-query';

import { getOrderAddress } from 'src/apis/order/order';

import { DeliveryProps } from 'src/types/order/types';

const Delivery = ({ control, setValue }: DeliveryProps) => {
  const [haveOrdered, setHaveOrdered] = useState<boolean>(false);
  const [showShippingMsgInput, setShowShippingMsgInput] =
    useState<boolean>(false);

  const { data: orderedData } = useQuery({
    queryKey: ['orderedData'],
    queryFn: getOrderAddress,
    onSuccess: () => setHaveOrdered(true),
  });

  useEffect(() => {
    if (orderedData) {
      setHaveOrdered(true);
    }
  }, [orderedData]);

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
      setValue('phoneNumber', '');
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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setHaveOrdered(event.target.checked)
                }
              />
              <label htmlFor="recentAddress">최근 배송지</label>
            </Styled.RadioWrapper>
            <Styled.RadioWrapper>
              <input
                type="radio"
                name="address"
                id="newAddress"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setHaveOrdered(!event.target.checked);
                }}
              />
              <label htmlFor="newAddress">새로운 배송지</label>
            </Styled.RadioWrapper>
          </Styled.FlexWrapper>
        )}
        <InputField
          label="받는사람"
          caption="username"
          control={control}
          haveOrdered={haveOrdered}
          orderedData={orderedData}
        />
        <InputField
          label="주소"
          caption="address"
          control={control}
          haveOrdered={haveOrdered}
          orderedData={orderedData}
          setValue={setValue}
        />
        <InputField
          label="휴대전화"
          caption="phoneNumber"
          control={control}
          haveOrdered={haveOrdered}
          orderedData={orderedData}
        />
      </InputGroup>
      <InputGroup title="" before="none">
        <Styled.InnerPaddingWrapper caption="shippingMsg">
          <InputField
            control={control}
            setShowShippingMsgInput={setShowShippingMsgInput}
            caption="shippingMsg"
          />
          {showShippingMsgInput && (
            <InputField control={control} caption="selfMemo" />
          )}
          <InputField control={control} caption="defaultAddr" />
        </Styled.InnerPaddingWrapper>
      </InputGroup>
    </>
  );
};

export default Delivery;
