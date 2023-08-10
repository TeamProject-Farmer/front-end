import { createSlice } from '@reduxjs/toolkit';

const bannerSlice = createSlice({
  name: 'banner',
  initialState: true,
  reducers: {
    setIsBannerClosed: () => {
      return false;
    },
  },
});

export const { setIsBannerClosed } = bannerSlice.actions;
export default bannerSlice.reducer;
