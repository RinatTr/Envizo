import { RECEIVE_TONNAGE } from '../actions/DataActions'

const DataReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   switch (action.type) {
     case RECEIVE_TONNAGE:
      return { ...oldState, data: action.tonnage }
     default:
      return oldState
   }

}

export default DataReducer;
