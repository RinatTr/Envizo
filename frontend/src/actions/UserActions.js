import * as Util from '../util/util';

export const RECEIVE_ALLUSERS = 'RECEIVE_ALLUSERS'

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