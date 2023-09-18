import { setToken } from './token';
import { getCookie, setCookie } from '../cookie';
import { postMemberRefresh } from 'src/apis/login/login';

const renewTokens = async () => {
  const refreshToken = getCookie('refreshToken');

  const response = await postMemberRefresh(refreshToken);

  const newAccessToken = response.accessToken;
  const newRefreshToken = response.refreshToken;

  setToken(newAccessToken);
  setCookie('refreshToken', newRefreshToken);
  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};

export default renewTokens;
