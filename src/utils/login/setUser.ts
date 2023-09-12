import userSlice from 'store/reducers/userSlice';
import { UserState } from 'src/types/redux/types';
import store from 'store';

const setUser = (userData: UserState) => {
  store.dispatch(userSlice.actions.setUser(userData));
};

export default setUser;
