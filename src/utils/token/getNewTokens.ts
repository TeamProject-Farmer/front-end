import { setToken } from './token';
import { getCookie, setCookie } from '../cookie';
import { postMemberRefresh } from 'src/apis/login/login';
import setUser from '../login/setUser';

const renewTokens = async () => {
  const refreshToken = getCookie('refreshToken');

  const response = await postMemberRefresh(refreshToken);

  const newAccessToken = response.accessToken;
  const newRefreshToken = response.refreshToken;

  const userInfo = {
    socialId: response.socialId,
    email: response.email,
    nickname: response.nickname,
    point: response.point,
    grade: response.grade,
    role: response.role,
    cumulativeAmount: response.cumulativeAmount,
    memberCoupon: response.memberCoupon,
  };

  setUser(userInfo);
  setToken(newAccessToken);
  setCookie('refreshToken', newRefreshToken);
  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};

export default renewTokens;
