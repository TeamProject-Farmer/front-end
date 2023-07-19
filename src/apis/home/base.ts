import axios from 'axios';

// const API_URL = 'https://www.farmer-back.store';
export const API_URL = 'http://3.39.150.186:8080';

const apiInstance = axios.create({
  baseURL: API_URL,
});

// 에러 핸들링 함수
const handleErrorResponse = error => {
  if (error) {
    console.error('Error Status:', error.response.status);
    console.error('Error Message:', error.message);
  } else {
    console.error('Error:', error.message);
  }
};

// api 요청 함수
// export const request = async config => {
//   try {
//     const response = await apiInstance(config);
//     return response.data;
//   } catch (err) {
//     handleErrorResponse(err);
//   }
// };

export const request = axios.create({
  baseURL: API_URL,
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
    return response;
  },

  error => {
    return Promise.reject(error);
  },
);
