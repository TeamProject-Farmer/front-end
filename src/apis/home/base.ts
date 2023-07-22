import axios, { AxiosRequestConfig } from 'axios';

const API_URL = 'https://www.farmer-back.store/api';
// export const API_URL = 'http://3.39.150.186:8080';

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_URL,
};

const apiInstance = axios.create(axiosConfig);

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
export const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await apiInstance(config);
    console.log(response);
    return response.data;
  } catch (err) {
    handleErrorResponse(err);
  }
};
