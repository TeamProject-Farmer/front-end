import axios from 'axios';
import validateTokens from 'src/utils/token/validateTokens';
import getNewTokens from 'src/utils/token/getNewTokens';
import { getToken } from 'src/utils/token/token';
import { getCookie } from 'src/utils/cookie';

export const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.request.use(
  async config => {
    // console.log('인터셉터 탄다');
    // const { accessToken } = await validateTokens();
    const accessToken = getToken();
    // const refreshToken = getCookie('refreshToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
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
    console.log('인터셉터 탄다');
    const accessToken = getToken();
    const refreshToken = getCookie('refreshToken');
    if (!accessToken && refreshToken) {
      console.log('로그인 유지');
      // const { accessToken } = await getNewTokens();
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
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
        const token = await getNewTokens();
        originalRequest.headers.Authorization = `Bearer ${token.accessToken}`;
        return request(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
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
    if (status === 500 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const token = await getNewTokens();
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
