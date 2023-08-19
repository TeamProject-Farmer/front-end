import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartListProps } from 'src/types/mypage/types';

const initialState: CartListProps[] = [];

const selectedCartSlice = createSlice({
  name: 'selectedCart',
  initialState,
  reducers: {
    setSelectedCart: (state, action: PayloadAction<CartListProps[]>) => {
      return action.payload;
    },
    clearSelectedCart: () => {
      return initialState;
    },
  },
});

export const { clearSelectedCart, setSelectedCart } = selectedCartSlice.actions;
export default selectedCartSlice.reducer;
