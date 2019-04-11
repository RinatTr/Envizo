import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DataReducer from './DataReducer';
import GoalsReducer from './GoalsReducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  data: DataReducer,
  goals: GoalsReducer
})

export default RootReducer;
