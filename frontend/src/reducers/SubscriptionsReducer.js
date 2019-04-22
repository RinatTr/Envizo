import { RECEIVE_ALLSUBSCRIPTIONS, RECEIVE_ALLSUBSCRIPTIONS_FORAUSER } from '../actions/SubscriptionsActions'

const SubscriptionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALLSUBSCRIPTIONS:
      return { ...oldState, subscriptions: action.subscriptions}
    case RECEIVE_ALLSUBSCRIPTIONS_FORAUSER:
      return { ...oldState, ...action.subscriptionsUser}
    default:
      return oldState;
  }
}

export default SubscriptionReducer;
