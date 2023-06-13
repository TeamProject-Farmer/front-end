import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { UseFormRegisterReturn } from 'react-hook-form';

// form types
export interface IAuthForm {
  email: string;
  selectedEmail: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
  postCode: string;
  basicAddress: string;
  detailAddress: string;
  nickname: string;
  checked: boolean;
}

// input fields types
export interface InputProps {
  label: string;
  inputProps: UseFormRegisterReturn;
  error: string | null;
  placeholder: string;
  subText?: string | ReactJSXElement;
  type?: string;
}
