import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedOrderProps } from 'src/types/shop/types';

const initialState: SelectedOrderProps[] = [];

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setSelectedOrder: (state, action: PayloadAction<SelectedOrderProps[]>) => {
      return action.payload;
    },
  },
});

export const {  setSelectedOrder } = orderSlice.actions;
export default orderSlice.reducer;
