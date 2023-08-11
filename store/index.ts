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
import { CartState, UserState } from 'src/types/redux/types';
import { CartListProps } from 'src/types/mypage/types';
import orderProductSlice from './reducers/orderProductSlice';
import { IOrderInfo } from 'src/types/order/types';
import bannerSlice from './reducers/bannerSlice';
import orderSlice from './reducers/orderSlice';

export interface RootState {
  user: UserState;
  cartIndex: CartState;
  orderProduct: CartListProps[];
  banner: boolean;
  orderInfo: IOrderInfo;
}

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
};

const rootReducer = (
  state: RootState,
  action: AnyAction,
): CombinedState<RootState> => {
  if (action.type === HYDRATE) return { ...state, ...action.payload };
  const combinedReducer = combineReducers({
    user: userSlice,
    cartIndex: cartIndexSlice,
    orderProduct: orderProductSlice,
    banner: bannerSlice,
    orderInfo: orderSlice,
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
