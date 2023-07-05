import {useState} from 'react'
import Styled from './styles';
import { useForm } from 'react-hook-form';
import { emailOptions } from 'src/utils/register/emailListUtil';
import {
  FieldName,
  IAuthForm,
  Validate,
} from 'src/types/register/types';
import {
  requiredErrorMessage,
} from 'src/utils/register/formUtil';
import Button from './Button';
import {IInputFieldProps} from 'src/types/order/types'
import Icon from '@components/Common/Icon';

const InputField = ({label, required, field, width, placeholder}: IInputFieldProps) => {
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

  return (
    <Styled.InputWrapper field={field}>
      {label && 
        <Styled.Label>
          {label}
          {required && <Styled.AstBox>*</Styled.AstBox>}
        </Styled.Label>
      }
      {field === 'email' ? (
        <Styled.EmailWrapper>
          <Styled.Input width={width} />
          <Styled.EmailAt>@</Styled.EmailAt>
          <Styled.EmailOptionWrapper>
            <Styled.Input
              {...selectedEmail}
              placeholder="선택해주세요"
            />
            <Styled.IconWrapper onClick={() => setIsDropdownOpen(prev => !prev)}>
              <Icon name="dropDown" width={15} height={13} />
            </Styled.IconWrapper>
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
        <Styled.Input width={750} placeholder={placeholder}/>
      ) :
      (
        <Styled.Input />
      )}
    </Styled.InputWrapper>
  );
}

export default InputField


