import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DataReducer from './DataReducer';
import GoalsReducer from './GoalsReducer';
import SubscriptionsReducer from './SubscriptionsReducer';
import UserReducer from './UserReducer'


const RootReducer = combineReducers({
  auth: AuthReducer,
  data: DataReducer,
  goals: GoalsReducer,
  subscriptions: SubscriptionsReducer,
  users: UserReducer
})

export default RootReducer;
