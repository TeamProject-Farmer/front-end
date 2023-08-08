import { createSlice } from '@reduxjs/toolkit';

const productIdSlice = createSlice({
  name: 'productId',
  initialState: 1,
  reducers: {
    setProductId: (state, action: { payload: number}) => {
      console.log("action.payload")
      console.log(action.payload)
      console.log(state)
      console.log(typeof action.payload)
      action.payload ? state = action.payload: state;
      return state;
    },
    
  }
});

export const {setProductId} = productIdSlice.actions;
export default productIdSlice.reducer;