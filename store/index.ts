import {
  AnyAction,
  CombinedState,
  Reducer,
  Store,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import userSlice from './reducers/userSlice';
import cartIndexSlice from './reducers/cartSlice';
import bannerSlice from './reducers/bannerSlice';
import orderSlice from './reducers/orderSlice';
import categorySlice from './reducers/categorySlice';
import selectedCartSlice from './reducers/selectedCartSlice';
import orderDataSlice from './reducers/orderDataSlice';
import tokenSlice from './reducers/tokenSlice';
import { CartState, UserState, TokenState } from 'src/types/redux/types';
import { CartListProps } from 'src/types/mypage/types';
import { Category } from 'src/types/common/types';
import { SelectedOrderProps } from 'src/types/shop/types';
import { OrderDataProps } from 'src/types/shop/types';

export interface RootState {
  user: UserState;
  cartIndex: CartState;
  selectedCart: CartListProps[];
  banner: boolean;
  category: Category[];
  order: SelectedOrderProps[];
  orderData: OrderDataProps[];
  token: string;
}

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  whitelist: ['user'],
  blacklist: [
    'cartIndex',
    'selectedCart',
    'banner',
    'category',
    'order',
    'orderData',
    'tokenSlice',
  ],
};

const rootReducer = (
  state: RootState,
  action: AnyAction,
): CombinedState<RootState> => {
  if (action.type === HYDRATE) return { ...state, ...action.payload };
  const combinedReducer = combineReducers({
    user: userSlice.reducer,
    cartIndex: cartIndexSlice,
    selectedCart: selectedCartSlice,
    banner: bannerSlice,
    category: categorySlice,
    order: orderSlice,
    orderData: orderDataSlice,
    token: tokenSlice,
  });
  return combinedReducer(state, action);
};

// 이 부분은 추후 상태관리 데이터에 따라서 수정 가능여부 O
const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer as Reducer<CombinedState<RootState>, AnyAction>,
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

const store = makeStore();
export default store;

export const wrapper = createWrapper<Store<RootState>>(() => store);

export const persistor = persistStore(store);
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import userSlice from './reducers/userSlice';
// import cartIndexSlice from './reducers/cartSlice';
// import { CartState, UserState } from 'src/types/redux/types';
// import { CartListProps } from 'src/types/mypage/types';
// import { SelectedOrderProps } from 'src/types/shop/types';
// import { OrderDataProps } from 'src/types/shop/types';
// import selectedCartSlice from './reducers/selectedCartSlice';
// import orderSlice from './reducers/orderSlice';
// import orderDataSlice from './reducers/orderDataSlice';
// import bannerSlice from './reducers/bannerSlice';
// import { Category } from 'src/types/common/types';
// import categorySlice from './reducers/categorySlice';
// import storage from 'redux-persist/lib/storage';
// import { PersistConfig, persistReducer, persistStore } from 'redux-persist';

// export interface RootState {
//   user: UserState;
//   cartIndex: CartState;
//   selectedCart: CartListProps[];
//   banner: boolean;
//   category: Category[];
//   order: SelectedOrderProps[];
//   orderData: OrderDataProps[];
// }

// const persistConfig: PersistConfig<RootState> = {
//   key: 'root',
//   storage,
//   whitelist: ['user'],
//   blacklist: [
//     'cartIndex',
//     'selectedCart',
//     'banner',
//     'category',
//     'order',
//     'orderData',
//   ],
// };

// const reducers = combineReducers({
//   user: userSlice.reducer,
//   cartIndex: cartIndexSlice,
//   selectedCart: selectedCartSlice,
//   banner: bannerSlice,
//   category: categorySlice,
//   order: orderSlice,
//   orderData: orderDataSlice,
// });

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// export default store;
