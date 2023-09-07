import { getCookie } from '../cookie';

let accessToken = '';

export const setToken = (token: string) => {
  accessToken = token;
};

export const getTokens = () => {
  const refreshToken = getCookie('refreshToken');
  return { accessToken, refreshToken };
};
