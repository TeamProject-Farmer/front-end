import axios from 'axios';
import store from '../../store/index';
import { postMemberRefresh } from './login/login';
import setAccessToken from 'src/utils/login/setAccessToken';
import setUser from 'src/utils/login/setUser';
import { setCookie, getCookie } from 'src/utils/cookie';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
});

const accessToken = store.getState().user.accessToken;
const refreshToken = getCookie('refreshToken');

request.interceptors.request.use(
  async config => {
    try {
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        // 자동 로그인 유지
      } else if (!accessToken && refreshToken) {
        const refreshData = await postMemberRefresh(refreshToken);
        setUser(refreshData);
        setCookie('refreshToken', refreshData.refreshToken);
      }
      return config;
    } catch (error) {
      console.error(error);
      return config;
    }
  },
  error => {
    console.log('에러발생');
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
        const newToken = await postMemberRefresh(refreshToken);

        // 재발급 받은 토큰 저장
        setAccessToken(newToken.accessToken);
        setCookie('refreshToken', newToken.refreshToken);

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
  async config => {
    try {
      console.log('accessToken', accessToken ? true : false);
      console.log('refreshToken', refreshToken);
      return config;
    } catch (error) {
      console.error(error);
      return config;
    }
  },
  error => {
    console.log('에러발생');
    console.error(error);
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
