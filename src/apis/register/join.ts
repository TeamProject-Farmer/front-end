import request from '../base';

// 회원가입 API
export const getJoin = async (
  email,
  password,
  pwcheck,
  username,
  ph,
  address,
  nickname,
) => {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('pwcheck', pwcheck);
    formData.append('username', username);
    formData.append('ph', ph);
    formData.append('address', address);
    formData.append('nickname', nickname);

    const response = await request({
      method: 'POST',
      url: '/member/join/membership',
      data: formData,
    });

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
