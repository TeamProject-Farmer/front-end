import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
  headers: {
    'Content-Type': 'multipart/form-data', // 이 부분은 백엔드 개발 type에 따라 변동 가능성 O
  },
});

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
