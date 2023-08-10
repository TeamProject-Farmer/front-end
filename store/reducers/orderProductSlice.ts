import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartListProps } from 'src/types/mypage/types';

const initialState: CartListProps[] = [];

const orderProductSlice = createSlice({
  name: 'orderProduct',
  initialState,
  reducers: {
    setOrderProduct: (state, action: PayloadAction<CartListProps[]>) => {
      return action.payload;
    },
    clearOrderProduct: () => {
      return initialState;
    },
  },
});

export const { clearOrderProduct, setOrderProduct } = orderProductSlice.actions;
export default orderProductSlice.reducer;
