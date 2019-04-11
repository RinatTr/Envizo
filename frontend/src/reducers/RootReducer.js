import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DataReducer from './DataReducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  data: DataReducer
})

export default RootReducer;
