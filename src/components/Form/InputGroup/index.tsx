import React, { useState } from 'react';
import theme from 'src/styles/theme';
import { FieldError, useForm } from 'react-hook-form';
import { emailOptions } from 'src/utils/emailListUtil';
import { IAuthForm } from 'src/types/registerPage';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import Styled from '@components/Form/styles';
import FormButton from '../FormButton';

const InputGroup = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // react-hook-form Valid Lists
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

  const emailValid = register('email', {
    required: '필수 항목입니다.',
  });

  const selectedEmail = register('selectedEmail', {
    required: '필수 항목입니다.',
  });

  const passwordValid = register('password', {
    required: '필수 항목입니다.',
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
      message: '영문과 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.',
    },
  });

  const phoneValid = register('phone', {
    required: '필수 항목입니다.',
    pattern: {
      value: /^\d{11}$/,
      message: '"-"을 제외한 11자리 번호를 입력해주세요.',
    },
  });

  const passwordConfirm = register('passwordConfirm', {
    required: '필수 항목입니다.',
    validate: {
      matchesPassword: value =>
        value === getValues().password || '비밀번호가 일치하지 않습니다.',
    },
  });

  const nameValid = register('name', {
    required: '필수 항목입니다.',
  });

  const postCodeValid = register('postCode', {
    required: '필수 항목입니다.',
  });

  const basicAddressValid = register('basicAddress', {
    required: '필수 항목입니다.',
  });

  const detailaAddressValid = register('detailAddress', {
    required: '필수 항목입니다.',
  });

  const nicknameValid = register('nickname', {
    required: '필수 항목입니다.',
  });

  const checkBoxValid = register('checked', {
    required: '필수 항목입니다.',
  });

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

  const handleComplete = data => {
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
      <Styled.InputWrapper>
        <Styled.Label>비밀번호</Styled.Label>
        <Styled.InputSubText>
          영문, 숫자를 포함한 8자 이상의 <br /> 비밀번호를 입력해주세요.
        </Styled.InputSubText>
        <Styled.Input
          {...passwordValid}
          placeholder="비밀번호"
          type="password"
        />
        <Styled.ErrorText>{errors?.password?.message}</Styled.ErrorText>
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.Label>비밀번호 확인</Styled.Label>
        <Styled.Input
          {...passwordConfirm}
          placeholder="비밀번호 확인"
          type="password"
        />
        <Styled.ErrorText>{errors?.passwordConfirm?.message}</Styled.ErrorText>
      </Styled.InputWrapper>

      {/* 이름 입력 필드 */}
      <Styled.InputWrapper>
        <Styled.Label>이름</Styled.Label>
        <Styled.Input {...nameValid} placeholder="이름" type="text" />
      </Styled.InputWrapper>
      <Styled.ErrorText>{errors?.name?.message}</Styled.ErrorText>

      {/* 전화번호 입력 필드 */}
      <Styled.InputWrapper>
        <Styled.Label>전화번호</Styled.Label>
        <Styled.Input
          {...phoneValid}
          placeholder="‘-’를 제외한 휴대폰 11자리"
          type="text"
        />
      </Styled.InputWrapper>
      <Styled.ErrorText>{errors?.phone?.message}</Styled.ErrorText>

      {/* 주소 입력 필드 */}
      <Styled.InputWrapper>
        <Styled.Label>주소</Styled.Label>
        <Styled.AddressGridInputWrapper>
          <Styled.Input
            {...postCodeValid}
            readOnly
            type="text"
            placeholder="우편번호"
          />
          <Styled.PostButton onClick={handleClick}>
            우편번호 찾기
          </Styled.PostButton>
        </Styled.AddressGridInputWrapper>
        <Styled.Input
          {...basicAddressValid}
          type="text"
          placeholder="기본주소"
        />
        <Styled.Gap />
        <Styled.Input
          {...detailaAddressValid}
          type="text"
          placeholder="상세주소"
        />
      </Styled.InputWrapper>
      <Styled.ErrorText>
        {getFirstErrorMessage(
          errors.postCode || errors.basicAddress || errors.detailAddress,
        )}
      </Styled.ErrorText>

      {/* 닉네임 입력 필드 */}
      <Styled.InputWrapper>
        <Styled.Label>닉네임</Styled.Label>
        <Styled.InputSubText>
          다른유저와 겹치지 않도록 입력해주세요.(2~15자)
        </Styled.InputSubText>
        <Styled.Input {...nicknameValid} type="text" placeholder="닉네임" />
        <Styled.ErrorText>{errors?.nickname?.message}</Styled.ErrorText>
      </Styled.InputWrapper>

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
        borderColor="#000000"
        onClick={handleSubmit(() => {
          console.log('회원가입 성공'); // 임시
        })}
      />
    </Styled.Section>
  );
};

export default InputGroup;
