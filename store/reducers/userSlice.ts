import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from 'src/types/redux/types';

const initialState: UserState = {
  socialId: '', // 소셜로그인 유저만
  email: '',
  nickname: '',
  point: 0,
  grade: '',
  role: '',
  cumulativeAmount: 0,
  memberCoupon: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    setUserNickname: (state, action) => {
      return {
        ...state,
        nickname: action.payload,
      };
    },
    clearUser: state => {
      return initialState;
    },
  },
});

export const { setUser, setUserNickname, clearUser } = userSlice.actions;
export default userSlice;
