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

const InputField = ({
  label,
  required,
  field,
  placeholder,
}: IInputFieldProps) => {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
    clearErrors,
  } = useForm({
    mode: 'onChange',
  });

  //전화번호 입력시 자동으로 하이픈 생성
  const watchMobileInput = watch('mobile');

  useEffect(() => {
    setTimeout(() => {
      setValue('mobile', formatPhoneNumber(watchMobileInput));
    }, 0.00001);
  }, [watchMobileInput]);

  // input 유효성 검사
  const useFormValidation = (fieldName: TFieldName, value?: TValidate) => {
    const validation = register(fieldName, {
      required: requiredErrorMsg,
      validate: value,
    });
    return validation;
  };

  const nameValid = useFormValidation('name', validateName);
  const mobileValid = useFormValidation('mobile', validateMobile);
  const postCodeValid = useFormValidation('postCode');
  const basicAddressValid = useFormValidation('basicAddress');
  const detailAddressValid = useFormValidation('detailAddress');

  // 카카오 postcode 기능
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: DaumPostcodeData) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setValue('postCode', data.zonecode);
    setValue('basicAddress', fullAddress);
    clearErrors('postCode');
    clearErrors('basicAddress');
  };

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
    if (event.target.value === '직접 입력') {
      setShowShippingMsgInput(true);
    } else {
      setShowShippingMsgInput(false);
    }
  };

  return (
    <Styled.InputWrapper field={field}>
      {label && (
        <Styled.Label>
          {label}
          {required && <Styled.AstBox>*</Styled.AstBox>}
        </Styled.Label>
      )}
      {field === 'mobile' ? (
        <Styled.FlexGapWrapper>
          <Styled.Dropdown isMobile={true}>
            {mobileOptions.map((number, index) => (
              <Styled.Option key={index} value={number}>
                {number}
              </Styled.Option>
            ))}
          </Styled.Dropdown>
          -
          <Styled.Input type="text" {...mobileValid} width={360} />
          <Styled.ErrorMsg>{errors?.mobile?.message}</Styled.ErrorMsg>
        </Styled.FlexGapWrapper>
      ) : field === 'address' ? (
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
          <Styled.ErrorMsg>
            {errors?.postCode?.message ||
              errors?.basicAddress?.message ||
              errors?.detailAddress?.message}
          </Styled.ErrorMsg>
        </Styled.FlexColumnWrapper>
      ) : field === 'coupon' ? (
        <Styled.FlexColumnWrapper>
          <Styled.FlexWrapper>
            <Styled.Input width={660} />
            <Button text="전액사용" />
          </Styled.FlexWrapper>
          <Styled.Explanation>
            1회 구매시 적립금 최소 사용금액은 2,000원입니다.
          </Styled.Explanation>
        </Styled.FlexColumnWrapper>
      ) : field === 'point' ? (
        <Styled.FlexColumnWrapper>
          <Styled.FlexWrapper>
            <Styled.Input width={660} />
            <Button text="쿠폰적용" />
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
      ) : field === 'card' || field === 'instalment' ? (
        <Styled.Input width={844} placeholder={placeholder} />
      ) : field === 'shippingMsg' ? (
        <Styled.FlexColumnWrapper>
          <Styled.Dropdown onChange={handleChange}>
            {shippingMsgOptions.map((msg, index) => (
              <Styled.Option key={index} value={msg}>
                {msg}
              </Styled.Option>
            ))}
          </Styled.Dropdown>
          {showShippingMsgInput && <Styled.Input width={750} />}
        </Styled.FlexColumnWrapper>
      ) : (
        <Styled.FlexGapWrapper>
          <Styled.Input type="text" {...nameValid} />
          <Styled.ErrorMsg>{errors?.name?.message}</Styled.ErrorMsg>
        </Styled.FlexGapWrapper>
      )}
    </Styled.InputWrapper>
  );
};

export default InputField;
