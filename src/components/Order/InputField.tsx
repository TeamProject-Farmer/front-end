import {useState} from 'react'
import theme from '@styles/theme';
import styled from '@emotion/styled'
import { FieldError, useForm } from 'react-hook-form';
import { emailOptions } from 'src/utils/register/emailListUtil';
import {
  DaumPostcodeData,
  FieldName,
  IAuthForm,
  Validate,
} from 'src/types/register/types';
import {
  requiredErrorMessage,
  validatePhoneNumber,
} from 'src/utils/register/formUtil';
import Option from '@assets/images/register/option.svg';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import Button from './Button';

interface InputFieldProps {
  label: string;
  field: string;
  width?: number;
  placeholder?: string;
}

const InputField = ({label, field, width, placeholder}: InputFieldProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   // react-hook-form
   const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<IAuthForm>({
    mode: 'onChange',
  });

  const handleOptionClick = (email: string) => {
    email === '직접입력'
      ? setValue('selectedEmail', '')
      : setValue('selectedEmail', email);
    setIsDropdownOpen(false);
    trigger('selectedEmail');
  };

  // form validation hook
  const useFormValidation = (fieldName: FieldName, value?: Validate) => {
    const validation = register(fieldName, {
      required: requiredErrorMessage,
      validate: value,
    });

    return validation;
  };

  const selectedEmail = useFormValidation('selectedEmail');
  const postCodeValid = useFormValidation('postCode');
  const basicAddressValid = useFormValidation('basicAddress');
  const detailAddressValid = useFormValidation('detailAddress');

  return (
    <Styled.InputWrapper>
      <Styled.Label>{label}</Styled.Label>
      {field === 'email' ? (
        <Styled.EmailWrapper>
          <Styled.Input width={width} />
          <Styled.EmailAt>@</Styled.EmailAt>
          <Styled.EmailOptionWrapper>
            <Styled.Input
              {...selectedEmail}
              placeholder="선택해주세요"
            />
            <Styled.MoreBtn onClick={() => setIsDropdownOpen(prev => !prev)} />
            {isDropdownOpen && (
              <Styled.Dropdown>
                {emailOptions.map((email, index) => (
                  <Styled.Option
                    key={index}
                    onClick={() => handleOptionClick(email)}
                  >
                    {email}
                  </Styled.Option>
                ))}
              </Styled.Dropdown>
            )}
          </Styled.EmailOptionWrapper>
        </Styled.EmailWrapper>
      ) : field === 'phone' ? (
        <Styled.FlexGapWrapper>
          <Styled.Input />
        </Styled.FlexGapWrapper>
      ) : field === 'address' ? (
        <Styled.FlexColumnWrapper>
          <Styled.FlexWrapper>
            <Styled.Input {...postCodeValid} placeholder="우편번호" width={250} />
            <Button text="주소검색" />
          </Styled.FlexWrapper>
          <Styled.Input {...basicAddressValid} placeholder="기본주소" />
          <Styled.Input {...detailAddressValid} placeholder="상세주소" />
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
      : (
        <Styled.Input />
      )}
    </Styled.InputWrapper>
  );
}

export default InputField

const Styled = {
  InputWrapper: styled.div`
    position: relative;
    display: flex;
    align-items: center;
  `,
  Label: styled.label`
    font-size: 16px;
    width: 95px;
  `,
  Input: styled.input<{width?:number}>`
    outline: none;
    width: ${({ width }) => width ? width: '300'}px;
    height: 40px;
    border-radius: 4px;
    padding-left: 10px; 
    border: 1px solid #ABABAB;
  `,
  EmailWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  EmailAt: styled.p`
    font-size: 18px;
  `,
  EmailOptionWrapper: styled.div`
    position: relative;
  `,
  MoreBtn: styled(Option)`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    margin-right: 5px;
  `,
  Dropdown: styled.ul`
    width: 300px;
    position: absolute;
    max-height: 130px;
    overflow-y: auto;
    border: 1px solid #000000;
    background-color: #fff;
    border-top: none;
    padding: 0;
    margin: 0;
    list-style: none;
    z-index: 1;
  `,
  Option: styled.li`
      font-size: 14px;
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: #f1f1f1;
      }
  `,
  FlexWrapper: styled.div`
    display: flex;
  `,
  FlexGapWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
  `,
  FlexColumnWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
  `,
  Explanation: styled.p`
    padding: 6px 12px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #F0F0F0;
  `,
}
