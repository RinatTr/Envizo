import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DataReducer from './DataReducer';
import GoalsReducer from './GoalsReducer';
import SubscriptionsReducer from './SubscriptionsReducer'

const RootReducer = combineReducers({
  auth: AuthReducer,
  data: DataReducer,
  goals: GoalsReducer,
  subscriptions: SubscriptionsReducer
})

export default RootReducer;
