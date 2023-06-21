import React, { useState } from 'react';
import Styled from '../styles';
import FormButton from '@components/Register/FormButton';
import { ErrorText } from 'src/types/login/types';

const InputGroup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleLogin = () => {
    // 에러 분기처리
    // 이메일 & 패스워드 둘 다 or 이메일 입력되지 않은 경우
    if ((!email && !password) || !email) {
      setErrorText(ErrorText.EmailRequired);
    }
    // 패스워드만 입력되지 않은 경우
    else if (email && !password) {
      setErrorText(ErrorText.PasswordRequired);
    } else {
      // (값 모두 입력시)
      console.log('로그인 API');
    }
    // 여기에서 회원정보 일치 여부를 체크하는 로직 작성
    // 이 부분은 로그인 API 나오면 구체적으로 구현(error 처리 등등..)

    // (/* 회원정보가 일치하지 않는 경우 catch */) {
    //   setError(ErrorText.LoginFailed);
    // }
    // 일치하는 경우 => home으로 navigate
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Styled.InputWrapper>
        <Styled.LoginInput
          type="email"
          placeholder="이메일"
          onChange={handleEmailChange}
        />
        <Styled.LoginInput
          type="password"
          placeholder="비밀번호"
          onChange={handlePasswordChange}
        />
        <Styled.ErrorText>{errorText}</Styled.ErrorText>
        <FormButton
          label="로그인"
          backgroundColor="#D9D9D9"
          onClick={handleLogin}
        />
      </Styled.InputWrapper>
    </>
  );
};

export default InputGroup;
