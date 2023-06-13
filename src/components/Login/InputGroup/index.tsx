import React from 'react';
import { Styled } from '../styles';
import FormButton from '@components/Register/FormButton';

const InputGroup = () => {
  return (
    <>
      <Styled.InputWrapper>
        <Styled.LoginInput type="email" placeholder="이메일" />
        <Styled.LoginInput type="password" placeholder="비밀번호" />
        <FormButton label="로그인" backgroundColor="#D9D9D9" />
      </Styled.InputWrapper>
    </>
  );
};

export default InputGroup;
