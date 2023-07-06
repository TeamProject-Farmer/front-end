import {useState, useEffect} from 'react'
import Styled from './styles';
import { useForm } from 'react-hook-form';
import { mobileOptions, shippingMsgOptions } from 'src/utils/order/optionList';
import { addHyphen } from 'src/utils/order/addHyphen';
import { TFieldName, TValidate } from 'src/types/order/types';
import {requiredErrorMsg, validateName, validateMobile} from 'src/utils/order/formValidation'
import Button from './Button';
import {IInputFieldProps} from 'src/types/order/types'
import Icon from '@components/Common/Icon';
import CheckBoxInput from './CheckBoxInput';

const InputField = ({label, required, field, placeholder}: IInputFieldProps) => {

   // react-hook-form
   const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    mode: 'onChange',
  });

  //전화번호 입력시 자동으로 하이픈 생성
  const watchMobileInput = watch('mobile')

  useEffect(() => {
    setTimeout(() => { setValue('mobile', addHyphen(watchMobileInput)); }, 0.00001);
  }, [watchMobileInput])

  // input 유효성 검사
  const useFormValidation = (fieldName: TFieldName, value?: TValidate) => {
    const validation = register(fieldName, {
      required: requiredErrorMsg,
      validate: value,
    });
    return validation;
  };

  // validation
  const nameValid = useFormValidation('name', validateName)
  const mobileValid = useFormValidation('mobile', validateMobile)

  return (
    <Styled.InputWrapper field={field}>
      {label && 
        <Styled.Label>
          {label}
          {required && <Styled.AstBox>*</Styled.AstBox>}
        </Styled.Label>
      }
      {field === 'mobile' ? (
        <Styled.FlexGapWrapper>
          <Styled.Dropdown>
            {mobileOptions.map((number, index) => (
              <Styled.Option
                key={index}
                value={number}
              >
                {number}
              </Styled.Option>
            ))}
          </Styled.Dropdown>
          -
          <Styled.Input type='text' {...mobileValid} width={230} />
          <p>{errors?.mobile?.message}</p>
        </Styled.FlexGapWrapper>
      ) : field === 'address' ? (
        <Styled.FlexColumnWrapper>
          <Styled.FlexWrapper>
            <Styled.Input placeholder="우편번호" width={250} />
            <Button text="주소검색" />
          </Styled.FlexWrapper>
          <Styled.Input placeholder="기본주소" />
          <Styled.Input placeholder="상세주소" />
        </Styled.FlexColumnWrapper>
      ) : field === 'coupon' ? (
        <Styled.FlexColumnWrapper>
          <Styled.FlexWrapper>
            <Styled.Input width={660} />
            <Button text="전액사용" />
          </Styled.FlexWrapper>
          <Styled.Explanation>1회 구매시 적립금 최소 사용금액은 2,000원입니다.</Styled.Explanation>
          </Styled.FlexColumnWrapper>
      ) : field === 'point' ? (
        <Styled.FlexColumnWrapper>
          <Styled.FlexWrapper>
            <Styled.Input width={660} />
            <Button text="쿠폰적용" />
          </Styled.FlexWrapper>
          <Styled.FlexGapWrapper>
            <Styled.Explanation>적립금과 쿠폰은 중복사용이 불가합니다.</Styled.Explanation>
            <Styled.Explanation>일부 할인 상품에 한하여 쿠폰 사용이 제한될 수 있습니다.</Styled.Explanation>
          </Styled.FlexGapWrapper>
        </Styled.FlexColumnWrapper>
      )
      : field === 'card' || field === 'instalment' ? (
        <Styled.Input width={844} placeholder={placeholder} />
      ) :
      field === 'shippingMsg' ? (
        <Styled.FlexColumnWrapper>
            <Styled.Dropdown>
              {shippingMsgOptions.map((msg, index) => (
                <Styled.Option
                  key={index}
                  value={msg}
                >
                  {msg}
                </Styled.Option>
              ))}
            </Styled.Dropdown>
        </Styled.FlexColumnWrapper>
      ) :
      (
        <>
        <Styled.Input type="text" {...nameValid} />
        <p>{errors?.name?.message}</p>
        </>
      )}
    </Styled.InputWrapper>
  );
}

export default InputField


