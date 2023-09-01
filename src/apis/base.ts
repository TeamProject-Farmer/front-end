import axios from 'axios';
import store from '../../store/index';
import { postMemberRefresh } from './login/login';
import setUser from 'src/utils/login/setUser';
import { setCookie, getCookie, removeCookie } from 'src/utils/cookie';

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
      console.error('token error', error);
      return config;
    }
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
        const refreshToken = getCookie('refreshToken');
        const refreshData = await postMemberRefresh(refreshToken);

        setUser(refreshData);
        setCookie('refreshToken', refreshData.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${refreshData.accessToken}`;

        return request(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

// 로그인 유지

let isRefreshing = false;
request.interceptors.request.use(
  async config => {
    const refreshToken = getCookie('refreshToken');

    if (!config.headers['Authorization'] && refreshToken) {
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

// refreshToken 만료시
request.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const errorMsg = error.response.data.message;
    if (errorMsg === '회원이 존재하지 않습니다.') {
      try {
        removeCookie('refreshToken');
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
    const errorMsg = error.response.data.message;
    console.log(errorMsg);
    // if (errorMsg === '회원이 존재하지 않습니다.') {
    //   try {
    //     removeCookie('refreshToken');
    //   } catch (err) {
    //     return Promise.reject(err);
    //   }
    // }
    return Promise.reject(error);
  },
);

export default request;
