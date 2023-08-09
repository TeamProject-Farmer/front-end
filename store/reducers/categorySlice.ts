import { createSlice } from '@reduxjs/toolkit';
import { CateId } from 'src/types/shop/types';

const categorySlice = createSlice({
  name: 'categoryId',
  initialState: {
    name: '다육이',
    id: 1
  },
  reducers: {
    setCategoryId: (state, action: { payload: string}) => {
      state.name = action.payload;
      state.id = CateId[action.payload];
      return state;
    },
    
  }
});

export const {setCategoryId} = categorySlice.actions;
export default categorySlice.reducer;