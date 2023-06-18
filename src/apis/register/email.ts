import request from '../base';

// 이메일 인증 코드 발송 API
export const emailVerification = async (email: string) => {
  try {
    const formData = new FormData();
    formData.append('email', email);

    const response = await request({
      method: 'POST',
      url: '/member/join/mail',
      data: formData,
    });

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

// 이메일 인증 확인 API
export const emailCheck = async (email: string) => {
  return request({
    url: `/member/join/mail/check?memberEmail=${email}`,
  });
};
