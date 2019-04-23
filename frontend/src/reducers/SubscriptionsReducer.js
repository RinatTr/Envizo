import { RECEIVE_ALLSUBSCRIPTIONS, RECEIVE_ALLSUBSCRIPTIONS_FORAUSER, RECEIVE_ALLSUBS_PER_COMM } from '../actions/SubscriptionsActions'

const SubscriptionReducer = (oldState = {
  subscripUser: []
}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALLSUBSCRIPTIONS:
      return { ...oldState, subscriptions: action.subscriptions}
    case RECEIVE_ALLSUBSCRIPTIONS_FORAUSER:
      return {...oldState, ...action.subscriptions}
    case RECEIVE_ALLSUBS_PER_COMM:
      return { ...oldState, community:action.subscriptions}
    default:
      return oldState;
  }
}

export default SubscriptionReducer;
