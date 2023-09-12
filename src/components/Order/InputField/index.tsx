import { useEffect, useState } from 'react';
import { Styled as CheckBoxStyled } from './CheckBoxInput';
import Styled from './styles';
import { Controller } from 'react-hook-form';
import { formatPhoneNumber } from 'src/utils/order/formatPhoneNumber';
import { DaumPostcodeData, InputFieldProps } from 'src/types/order/types';
import {
  requiredErrorMsg,
  validateName,
  validateMobile,
} from 'src/utils/order/formValidation';
import Button from './Button';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import { formatAddress } from 'src/utils/order/getAddressfromDaumPostcode';
import { ControllerFieldState } from 'react-hook-form';
import shippingMsgOptions from 'src/utils/order/shippingMsgOptions';
import payMethodOptions from 'src/utils/order/payMethodOptions';

const InputField = ({
  label,
  caption,
  control,
  setValue,
  trigger,
  setShowShippingMsgInput,
}: InputFieldProps) => {
  // 주소 입력
  const handleComplete = (data: DaumPostcodeData) => {
    const addressData = formatAddress(data);
    setValue('zipcode', data.zonecode);
    setValue('address', addressData);
    trigger('zipcode');
    trigger('address');
  };

  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleDaumPost = () => {
    open({
      onComplete: handleComplete,
      height: 500,
      top: (window.innerHeight - 500) / 2,
      left: (window.innerWidth - 500) / 2,
    });
  };

  //에러 메시지
  const errorMessage = (fieldState: ControllerFieldState) =>
    fieldState.error ? (
      <Styled.ErrorMsg>* {fieldState.error.message}</Styled.ErrorMsg>
    ) : null;

  return (
    <Styled.InputWrapper caption={caption}>
      {label && (
        <Styled.Label>
          {label}
          <Styled.AstBox>*</Styled.AstBox>
        </Styled.Label>
      )}
      {
        {
          username: (
            <Styled.FlexGapWrapper>
              <Controller
                name="username"
                control={control}
                rules={{
                  required: requiredErrorMsg,
                  validate: value => validateName(value),
                }}
                render={({ field, fieldState }) => (
                  <>
                    <Styled.Input
                      type="text"
                      {...field}
                      value={field.value ? field.value : ''}
                      onClick={event => {
                        console.log(event.target);
                      }}
                    />
                    {errorMessage(fieldState)}
                  </>
                )}
              ></Controller>
            </Styled.FlexGapWrapper>
          ),
          phoneNumber: (
            <Styled.FlexGapWrapper>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  required: requiredErrorMsg,
                  validate: value => validateMobile(value),
                }}
                render={({ field, fieldState }) => (
                  <>
                    <Styled.Input
                      type="text"
                      {...field}
                      value={field.value ? field.value : ''}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>,
                      ) => {
                        const formattedValue = formatPhoneNumber(
                          event.target.value,
                        );
                        field.onChange(formattedValue);
                      }}
                    />
                    {errorMessage(fieldState)}
                  </>
                )}
              ></Controller>
            </Styled.FlexGapWrapper>
          ),
          address: (
            <Styled.FlexColumnWrapper>
              <Controller
                name="zipcode"
                control={control}
                rules={{ required: requiredErrorMsg }}
                render={({ field, fieldState }) => (
                  <>
                    <Styled.FlexWrapper>
                      <Styled.Input
                        {...field}
                        value={field.value ? field.value : ''}
                        readOnly
                        placeholder="우편번호"
                        width={250}
                      />
                      <Button onClick={handleDaumPost} text="주소검색" />
                    </Styled.FlexWrapper>
                    {errorMessage(fieldState)}
                  </>
                )}
              ></Controller>
              <Controller
                name="address"
                control={control}
                rules={{ required: requiredErrorMsg }}
                render={({ field, fieldState }) => (
                  <>
                    <Styled.Input
                      {...field}
                      value={field.value ? field.value : ''}
                      placeholder="기본주소"
                    />
                    {errorMessage(fieldState)}
                  </>
                )}
              ></Controller>
              <Controller
                name="addressDetail"
                control={control}
                rules={{ required: requiredErrorMsg }}
                render={({ field, fieldState }) => (
                  <>
                    <Styled.Input
                      {...field}
                      value={field.value ? field.value : ''}
                      placeholder="상세주소"
                    />
                    {errorMessage(fieldState)}
                  </>
                )}
              ></Controller>
            </Styled.FlexColumnWrapper>
          ),
          shippingMsg: (
            <Styled.FlexColumnWrapper>
              <Controller
                name="memo"
                control={control}
                defaultValue="OFFICE"
                render={({ field }) => (
                  <Styled.Dropdown
                    caption="shippingMsg"
                    {...field}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                      const value = event.target.value;
                      value === 'TEXT'
                        ? setShowShippingMsgInput(true)
                        : setShowShippingMsgInput(false),
                        field.onChange(value);
                    }}
                  >
                    {shippingMsgOptions &&
                      shippingMsgOptions.map(msg => (
                        <Styled.Option key={msg.type} value={msg.type}>
                          {msg.text}
                        </Styled.Option>
                      ))}
                  </Styled.Dropdown>
                )}
              ></Controller>
            </Styled.FlexColumnWrapper>
          ),
          defaultAddr: (
            <CheckBoxStyled.Wrapper>
              <Controller
                name="defaultAddr"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <input
                    {...field}
                    onChange={() => field.onChange(!field.value)}
                    type="checkbox"
                    value={field.value}
                  />
                )}
              ></Controller>
              <CheckBoxStyled.Label>기본 배송지로 저장</CheckBoxStyled.Label>
            </CheckBoxStyled.Wrapper>
          ),
          selfMemo: (
            <Controller
              name="selfMemo"
              control={control}
              defaultValue=""
              render={({ field }) => <Styled.Input {...field} width={750} />}
            ></Controller>
          ),
          payMethod: (
            <Controller
              name="payMethod"
              control={control}
              render={({ field }) => (
                <Styled.Dropdown
                  caption="payMethod"
                  defaultValue={undefined}
                  {...field}
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    field.onChange(event.target.value);
                  }}
                >
                  {payMethodOptions &&
                    payMethodOptions.map(payMethod => (
                      <Styled.Option
                        key={payMethod.title}
                        value={payMethod.method}
                      >
                        {payMethod.title}
                      </Styled.Option>
                    ))}
                </Styled.Dropdown>
              )}
            ></Controller>
          ),
        }[caption]
      }
    </Styled.InputWrapper>
  );
};

export default InputField;
