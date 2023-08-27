import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from 'src/types/common/types';

const initialState: Category[] = [];

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category[]>) => {
      return action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
