import { RECEIVE_ALLGOALS } from '../actions/GoalsActions';
import { RECEIVE_SUBSCRIPTIONS_PER_GOAL } from '../actions/GoalsActions';
import { RECEIVE_SUBMISSIONS_PER_GOAL } from '../actions/GoalsActions';

const GoalsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALLGOALS:
      return { ...oldState, goals: action.goals}
    case RECEIVE_SUBMISSIONS_PER_GOAL:
      return { ...oldState, submissions: action.submissions}
    case RECEIVE_SUBSCRIPTIONS_PER_GOAL:
      return { ...oldState, subscriptions: action.subscriptions}
    default:
      return oldState;
  }
}

export default GoalsReducer;
