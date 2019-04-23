import { RECEIVE_ALLGOALS } from '../actions/GoalsActions';
import { RECEIVE_SUBSCRIPTIONS_PER_GOAL } from '../actions/GoalsActions';
import { RECEIVE_SUBMISSIONS_PER_GOAL } from '../actions/GoalsActions';
import { RECEIVE_ALLGOALS_PER_COMM } from '../actions/GoalActions';
import { RECEIVE_ALLUSERS_PER_GOAL } from '../actions/GoalActions';

//description splitter, it splits the string into description, initiative and slogan
const normalizeDescription = (description) => {
 let arr = (description).split('@$'),
  obj = {
   description: arr[0],
   initiative: arr[1],
   slogan: arr[2]
 }
 return obj
}

const GoalsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALLGOALS:
      action.goals.data.forEach(goal => { let normDesc = normalizeDescription(goal.description)
                                                          goal.description = normDesc })
      return { ...oldState, goals: action.goals}
    case RECEIVE_SUBMISSIONS_PER_GOAL:
      return { ...oldState, submissions: action.submissions}
    case RECEIVE_SUBSCRIPTIONS_PER_GOAL:
      action.subscriptions.forEach(goal => { let normDesc = normalizeDescription(goal.description)
                                                          goal.description = normDesc })
      return { ...oldState, subscriptions: action.subscriptions}

    case RECEIVE_ALLGOALS_PER_COMM:
      return { ...oldState, goalsComm: action.goalsComm }

    case RECEIVE_ALLUSERS_PER_GOAL:
      return { ...oldState, goalUsers: action.goalUsers }
    default:
      return oldState;
  }
}

export default GoalsReducer;
