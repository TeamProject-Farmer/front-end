import axios from 'axios';
import { RegisterData } from 'src/types/register/types';

// 회원가입 API
export const getJoin = async ({ email, password, nickname }: RegisterData) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('nickname', nickname);

  return axios.post('/main/join/membership', formData);
};
