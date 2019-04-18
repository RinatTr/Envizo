import { RECEIVE_ALLSUBSCRIPTIONS } from '../actions/SubscriptionsActions'

const SubscriptionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALLSUBSCRIPTIONS: 
      return { ...oldState, subscriptions: action.subscriptions}
    default: 
      return oldState;
  }
}

export default SubscriptionReducer;