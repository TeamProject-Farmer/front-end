import React, { useState } from 'react';
import Styled from '../styles';
import FormButton from '@components/Register/FormButton';
import { ErrorText } from 'src/types/login/types';
import theme from '@styles/theme';
import { getLogin } from 'src/apis/login/login';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/reducers/userSlice';
import { setTokens } from 'src/utils/login/token';

const InputGroup = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  // input actions
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 로그인 성공시 API
  const handleLoginSuccess = async () => {
    try {
      const res = await getLogin({ email, password });
      const userData = res.data;
      dispatch(setUser(userData));
      setTokens(userData.accessToken, userData.refreshToken);
      router.push('/');
    } catch (err) {
      setErrorText(err.response.data);
    }
  };

  // 로그인 버튼 클릭시
  const handleLogin = async () => {
    console.log('로그인');
    // 에러 분기처리
    // 이메일 & 패스워드 둘 다 or 이메일 입력되지 않은 경우
    if ((!email && !password) || !email) {
      setErrorText(ErrorText.EmailRequired);
    }
    // 패스워드만 입력되지 않은 경우
    else if (email && !password) {
      setErrorText(ErrorText.PasswordRequired);
    } else {
      handleLoginSuccess();
    }
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
          color={theme.colors.white}
          backgroundColor={theme.colors.loginGreen}
          onClick={handleLogin}
        />
      </Styled.InputWrapper>
    </>
  );
};

export default InputGroup;
