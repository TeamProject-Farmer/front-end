import request from '../base';

// 이메일 인증 코드 발송 API
export const emailVerification = async (email: string) => {
  const formData = new FormData();
  formData.append('email', email);

  return request.post('/member/join/mail', formData);
};

// 이메일 인증 확인 API
export const emailCheck = async (email: string) => {
  return request({
    url: `/member/join/mail/check?memberEmail=${email}`,
  });
};