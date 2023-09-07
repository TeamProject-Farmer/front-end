import axios from 'axios';
import renewTokens from 'src/utils/token/getNewTokens';
import { getTokens } from 'src/utils/token/token';

export const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.request.use(
  async config => {
    const { accessToken, refreshToken } = getTokens();
    if (!refreshToken) throw new Error('로그인화면으로보내야함');
    if (!accessToken) {
      return await renewTokens().then(tokens => {
        config.headers['Authorization'] = `Bearer ${tokens.accessToken}`;
        return config;
      });
    }

    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  },
  error => {
    console.log('에러발생');
    console.error(error);
    return Promise.reject(error);
  },
);

request.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    console.log('에러발생');
    console.error(error);
    return Promise.reject(error);
  },
);

// accessToken 만료시
request.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    const status = error.response?.status;
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const token = await renewTokens();
        originalRequest.headers.Authorization = `Bearer ${token.accessToken}`;
        return request(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export default request;
