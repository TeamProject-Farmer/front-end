import { LoginUserProps } from 'src/types/login/types';
import request from '../base';

export const getLogin = async ({ email, password }: LoginUserProps) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  return request.post('/main/login', formData);
};
