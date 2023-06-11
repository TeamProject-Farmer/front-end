import FormButton from '@components/Form/FormButton';
import SnsCircles from '@components/Form/SnsCircles';
import React, { useState } from 'react';
import theme from 'src/styles/theme';
import { FieldError, useForm } from 'react-hook-form';
import { emailOptions } from 'src/utils/emailListUtil';
import { IAuthForm } from 'src/types/registerPage';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import { Styled } from './styles';
import Header from '@components/Form/Header';
import InputGroup from '@components/Form/InputGroup';

const RegisterPage = () => {
  // const [selectedEmail, setSelectedEmail] = useState('');
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  //   getValues,
  //   clearErrors,
  //   setError,
  //   setValue,
  //   trigger,
  // } = useForm<IAuthForm>({
  //   mode: 'onChange',
  // });

  // const emailValid = register('email', {
  //   required: '필수 항목입니다.',
  // });

  // const passwordValid = register('password', {
  //   required: '필수 항목입니다.',
  //   pattern: {
  //     value: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
  //     message: '영문과 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.',
  //   },
  // });

  // const phoneValid = register('phone', {
  //   required: '필수 항목입니다.',
  //   pattern: {
  //     value: /^\d{11}$/,
  //     message: '"-"을 제외한 11자리 번호를 입력해주세요.',
  //   },
  // });

  // const passwordConfirm = register('passwordConfirm', {
  //   required: '필수 항목입니다.',
  //   validate: {
  //     matchesPassword: value =>
  //       value === getValues().password || '비밀번호가 일치하지 않습니다.',
  //   },
  // });

  // const postCodeValid = register('postCode', {
  //   required: '필수 항목입니다.',
  // });

  // const basicAddressValid = register('basicAddress', {
  //   required: '필수 항목입니다.',
  // });

  // const detailaAddressValid = register('detailAddress', {
  //   required: '필수 항목입니다.',
  // });

  // const checkBoxValid = register('checked', {
  //   validate: value => value === true || '필수 항목입니다.',
  // });

  // const getFirstErrorMessage = (error: FieldError) => {
  //   if (error) {
  //     return error.message;
  //   }
  //   return '';
  // };

  // const handleCheckboxChange = () => {
  //   setIsChecked(prev => !prev);
  //   clearErrors('checked');
  // };

  // const handleOptionClick = (email: string) => {
  //   email === '직접입력'
  //     ? setValue('selectedEmail', '')
  //     : setValue('selectedEmail', email);
  //   setIsDropdownOpen(false);
  //   trigger('selectedEmail');
  // };

  // const open = useDaumPostcodePopup(postcodeScriptUrl);

  // const handleComplete = data => {
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
  // };

  // const handleClick = () => {
  //   open({ onComplete: handleComplete });
  // };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        {/* 헤어 부분 + SNS 로그인 */}
        <Header />

        <Styled.Section>
          <InputGroup />
        </Styled.Section>

        <Styled.LoginText>
          이미 아이디가 있으신가요?<span>로그인</span>
        </Styled.LoginText>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default RegisterPage;
