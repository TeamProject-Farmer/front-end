import React, { useState } from 'react';
import theme from 'src/styles/theme';
import { FieldError, useForm } from 'react-hook-form';
import { emailOptions } from 'src/utils/register/emailListUtil';
import {
  DaumPostcodeData,
  FieldName,
  IAuthForm,
  Validate,
} from 'src/types/register/registerPage';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import FormButton from '../FormButton';
import Styled from '../styles';
import InputField from '../InputField';
import {
  requiredErrorMessage,
  validatePassword,
  validatePhoneNumber,
} from 'src/utils/register/formUtil';

const InputGroup = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    clearErrors,
    setError,
    setValue,
    trigger,
  } = useForm<IAuthForm>({
    mode: 'onChange',
  });

  // form validation hook
  const useFormValidation = (fieldName: FieldName, value?: Validate) => {
    const validation = register(fieldName, {
      required: requiredErrorMessage,
      validate: value,
    });

    return validation;
  };

  // 비밀번호 일치 불일치
  const matchesPassword = (value: string) =>
    value === getValues().password || '비밀번호가 일치하지 않습니다.';

  const emailValid = useFormValidation('email');
  const selectedEmail = useFormValidation('selectedEmail');
  const nameValid = useFormValidation('name');
  const postCodeValid = useFormValidation('postCode');
  const basicAddressValid = useFormValidation('basicAddress');
  const detailaAddressValid = useFormValidation('detailAddress');
  const nicknameValid = useFormValidation('nickname');
  const checkBoxValid = useFormValidation('checked');
  const passwordValid = useFormValidation('password', validatePassword);
  const phoneValid = useFormValidation('phone', validatePhoneNumber);
  const passwordConfirm = useFormValidation('passwordConfirm', matchesPassword);

  // 에러 중복시 하나의 에러만 render
  const getFirstErrorMessage = (error: FieldError) => {
    if (error) {
      return error.message;
    }
    return '';
  };

  // 체크박스 기능
  const handleCheckboxChange = () => {
    setIsChecked(prev => !prev);
    clearErrors('checked');
  };

  // 이메일 옵션 리스트
  const handleOptionClick = (email: string) => {
    email === '직접입력'
      ? setValue('selectedEmail', '')
      : setValue('selectedEmail', email);
    setIsDropdownOpen(false);
    trigger('selectedEmail');
  };

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

  return (
    <Styled.Section>
      {/* 이메일 입력 필드 */}
      <Styled.Label>이메일</Styled.Label>
      <Styled.EmailGridInputWrapper>
        <Styled.Input {...emailValid} placeholder="이메일" type="email" />
        <Styled.AtSpan>@</Styled.AtSpan>
        <Styled.OptionContainer>
          <Styled.DotContainer>
            <Styled.Input
              {...selectedEmail}
              placeholder="선택해주세요"
              type="email"
            />
            <Styled.Dot onClick={() => setIsDropdownOpen(prev => !prev)} />
          </Styled.DotContainer>
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
        </Styled.OptionContainer>
      </Styled.EmailGridInputWrapper>
      <Styled.ErrorText>
        {getFirstErrorMessage(errors.email || errors.selectedEmail)}
      </Styled.ErrorText>
      <FormButton
        color="#BBBBBB"
        label="이메일 인증하기"
        backgroundColor="#F7F8FA"
        borderColor="#000000"
      />

      {/* 비밀번호 입력 필드 */}
      <InputField
        label="비밀번호"
        subText={
          <>
            영문, 숫자를 포함한 8자 이상의
            <br />
            비밀번호를 입력해주세요.
          </>
        }
        placeholder="이름을 입력해주세요"
        inputProps={passwordValid}
        error={errors?.password?.message}
        type="password"
      />
      <InputField
        label="비밀번호 확인"
        placeholder="비밀번호 확인"
        inputProps={passwordConfirm}
        error={errors?.passwordConfirm?.message}
        type="password"
      />

      {/* 이름 입력 필드 */}
      <InputField
        label="이름"
        placeholder="이름을 입력해주세요"
        inputProps={nameValid}
        error={errors?.name?.message}
      />

      {/* 전화번호 입력 필드 */}
      <InputField
        label="전화번호"
        placeholder="‘-’를 제외한 휴대폰 11자리"
        inputProps={phoneValid}
        error={errors?.phone?.message}
      />

      {/* 주소 입력 필드 */}
      <Styled.InputWrapper>
        <Styled.Label>주소</Styled.Label>
        <Styled.AddressGridInputWrapper>
          <Styled.Input {...postCodeValid} readOnly placeholder="우편번호" />
          <Styled.PostButton onClick={handleClick}>
            우편번호 찾기
          </Styled.PostButton>
        </Styled.AddressGridInputWrapper>
        <Styled.Input {...basicAddressValid} placeholder="기본주소" />
        <Styled.Gap />
        <Styled.Input {...detailaAddressValid} placeholder="상세주소" />
      </Styled.InputWrapper>
      <Styled.ErrorText>
        {getFirstErrorMessage(
          errors.postCode || errors.basicAddress || errors.detailAddress,
        )}
      </Styled.ErrorText>

      {/* 닉네임 입력 필드 */}
      <InputField
        label="닉네임"
        subText="다른유저와 겹치지 않도록 입력해주세요.(2~15자)"
        placeholder="닉네임"
        inputProps={nicknameValid}
        error={errors?.nickname?.message}
      />

      {/* 약관 동의 필드 */}
      <Styled.InputWrapper>
        <Styled.Label>약관동의</Styled.Label>
        <Styled.CheckboxWrapper>
          <Styled.Checkbox
            {...checkBoxValid}
            type="checkbox"
            value={isChecked ? 'true' : 'false'}
            onChange={handleCheckboxChange}
          />
          <Styled.CheckboxLabel>전체동의</Styled.CheckboxLabel>
        </Styled.CheckboxWrapper>
        <Styled.ErrorText>{errors?.checked?.message}</Styled.ErrorText>
      </Styled.InputWrapper>
      <Styled.Gap />

      {/* 회원가입 버튼 */}
      <FormButton
        color={theme.colors.gray}
        label="회원가입하기"
        backgroundColor="#F7F8FA"
        borderColor={theme.colors.black}
        onClick={handleSubmit(() => {
          console.log('회원가입 성공'); // 임시
        })}
      />
    </Styled.Section>
  );
};

export default InputGroup;
