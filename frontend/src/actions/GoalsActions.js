import * as Util from '../util/util';

export const RECEIVE_ALLGOALS = 'RECEIVE_ALLGOALS';
export const RECEIVE_SUBMISSIONS_PER_GOAL = 'RECEIVE_SUBMISSIONS_PER_GOAL';
export const RECEIVE_SUBSCRIPTIONS_PER_GOAL = 'RECEIVE_SUBSCRIPTIONS_PER_GOAL';

export const receiveAllGoals = goals => {
  return {
    type: RECEIVE_ALLGOALS,
    goals
  }
}

export const receiveSubmissionsPerGoal = (submissions) => {
  return {
    type: RECEIVE_SUBMISSIONS_PER_GOAL,
    submissions
  }
}
export const receiveSubscriptionsPerGoal = (subscriptions) => {
  return {
    type: RECEIVE_SUBSCRIPTIONS_PER_GOAL,
    subscriptions
  }
}

export const fetchAllGoals = () => dispatch => {
  return Util.getAllGoals()
  .then(res => {
    return dispatch(receiveAllGoals(res.data))
  })
  .catch(err => console.log(err));
}

export const fetchSubmissionsPerGoal = (goalId) => dispatch => {
  return Util.getAllSubmissionsPerGoal(goalId)
              .then(res => {
                return dispatch(receiveSubmissionsPerGoal(res.data.submissions))
              })
              .catch(err => console.log(err))
}
export const fetchSubscriptionsPerGoal = (goalId) => dispatch => {
  return Util.getAllSubscriptionsPerGoal(goalId)
              .then(res => {
                return dispatch(receiveSubscriptionsPerGoal(res.data.subscriptions))
              })
              .catch(err => console.log(err))
}
