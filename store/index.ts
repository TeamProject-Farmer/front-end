import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import cartIndexSlice from './reducers/cartSlice';
import { CartState, UserState } from 'src/types/redux/types';
import { CartListProps } from 'src/types/mypage/types';
import { SelectedOrderProps } from 'src/types/shop/types';
import { OrderDataProps } from 'src/types/shop/types';
import selectedCartSlice from './reducers/selectedCartSlice';
import orderSlice from './reducers/orderSlice';
import orderDataSlice from './reducers/orderDataSlice';
import bannerSlice from './reducers/bannerSlice';
import { Category } from 'src/types/common/types';
import categorySlice from './reducers/categorySlice';

export interface RootState {
  user: UserState;
  cartIndex: CartState;
  selectedCart: CartListProps[];
  banner: boolean;
  category: Category[];
  order: SelectedOrderProps[];
  orderData: OrderDataProps[];
}

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cartIndex: cartIndexSlice,
    selectedCart: selectedCartSlice,
    banner: bannerSlice,
    category: categorySlice,
    order: orderSlice,
    orderData: orderDataSlice,
  },
});

export default store;
