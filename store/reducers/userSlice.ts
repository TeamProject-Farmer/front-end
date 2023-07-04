import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from 'src/types/redux/types';

const initialState: UserState = {
  email: '',
  username: '',
  zipCode: 0,
  address: '',
  detailAddress: '',
  ph: '',
  nickname: '',
  point: 0,
  grade: '',
  role: '',
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
