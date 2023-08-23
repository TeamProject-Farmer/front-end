import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderDataProps } from 'src/types/shop/types';

const initialState: OrderDataProps[] = [];

const orderDataSlice = createSlice({
  name: 'orderData',
  initialState,
  reducers: {
    setOrderData: (state, action: PayloadAction<OrderDataProps[]>) => {
      return action.payload;
    },
  },
});

export const { setOrderData } = orderDataSlice.actions;
export default orderDataSlice.reducer;
