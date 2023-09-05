let accessToken = '';

export const setToken = (token: string) => {
  accessToken = token;
};

export const getToken = () => {
  return accessToken;
};
