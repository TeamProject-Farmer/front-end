import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'isLoggedIn',
  initialState: false,
  reducers: {
    setIsLoggedIn: () => {
      return true;
    },
  },
});

export const { setIsLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;
