import { getTokens } from './token';
import { getCookie } from '../cookie';

export const validateTokens = async () => {
  const accessToken = getTokens();
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) throw new Error('리프레시 토큰이 없어요');
  if (accessToken && refreshToken) return { accessToken, refreshToken };
};

export default validateTokens;
