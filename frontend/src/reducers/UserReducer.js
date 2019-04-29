import { RECEIVE_ALLUSERS, RECEIVE_USERACTIVITY } from '../actions/UserActions';

const UserReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALLUSERS:
      return {...oldState, users: action.users}
    case RECEIVE_USERACTIVITY:
      return [...oldState, ...action.activity]
    default:
      return oldState;
  }
}

export default UserReducer;