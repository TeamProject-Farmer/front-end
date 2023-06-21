import React from 'react';
import Styled from '../styles';
import { InputProps } from 'src/types/register/types';

const InputField = ({
  label,
  inputProps,
  error,
  placeholder,
  subText,
  type,
}: InputProps) => {
  return (
    <Styled.InputWrapper>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputSubText>{subText}</Styled.InputSubText>
      <Styled.Input {...inputProps} placeholder={placeholder} type={type} />
      <Styled.ErrorText>{error}</Styled.ErrorText>
    </Styled.InputWrapper>
  );
};

export default InputField;
