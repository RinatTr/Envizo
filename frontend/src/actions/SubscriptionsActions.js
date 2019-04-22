import * as Util from '../util/util';

export const RECEIVE_ALLSUBSCRIPTIONS = 'RECEIVE_ALLSUBSCRIPTIONS'
export const RECEIVE_ALLSUBSCRIPTIONS_FORAUSER = 'RECEIVE_ALLSUBSCRIPTIONS_FORAUSER'


export const recieveAllSubscriptions = subscriptions => {
  return {
    type: RECEIVE_ALLSUBSCRIPTIONS,
    subscriptions
  }
}

export const fetchAllSubscriptions = () => dispatch => {
  return Util.getAllSubscriptions()
  .then(res => {
    return dispatch(recieveAllSubscriptions(res.data))
  })
  .catch(err => console.log(err))
}

export const recieveAllSubscriptionsForAUser = subscriptions => {
  return {
    type: RECEIVE_ALLSUBSCRIPTIONS_FORAUSER,
    subscriptions
  }
}


export const fetchAllSubscriptionsForAUser = (user_id) => dispatch => {
  return Util.getSubscriptionsForAUser(user_id)
  .then(res => {
    console.log(res)
    return dispatch(recieveAllSubscriptionsForAUser(res.data))
  })
  .catch(err => console.log(err))
}
