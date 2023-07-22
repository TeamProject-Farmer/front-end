import request from '../base';
import { ProfileEditProps } from 'src/types/mypage/types';

// 마이페이지 수정 API
export const getEdit = async ({ password, nickname }: ProfileEditProps) => {
  const formData = new FormData();
  formData.append('password', password);
  formData.append('nickname', nickname);

  return await request.post('/member/mypage/profile', formData);
};
