import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrderInfo } from 'src/types/order/types';

const initialState: IOrderInfo = {
  pg: 'html5_inicis',
  pay_method: 'card',
  merchant_uid: '',
  name: '',
  amount: 0,
  buyer_email: '',
  buyer_name: '',
  buyer_tel: '',
  buyer_addr: '',
  buyer_postcode: '',
};

const orderInfoSlice = createSlice({
  name: 'orderInfo',
  initialState,
  reducers: {
    updateOrderInfo: (state, action) => {
      const { fieldKey, fieldValue } = action.payload;
      return {
        ...state,
        [fieldKey]: fieldValue,
      };
    },
  },
});

export const { updateOrderInfo } = orderInfoSlice.actions;
export default orderInfoSlice.reducer;
