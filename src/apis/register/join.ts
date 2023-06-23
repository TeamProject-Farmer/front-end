import { RegisterData } from 'src/types/register/types';
import request from '../base';

// 회원가입 API
export const getJoin = async ({
  email,
  password,
  nickname,
  name,
  phone,
  postCode,
  address,
  detailAddress,
}: RegisterData) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('nickname', nickname);
  formData.append('username', name);
  formData.append('ph', phone);
  formData.append('zipcode', postCode);
  formData.append('address', address);
  formData.append('detailAddress', detailAddress);

  return request.post('/member/join/membership', formData);
};
