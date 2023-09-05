import axios from 'axios';
import validateTokens from 'src/utils/token/validateTokens';
import renewTokens from 'src/utils/token/getNewTokens';
import { getTokens } from 'src/utils/token/token';
import { getCookie } from 'src/utils/cookie';

export const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

const request = axios.create({
  baseURL: BASE_URL,
});

/**
 * access O && refresh O -> 문제 없음
 * access X && refresh O -> refreshToken 으로 accessToken 갱신하기
 * access O && refresh X -> 로그인화면으로 redirect
 * access X && refresh X -> 로그인화면으로 redirect
 */

request.interceptors.request.use(
  async config => {
    // console.log('인터셉터 탄다');
    // const { accessToken } = await validateTokens();

    const { accessToken, refreshToken } = getTokens();

    if (!refreshToken) throw new Error('로그인화면으로보내야함');
    if (!accessToken) {
      // const tokens = await renewTokens(); // 새걸로 갱신
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
    // console.log('인터셉터 탄다');
    // const accessToken = getToken();
    // const refreshToken = getCookie('refreshToken');
    // if (!accessToken && refreshToken) {
    //   console.log('로그인 유지');
    //   // const { accessToken } = await getNewTokens();
    //   config.headers['Authorization'] = `Bearer ${accessToken}`;
    // }
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
        console.log('인터셉터1');
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

// accessToken 없을 때
// request.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async error => {
//     const originalRequest = error.config;
//     const status = error.response?.status;
//     if (status === 500 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         console.log('토큰이 없어요');
//         const token = await renewTokens();
//         originalRequest.headers.Authorization = `Bearer ${token.accessToken}`;
//         return request(originalRequest);
//       } catch (err) {
//         return Promise.reject(err);
//       }
//     }
//     return Promise.reject(error);
//   },
// );

export default request;
