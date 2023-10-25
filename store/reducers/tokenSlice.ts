import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
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
