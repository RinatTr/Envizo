import * as Util from '../util/util';

export const RECEIVE_ALLGOALS = 'RECEIVE_ALLGOALS';

export const receiveAllGoals = goals => {
  return {
    type: RECEIVE_ALLGOALS,
    goals
  }
}

export const fetchAllGoals = () => dispatch => {
  return Util.getAllGoals()
  .then(res => {
    // debugger
    return dispatch(receiveAllGoals(res.data))
  })
  .catch(err => console.log(err));
}