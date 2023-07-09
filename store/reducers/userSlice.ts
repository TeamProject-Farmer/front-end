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
  accessToken: '',
  refreshToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearUser: state => {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
