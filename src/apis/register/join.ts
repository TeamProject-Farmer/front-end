import { RegisterData } from 'src/types/register/types';
import request from '../base';

// 회원가입 API
export const getJoin = async ({ email, password, nickname }: RegisterData) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('nickname', nickname);

  return request.post('/member/join/membership', formData);
};
