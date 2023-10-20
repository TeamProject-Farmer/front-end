import axios from 'axios';
import renewTokens from 'src/utils/token/renewTokens';
import { getTokens } from 'src/utils/token/token';
import { useQueryClient } from '@tanstack/react-query';

export const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.request.use(
  async config => {
    const { accessToken, refreshToken } = getTokens();

    if (!refreshToken) {
      window.location.href = 'https://farmer-shop.vercel.app/login';
      return config;
    }

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

// refreshToken 만료시
request.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log('api error', error);
    const status = error.response?.status;
    const message = error.response?.data.message;

    if (status === 500 && message === '회원이 존재하지 않습니다.') {
      document.cookie = 'refreshToken=; expires=0; path=/;';
      window.location.href = 'https://farmer-shop.vercel.app/login';

      const queryClient = useQueryClient();
      queryClient.clear();
    }
    return Promise.reject(error);
  },
);

export default request;
