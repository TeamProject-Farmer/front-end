import {useState} from 'react'
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
        <Styled.PhoneWrapper>
          <Styled.Input />
        </Styled.PhoneWrapper>
      ) : field === 'address' ? (
        <Styled.AddressWrapper>
          <Styled.PostcodeWrapper>
            <Styled.Input {...postCodeValid} placeholder="우편번호" width={250} />
            <Button text="주소검색" />
          </Styled.PostcodeWrapper>
          <Styled.Input {...basicAddressValid} placeholder="기본주소" />
          <Styled.Input {...detailAddressValid} placeholder="상세주소" />
        </Styled.AddressWrapper>
      ) : (
        <Styled.Input />
      )}
    </Styled.InputWrapper>
  );
}

export default InputField

const Styled = {
  InputWrapper: styled.div`
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
  PhoneWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
  `,
  AddressWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
  `,
  PostcodeWrapper: styled.div`
    display: flex;
  `

}
