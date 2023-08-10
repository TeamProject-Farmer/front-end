import axios from 'axios';
import store from '../../store/index';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
});

request.interceptors.request.use(
  config => {
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
    console.error(error);
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
