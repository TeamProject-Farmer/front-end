import React from 'react';
import { Styled } from '../styles';
import { useSelector } from 'react-redux';
import { ProfileEditComponentProps } from 'src/types/mypage/types';
import {
  validateNickname,
  validatePassword,
} from 'src/utils/register/formUtil';
import { passwordText, socialDisabled } from 'src/utils/mypage/editForm';
import { RootState } from 'store';
const selectUser = (state: RootState) => state.user;

const InputGroup = ({
  nickname,
  setNickname,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
  duplicate,
}: ProfileEditComponentProps) => {
  const user = useSelector(selectUser);

  const inputGroupData = [
    {
      label: '닉네임',
      edit: true,
      onchange: setNickname,
      placeholder: '변경하실 닉네임을 입력해주세요.',
      value: nickname,
      errorText: duplicate
        ? '중복된 닉네임입니다.'
        : validateNickname(nickname),
    },
    {
      label: '비밀번호',
      readOnly: user.socialId ? true : false,
      edit: user.socialId ? false : true,
      type: 'password',
      onchange: setPassword,
      value: password,
      placeholder: user.socialId ? socialDisabled : passwordText,
      errorText: validatePassword(password),
    },
    {
      label: '비밀번호 확인',
      readOnly: user.socialId ? true : false,
      edit: user.socialId ? false : true,
      type: 'password',
      value: passwordConfirm,
      onchange: setPasswordConfirm,
      placeholder: user.socialId ? socialDisabled : passwordText,
      errorText:
        password !== passwordConfirm &&
        '입력하신 비밀번호가 일치하지 않습니다.',
    },
  ];

  return (
    <Styled.InputGroup>
      {inputGroupData.map((data, index) => (
        <Styled.InputWrapper key={index}>
          <Styled.InputLabel>
            {data.label}
            {data.edit && <span>*</span>}
          </Styled.InputLabel>
          <Styled.Input
            edit={data.edit}
            readOnly={data.readOnly}
            type={data.type}
            placeholder={data.placeholder}
            onChange={e => data.onchange(e.target.value)}
            value={data.value}
          />
          <Styled.ErrorText>
            {data.value.length > 0 && data.errorText}
          </Styled.ErrorText>
        </Styled.InputWrapper>
      ))}
    </Styled.InputGroup>
  );
};

export default InputGroup;
