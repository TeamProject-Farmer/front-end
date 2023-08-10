import { useState } from 'react';
import Styled from './styles';
import { Controller } from 'react-hook-form';
import { shippingMsgOptions } from 'src/utils/order/optionList';
import { formatPhoneNumber } from 'src/utils/order/formatPhoneNumber';
import { DaumPostcodeData } from 'src/types/order/types';
import {
  requiredErrorMsg,
  validateName,
  validateMobile,
} from 'src/utils/order/formValidation';
import Button from './Button';
import { IInputFieldProps } from 'src/types/order/types';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import { formatAddress } from 'src/utils/order/getAddressfromDaumPostcode';

const InputField = ({
  label,
  required,
  field,
  placeholder,
  couponOptions,
  usedPoint,
  handleSelectedCoupon,
  handlePoint,
  disabledPointBtn,
  disabledCouponBtn,
  getDiscountedPrice,
  control,
  setValue,
  trigger,
}: IInputFieldProps) => {
  // 배송 메시지 직접 입력
  const [showShippingMsgInput, setShowShippingMsgInput] =
    useState<boolean>(false);

  const handleShippingMsg = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.target.value === '직접 입력'
      ? setShowShippingMsgInput(true)
      : setShowShippingMsgInput(false);
  };

  // 주소 입력
  const handleComplete = (data: DaumPostcodeData) => {
    const addressData = formatAddress(data);
    setValue('postCode', data.zonecode);
    setValue('basicAddress', addressData);
    trigger('postCode');
    trigger('basicAddress');
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
  const errorMessage = fieldState =>
    fieldState.error ? (
      <Styled.ErrorMsg>* {fieldState.error.message}</Styled.ErrorMsg>
    ) : null;

  return (
    <Styled.InputWrapper field={field}>
      {label && (
        <Styled.Label>
          {label}
          {required && <Styled.AstBox>*</Styled.AstBox>}
        </Styled.Label>
      )}
      {
        {
          name: (
            <Styled.FlexGapWrapper>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: requiredErrorMsg,
                  validate: value => validateName(value),
                }}
                render={({ field, fieldState }) => (
                  <>
                    <Styled.Input type="text" {...field} value={field.value} />
                    {errorMessage(fieldState)}
                  </>
                )}
              ></Controller>
            </Styled.FlexGapWrapper>
          ),
          mobile: (
            <Styled.FlexGapWrapper>
              <Controller
                name="mobile"
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
                      defaultValue="010-"
                      value={formatPhoneNumber(field.value)}
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
                name="postCode"
                control={control}
                rules={{ required: requiredErrorMsg }}
                render={({ field, fieldState }) => (
                  <>
                    <Styled.FlexWrapper>
                      <Styled.Input
                        {...field}
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
                name="basicAddress"
                control={control}
                rules={{ required: requiredErrorMsg }}
                render={({ field, fieldState }) => (
                  <>
                    <Styled.Input {...field} placeholder="기본주소" />
                    {errorMessage(fieldState)}
                  </>
                )}
              ></Controller>
              <Controller
                name="detailAddress"
                control={control}
                rules={{ required: requiredErrorMsg }}
                render={({ field, fieldState }) => (
                  <>
                    <Styled.Input
                      {...field}
                      value={field.value}
                      placeholder="상세주소"
                    />
                    {errorMessage(fieldState)}
                  </>
                )}
              ></Controller>
            </Styled.FlexColumnWrapper>
          ),
          coupon: (
            <Styled.FlexColumnWrapper>
              <Styled.FlexWrapper>
                <Styled.Dropdown field="coupon" onChange={handleSelectedCoupon}>
                  <option value={0}>쿠폰을 선택해주세요</option>
                  {couponOptions &&
                    couponOptions.map(coupon => (
                      <Styled.Option
                        key={coupon.couponId}
                        value={coupon.couponId}
                        onChange={getDiscountedPrice}
                      >
                        {coupon.name}
                      </Styled.Option>
                    ))}
                </Styled.Dropdown>
                <Button text="쿠폰적용" disabled={disabledCouponBtn} />
              </Styled.FlexWrapper>
              <Styled.FlexGapWrapper>
                <Styled.Explanation>
                  적립금과 쿠폰은 중복사용이 불가합니다.
                </Styled.Explanation>
                <Styled.Explanation>
                  일부 할인 상품에 한하여 쿠폰 사용이 제한될 수 있습니다.
                </Styled.Explanation>
              </Styled.FlexGapWrapper>
            </Styled.FlexColumnWrapper>
          ),
          point: (
            <Styled.FlexColumnWrapper>
              <Styled.FlexWrapper>
                <Styled.Input
                  width={660}
                  value={usedPoint ? usedPoint : 0}
                  onChange={handlePoint}
                  disabled={disabledPointBtn}
                />
                <Button
                  text="적용하기"
                  disabled={disabledPointBtn}
                  onClick={getDiscountedPrice}
                />
              </Styled.FlexWrapper>
              <Styled.FlexGapWrapper>
                <Styled.Explanation>
                  1회 구매시 적립금 최소 사용금액은 2,000원입니다.
                </Styled.Explanation>
              </Styled.FlexGapWrapper>
            </Styled.FlexColumnWrapper>
          ),
          card: <Styled.Input width={844} placeholder={placeholder} />,
          shippingMsg: (
            <Styled.FlexColumnWrapper>
              <Styled.Dropdown field="shippingMsg" onChange={handleShippingMsg}>
                {shippingMsgOptions.map((msg, index) => (
                  <Styled.Option key={index} value={msg}>
                    {msg}
                  </Styled.Option>
                ))}
              </Styled.Dropdown>
              {showShippingMsgInput && <Styled.Input width={750} />}
            </Styled.FlexColumnWrapper>
          ),
        }[field]
      }
    </Styled.InputWrapper>
  );
};

export default InputField;
