import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    setToken: (state, action) => {
      return action.payload;
    },
    clearToken: state => {
      return '';
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice;
