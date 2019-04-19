import { RECEIVE_ALLUSERS } from '../actions/UserActions';

const UserReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALLUSERS:
      return [ ...oldState, ...action.users]
    default:
      return oldState;
  }
}

export default UserReducer;