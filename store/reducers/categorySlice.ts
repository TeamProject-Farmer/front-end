import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categoryState } from 'src/types/redux/types';;
import { CateId } from 'src/types/shop/types';

const initialState: categoryState = {
  name: '다육이',
  id: 1,
}

const categorySlice = createSlice({
  name: 'categoryId',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<string>) => {
      return {
        name: action.payload,
        id: CateId[action.payload],
      }
    },
    
  }
});

export const {setCategoryId} = categorySlice.actions;
export default categorySlice.reducer;