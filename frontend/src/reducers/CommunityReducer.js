import { RECEIVE_ALLACTIVITY_FORACOMMUNITY } from '../actions/CommunityAction'

const CommunityReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALLACTIVITY_FORACOMMUNITY:
    return action.activity.activity
    default:
    return oldState;
  }
}

export default CommunityReducer;
