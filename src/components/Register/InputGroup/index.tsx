import React, { useState } from 'react';
import theme from 'src/styles/theme';
import { FieldError, useForm } from 'react-hook-form';
import { emailOptions } from 'src/utils/register/emailListUtil';
import {
  FieldName,
  IAuthForm,
  RegisterData,
  Validate,
} from 'src/types/register/types';
import FormButton from '../FormButton';
import Styled from '../styles';
import InputField from '../InputField';
import {
  requiredErrorMessage,
  validateNickname,
  validatePassword,
} from 'src/utils/register/formUtil';
import { emailCheck, emailVerification } from 'src/apis/register/email';
import { getJoin } from 'src/apis/register/join';
import { scrollToTop } from 'src/utils/register/scrollUp';
import { useRouter } from 'next/router';

const InputGroup = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  // react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    clearErrors,
    setValue,
    trigger,
    watch,
    setError,
  } = useForm<IAuthForm>({
    mode: 'onChange',
  });

  // email 변수로 할당해주기 (example + @ example.com)
  const email = `${getValues().email}@${getValues().selectedEmail}`;

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

  // validation
  const emailValid = useFormValidation('email');
  const selectedEmail = useFormValidation('selectedEmail');
  const nicknameValid = useFormValidation('nickname', validateNickname);
  const checkBoxValid = useFormValidation('checked');
  const passwordValid = useFormValidation('password', validatePassword);
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
    setValue('selectedEmail', email);
    setIsDropdownOpen(false);
    trigger('selectedEmail');
  };

  // 카카오 postcode 기능
  // const open = useDaumPostcodePopup(postcodeScriptUrl);

  // const handleComplete = (data: DaumPostcodeData) => {
  //   let fullAddress = data.address;
  //   let extraAddress = '';

  //   if (data.addressType === 'R') {
  //     if (data.bname !== '') {
  //       extraAddress += data.bname;
  //     }
  //     if (data.buildingName !== '') {
  //       extraAddress +=
  //         extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
  //     }
  //     fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
  //   }
  //   setValue('postCode', data.zonecode);
  //   setValue('basicAddress', fullAddress);
  //   clearErrors('postCode');
  //   clearErrors('basicAddress');
  // };

  // const handleClick = () => {
  //   open({
  //     onComplete: handleComplete,
  //     height: 500,
  //     top: (window.innerHeight - 500) / 2,
  //     left: (window.innerWidth - 500) / 2,
  //   });
  // };

  // 이메일 인증 발송
  const handleSendEmail = async () => {
    try {
      const res = await emailVerification(email);
      alert('인증 메일이 발송되었습니다.');
      console.log(res.data);
    } catch (error) {
      setError('email', { message: '이미 인증된 메일입니다.' });
    }
  };

  // 회원가입
  const handleJoin = async (joinData: RegisterData) => {
    try {
      await getJoin(joinData);
    } catch (error) {
      // 닉네임 중복 검사
      const res = error.response.data;
      res.message === '해당 닉네임이 존재합니다.'
        ? setError('nickname', { message: '이미 존재하는 닉네임입니다.' })
        : console.log(res);
    }
  };

  // 이메일 인증 확인
  const handleEmailCheck = async () => {
    try {
      const response = await emailCheck(email);
      // 인증 확인 성공시 회원가입 API
      if (response.data === 'DONE') {
        const joinData = {
          email,
          password: getValues().password,
          nickname: getValues().nickname,
        };
        await handleJoin(joinData);
        router.push('/login');
      }
    } catch (error) {
      console.error(error);
      setError('email', { message: '이메일 인증을 확인해주세요.' });
      scrollToTop();
    }
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
              readOnly
              style={{ cursor: 'pointer' }}
              onClick={() => setIsDropdownOpen(prev => !prev)}
            />
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
        color={theme.colors.white}
        label="이메일 인증하기"
        backgroundColor={theme.colors.green1}
        disabled={!watch('email') || !watch('selectedEmail')} // email 미입력시 비활성화
        onClick={handleSendEmail}
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

      {/* 닉네임 입력 필드 */}
      <InputField
        label="닉네임"
        subText="다른유저와 겹치지 않도록 입력해주세요.(2~10자)"
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
        color={theme.colors.white}
        label="회원가입하기"
        backgroundColor={theme.colors.green1}
        onClick={handleSubmit(() => {
          handleEmailCheck();
        })}
      />
    </Styled.Section>
  );
};

export default InputGroup;
