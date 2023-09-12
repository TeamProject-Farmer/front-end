import { LoginUserProps } from 'src/types/login/types';
import axios from 'axios';
import { BASE_URL } from '../base';

export const postLogin = async ({ email, password }: LoginUserProps) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  return axios.post(`${BASE_URL}/main/login`, formData);
};

export const postMemberRefresh = async (refreshToken: string) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_KEY}/member`,
    {},
    {
      headers: {
        AuthorizationRefresh: `Bearer ${refreshToken}`,
      },
    },
  );
  return response.data;
};
