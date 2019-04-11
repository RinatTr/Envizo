import { RECEIVE_ALLGOALS } from '../actions/GoalsActions';

const GoalsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALLGOALS:
      return { ...oldState, goals: action.goals}
    default:
      return oldState;
  }
}

export default GoalsReducer;