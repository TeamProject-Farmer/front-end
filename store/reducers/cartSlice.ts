import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from 'src/types/redux/types';

const initialState: CartState = {
  idArray: [],
  allChecked: false,
};

const cartSlice = createSlice({
  name: 'cartIndex',
  initialState,
  reducers: {
    setCartIndex: (state, action: PayloadAction<{ idArray: number[] }>) => {
      state.idArray = action.payload.idArray;
    },
    setChecked: (state, action: PayloadAction<boolean>) => {
      state.allChecked = action.payload;
    },
    clearCartIndex: () => {
      return initialState;
    },
  },
});

export const { setCartIndex, clearCartIndex, setChecked } = cartSlice.actions;
export default cartSlice.reducer;
