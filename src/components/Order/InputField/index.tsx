import { useState, useEffect, useRef } from 'react';
import Styled from './styles';
import { useForm } from 'react-hook-form';
import { mobileOptions, shippingMsgOptions } from 'src/utils/order/optionList';
import { formatPhoneNumber } from 'src/utils/order/formatPhoneNumber';
import { TFieldName, TValidate, DaumPostcodeData } from 'src/types/order/types';
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
  handlePointChange,
  disabledPointBtn,
  disabledCouponBtn,
  getDiscountedPrice,
}: IInputFieldProps) => {
  //reack-hook-form
  const {
    register,
    formState: { errors },
    setValue,
    watch,
    clearErrors,
  } = useForm({
    mode: 'onChange',
  });

  // input 유효성 검사
  const validateInput = (fieldName: TFieldName, value?: TValidate) => {
    const validation = register(fieldName, {
      required: requiredErrorMsg,
      validate: value,
    });
    return validation;
  };

  const nameValid = validateInput('name', validateName);
  const mobileValid = validateInput('mobile', validateMobile);
  const postCodeValid = validateInput('postCode');
  const basicAddressValid = validateInput('basicAddress');
  const detailAddressValid = validateInput('detailAddress');

  //전화번호 입력시 자동으로 하이픈 생성
  const watchMobileInput = watch('mobile');

  useEffect(() => {
    setValue('mobile', formatPhoneNumber(watchMobileInput));
  }, [watchMobileInput]);

  //주소 입력
  const handleComplete = (data: DaumPostcodeData) => {
    const fullAddress = formatAddress(data);
    setValue('postCode', data.zonecode);
    setValue('basicAddress', fullAddress);
    clearErrors('postCode');
    clearErrors('basicAddress');
  };

  const open = useDaumPostcodePopup(postcodeScriptUrl);
  const handleClick = () => {
    open({
      onComplete: handleComplete,
      height: 500,
      top: (window.innerHeight - 500) / 2,
      left: (window.innerWidth - 500) / 2,
    });
  };

  //배송 메시지 직접 입력
  const [showShippingMsgInput, setShowShippingMsgInput] =
    useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.target.value === '직접 입력'
      ? setShowShippingMsgInput(true)
      : setShowShippingMsgInput(false);
  };

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
              <Styled.Input type="text" {...nameValid} />
              {errors?.name && (
                <Styled.ErrorMsg>* {errors?.name?.message}</Styled.ErrorMsg>
              )}
            </Styled.FlexGapWrapper>
          ),
          mobile: (
            <Styled.FlexGapWrapper>
              <Styled.Dropdown field="mobile">
                {mobileOptions.map((number, index) => (
                  <Styled.Option key={index} value={number}>
                    {number}
                  </Styled.Option>
                ))}
              </Styled.Dropdown>
              -
              <Styled.Input type="text" {...mobileValid} width={360} />
              {errors?.mobile && (
                <Styled.ErrorMsg>* {errors?.mobile?.message}</Styled.ErrorMsg>
              )}
            </Styled.FlexGapWrapper>
          ),
          address: (
            <Styled.FlexColumnWrapper>
              <Styled.FlexWrapper>
                <Styled.Input
                  {...postCodeValid}
                  readOnly
                  placeholder="우편번호"
                  width={250}
                />
                <Button onClick={handleClick} text="주소검색" />
              </Styled.FlexWrapper>
              <Styled.Input {...basicAddressValid} placeholder="기본주소" />
              <Styled.Input {...detailAddressValid} placeholder="상세주소" />
              {errors?.postCode ||
                errors?.basicAddress ||
                (errors?.detailAddress && (
                  <Styled.ErrorMsg>
                    *{' '}
                    {errors?.postCode?.message ||
                      errors?.basicAddress?.message ||
                      errors?.detailAddress?.message}
                  </Styled.ErrorMsg>
                ))}
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
                      >
                        {coupon.name}
                      </Styled.Option>
                    ))}
                </Styled.Dropdown>
                <Button
                  text="쿠폰적용"
                  onClick={getDiscountedPrice}
                  disabled={disabledCouponBtn}
                />
              </Styled.FlexWrapper>
              <Styled.Explanation>
                1회 구매시 적립금 최소 사용금액은 2,000원입니다.
              </Styled.Explanation>
            </Styled.FlexColumnWrapper>
          ),
          point: (
            <Styled.FlexColumnWrapper>
              <Styled.FlexWrapper>
                <Styled.Input
                  width={660}
                  value={usedPoint}
                  onChange={handlePointChange}
                  disabled={disabledPointBtn}
                />
                <Button
                  text="전액사용"
                  disabled={disabledPointBtn}
                  onClick={getDiscountedPrice}
                />
              </Styled.FlexWrapper>
              <Styled.FlexGapWrapper>
                {disabledPointBtn && (
                  <Styled.Explanation>
                    적립금과 쿠폰은 중복사용이 불가합니다.
                  </Styled.Explanation>
                )}
                <Styled.Explanation>
                  일부 할인 상품에 한하여 쿠폰 사용이 제한될 수 있습니다.
                </Styled.Explanation>
              </Styled.FlexGapWrapper>
            </Styled.FlexColumnWrapper>
          ),
          card: <Styled.Input width={844} placeholder={placeholder} />,
          shippingMsg: (
            <Styled.FlexColumnWrapper>
              <Styled.Dropdown field="shippingMsg" onChange={handleChange}>
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
