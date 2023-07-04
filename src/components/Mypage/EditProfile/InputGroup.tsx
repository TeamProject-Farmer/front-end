import React from 'react';
import { Styled } from '../styles';

// 임시 input data(아마 이메일은 받아올듯)
const inputGroupData = [
  { label: '이메일', readOnly: true, value: 'example@example.com 변경 불가능' },
  {
    label: '닉네임',
    edit: true,
    placeholder: '변경하실 닉네임을 입력해주세요.',
  },
  {
    label: '비밀번호',
    edit: true,
    placeholder: '변경하실 비밀번호를 입력해주세요.',
  },
  {
    label: '비밀번호 확인',
    edit: true,
    placeholder: '입력하신 비밀번호를 확인해주세요.',
  },
];

// 이메일과 store에서 가져오고
// 닉네임과 패스워드는 빈값으로 두기 => 사용자가 처음부터 직접 입력
const InputGroup = () => {
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
            placeholder={data.placeholder}
            value={data.value}
          />
        </Styled.InputWrapper>
      ))}
    </Styled.InputGroup>
  );
};

export default InputGroup;
