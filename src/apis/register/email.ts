import axios from 'axios';

// 이메일 인증 코드 발송 API
export const emailVerification = async (email: string) => {
  const formData = new FormData();
  formData.append('email', email);

  return axios.post('/main/join/mail', formData);
};

// 이메일 인증 확인 API
export const emailCheck = async (email: string) => {
  return axios({
    url: `/main/join/mail/check?memberEmail=${email}`,
  });
};
