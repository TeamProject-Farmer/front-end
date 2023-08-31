import axios from 'axios';
import store from '../../store/index';
import { postMemberRefresh } from './login/login';
import setUser from 'src/utils/login/setUser';
import { setCookie, getCookie } from 'src/utils/cookie';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
});

request.interceptors.request.use(
  async config => {
    try {
      const accessToken = store.getState().user.accessToken;
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
        const refreshToken = getCookie('refreshToken');
        const refreshData = await postMemberRefresh(refreshToken);

        // 재발급 받은 토큰 저장
        setUser(refreshData);
        setCookie('refreshToken', refreshData.refreshToken);

        // 재발급한 토큰을 요청 헤더에 포함
        originalRequest.headers.Authorization = `Bearer ${refreshData.accessToken}`;

        // 기존 요청을 다시 시도
        return request(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

let isRefreshing = false;

request.interceptors.request.use(
  async config => {
    const accessToken = store.getState().user.accessToken;
    const refreshToken = getCookie('refreshToken');
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('isRefreshing', isRefreshing);

    if (!accessToken && refreshToken) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const refreshData = await postMemberRefresh(refreshToken);
          setUser(refreshData);
          setCookie('refreshToken', refreshData.refreshToken);
          config.headers['Authorization'] = `Bearer ${refreshData.accessToken}`;
          return config;
        } catch (error) {
          console.error(error);
          return config;
        } finally {
          isRefreshing = false;
        }
      }
    }
    return config;
  },
  error => {
    console.log('에러발생');
    console.error(error);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // const originalRequest = error.config;
    // const message = error.response.data.message;
    // const errorConsole = error;
    // console.log('errorConsole', errorConsole);
    // console.log('error message', message);
    // if (message === '회원이 존재하지 않습니다.') {
    //   //쿠키 삭제 & 로그아웃
    // }
    console.log('에러발생');
    console.error(error);
    return Promise.reject(error);
  },
);

export default request;
