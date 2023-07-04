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
import { UserState } from 'src/types/redux/types';
import userSlice from './reducers/userSlice';

export interface RootState {
  user: UserState;
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

export const wrapper = createWrapper<Store<RootState>>(() => store);

export const persistor = persistStore(store);
