import axios from 'axios';
import { postMemberRefresh } from './login/login';
import setUser from 'src/utils/login/setUser';
import { setCookie, getCookie, removeCookie } from 'src/utils/cookie';
// import { setToken } from 'store/reducers/tokenSlice';
import { getToken, setToken } from 'src/utils/login/setToken';
import { validatingTokens } from './order/order';

export const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;
const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.request.use(
  async config => {
    // const accessToken = store.getState().token;

    const { accessToken } = await validatingTokens();

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

// 로그인 유지
request.interceptors.request.use(
  async config => {
    const accessToken = getToken();
    const refreshToken = getCookie('refreshToken');

    if (!accessToken && refreshToken) {
      try {
        console.log('로그인 유지 working');
        const refreshData = await postMemberRefresh(refreshToken);
        const userInfo = {
          socialId: refreshData.socialId,
          email: refreshData.email,
          nickname: refreshData.nickname,
          point: refreshData.point,
          grade: refreshData.grade,
          role: refreshData.role,
          cumulativeAmount: refreshData.cumulativeAmount,
          memberCoupon: refreshData.memberCoupon,
        };

        setUser(userInfo);
        setToken(refreshData.accessToken);
        setCookie('refreshToken', refreshData.refreshToken);

        config.headers['Authorization'] = `Bearer ${refreshData.accessToken}`;
        return config;
      } catch (error) {
        return config;
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
        console.log('토큰 만료시');
        const refreshToken = getCookie('refreshToken');
        const refreshData = await postMemberRefresh(refreshToken);
        const userInfo = {
          socialId: refreshData.socialId,
          email: refreshData.email,
          nickname: refreshData.nickname,
          point: refreshData.point,
          grade: refreshData.grade,
          role: refreshData.role,
          cumulativeAmount: refreshData.cumulativeAmount,
          memberCoupon: refreshData.memberCoupon,
        };

        setUser(userInfo);
        setToken(refreshData.accessToken);
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

// accessToken이 없을 때
request.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log(error.response);
    const refreshToken = getCookie('refreshToken');
    const errorMsg = error.response.data.message;
    if (errorMsg === '토큰을 다시 확인해주세요') {
      try {
        console.log('토큰 없을 때');
        const refreshData = await postMemberRefresh(refreshToken);
        const userInfo = {
          socialId: refreshData.socialId,
          email: refreshData.email,
          nickname: refreshData.nickname,
          point: refreshData.point,
          grade: refreshData.grade,
          role: refreshData.role,
          cumulativeAmount: refreshData.cumulativeAmount,
          memberCoupon: refreshData.memberCoupon,
        };

        setUser(userInfo);
        setToken(refreshData.accessToken);
        setCookie('refreshToken', refreshData.refreshToken);

        error.config.headers[
          'Authorization'
        ] = `Bearer ${refreshData.accessToken}`;
        return error;
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
    console.log('error', error);
    const errorMsg = error.response.data.message;
    if (errorMsg === '회원이 존재하지 않습니다.') {
      try {
        // removeCookie('refreshToken');
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export default request;
