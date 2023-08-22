import axios from 'axios';
import store from '../../store/index';
import { setAccessToken, setRefreshToken } from '../../store/index';
import { postMemberRefresh } from './login/login';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
});

request.interceptors.request.use(
  config => {
    try {
      const accessToken = store.getState().user.accessToken;
      const refreshToken = store.getState().user.refreshToken;
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    } catch (error) {
      console.error(error);
      return config;
    }
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  },
);

// 토큰 재발급 응답 인터셉터 설정
request.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    const status = error.response?.status;

    // 401 에러 처리 (토큰 만료 등)
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 중복 재시도를 방지하기 위해 요청 객체에 _retry 속성 추가

      try {
        // 토큰을 재발급
        const state = store.getState();
        const refreshToken = state.user.refreshToken;

        const newToken = await postMemberRefresh(refreshToken);

        // 재발급 받은 토큰을 저장합니다.
        setAccessToken(newToken.accessToken);
        setRefreshToken(newToken.refreshToken);

        // 재발급한 토큰을 요청 헤더에 포함
        originalRequest.headers.Authorization = `Bearer ${newToken.accessToken}`;

        // 기존 요청을 다시 시도
        return request(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  response => {
    const res = response;
    return res;
  },

  error => {
    return Promise.reject(error);
  },
);

export default request;
