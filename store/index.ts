import {
  AnyAction,
  CombinedState,
  Reducer,
  Store,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';
import {
  PersistConfig,
  persistReducer,
  persistStore,
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
import selectedCartSlice from './reducers/selectedCartSlice';
import orderDataSlice from './reducers/orderDataSlice';
import tokenSlice from './reducers/tokenSlice';
import { CartState, UserState } from 'src/types/redux/types';
import { CartListProps } from 'src/types/mypage/types';
import { SelectedOrderProps } from 'src/types/shop/types';
import { OrderDataProps } from 'src/types/shop/types';

export interface RootState {
  user: UserState;
  cartIndex: CartState;
  selectedCart: CartListProps[];
  banner: boolean;
  order: SelectedOrderProps[];
  orderData: OrderDataProps[];
  token: string;
}

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  whitelist: ['user', 'selectedCart', 'order'],
  blacklist: ['cartIndex', 'banner', 'orderData'],
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
    order: orderSlice,
    orderData: orderDataSlice,
    token: tokenSlice.reducer,
  });
  return combinedReducer(state, action);
};

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

export const clearUser = () => {
  store.dispatch(userSlice.actions.clearUser());
};
