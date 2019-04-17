import * as Util from '../util/util';

export const RECEIVE_ALLUSERS = 'RECEIVE_ALLUSERS';
export const RECEIVE_ALLACTIVITIESPERUSER = 'RECEIVE_ALLACTIVITIESPERUSER';

export const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALLUSERS,
    users
  }
}

export const receiveAllActivitiesPerUser = activities => {
  return {
    type: RECEIVE_ALLACTIVITIESPERUSER,
    activities
  }
}

export const fetchAllUsers = () => dispatch => {
  return Util.getAllUsers()
  .then(res => {
    return dispatch(receiveAllUsers(res.data))
  })
  .catch(err => console.log(err));
}

export const fetchAllActivitiesPerUser = (id) => dispatch => {
  return Util.getActivityPerUser(id)
  .then(res => {
    return dispatch(receiveAllActivitiesPerUser(res.data))
  })
  .catch(err => console.log(err));
}
