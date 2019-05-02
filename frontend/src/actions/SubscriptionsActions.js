import * as Util from '../util/util';

import axios from 'axios';

export const RECEIVE_ALLSUBSCRIPTIONS = 'RECEIVE_ALLSUBSCRIPTIONS';
export const RECEIVE_ALLSUBSCRIPTIONS_FORAUSER = 'RECEIVE_ALLSUBSCRIPTIONS_FORAUSER';
export const RECEIVE_ALLSUBS_PER_COMM = 'RECEIVE_ALLSUBS_PER_COMM';


export const recieveAllSubscriptions = subscriptions => {
  return {
    type: RECEIVE_ALLSUBSCRIPTIONS,
    subscriptions
  }
}
export const receiveSubscriptionsPerComm = subscriptions => {
  return {
    type: RECEIVE_ALLSUBS_PER_COMM,
    //obj with goal_id as keys
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
    return dispatch(recieveAllSubscriptionsForAUser(res.data))
  })
  .catch(err => console.log(err))
}

export const fetchAllSubscriptionsPerComm = (comm_id) => dispatch => {
  Util.getAllGoalsPerCommunity(comm_id)
    .then(res => {
      let promises = [];
      res.data.data.forEach(goal => {
        let req = axios({
          url:`/subscriptions/goal/${goal.id}`
        })
        promises.push(req)
      })
      return Promise.all(promises)
              .then(res => {
                console.log(res);
                let subObj = {}
                //res in an array of responses
                res.forEach((promise, i ) => {
                  if(promise.data.subscriptions.length) {
                    subObj[promise.data.subscriptions[i].goal_id] = promise.data.subscriptions
                  }
                })
                return dispatch(receiveSubscriptionsPerComm(subObj))
              })

    })

}
