import * as Util from '../util/util';

export const RECEIVE_ALLSUBSCRIPTIONS = 'RECEIVE_ALLSUBSCRIPTIONS'


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