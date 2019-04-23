import * as Util from '../util/util';

export const RECEIVE_ALLUSERS = 'RECEIVE_ALLUSERS';
export const RECEIVE_USERACTIVITY = 'RECEIVE_USERACTIVITY';

export const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALLUSERS,
    users
  }
}

export const fetchAllUsers = () => dispatch => {
  return Util.getAllUsers()
    .then(res => {
      return dispatch(receiveAllUsers(res.data.users))
    })
    .catch(err => {
      console.log(err);
      
    })
}

export const receiveUserActivity = activity => {
  return {
    type: RECEIVE_USERACTIVITY,
    activity
  }
}

export const fetchUserActivity = user_id => dispatch => {
  return Util.getActivityPerUser(user_id)
  .then(res => {
    return dispatch(receiveUserActivity(res.data.data))
  })
  .catch(err => console.log(Error))
}
