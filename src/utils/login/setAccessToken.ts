import userSlice from 'store/reducers/userSlice';
import store from 'store';

const setAccessToken = (newAccessToken: string) => {
  store.dispatch(userSlice.actions.setAccessToken(newAccessToken));
};

export default setAccessToken;
