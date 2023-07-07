// error message
export enum ErrorText {
  EmailRequired = '이메일을 확인해주세요.',
  PasswordRequired = '비밀번호를 확인해주세요.',
  LoginFailed = '이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.',
}

// styles
export interface StyleProps {
  size: number;
  color: string;
  weight?: number;
}

// 로그인 API
export interface LoginUserProps {
  email: string;
  password: string;
}
