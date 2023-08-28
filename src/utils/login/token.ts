let accessToken = null;
let refreshToken = null;

export const setTokens = (newAccessToken: string, newRefreshToken: string) => {
  accessToken = newAccessToken;
  refreshToken = newRefreshToken;
};

export const getAccessToken = () => accessToken;
export const getRefreshToken = () => refreshToken;
