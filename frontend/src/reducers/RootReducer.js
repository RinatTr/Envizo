import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DataReducer from './DataReducer';
import GoalsReducer from './GoalsReducer';
import SubscriptionsReducer from './SubscriptionsReducer';
import UserReducer from './UserReducer'
import CommunityReducer from './CommunityReducer';
import activityReducer from './ActivityReducer';


const RootReducer = combineReducers({
  auth: AuthReducer,
  data: DataReducer,
  goals: GoalsReducer,
  subscriptions: SubscriptionsReducer,
  users: UserReducer,
  activity: CommunityReducer,
  userActivity: activityReducer,
})

export default RootReducer;
