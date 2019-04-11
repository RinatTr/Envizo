import * as Util from '../util/util';

export const RECEIVE_TONNAGE = "RECEIVE_TONNAGE";

export const receiveTonnage = tonnage => {
  return {
    type: RECEIVE_TONNAGE,
    tonnage
  }
}

export const fetchTonnage = () => dispatch => { // thunk is expecting a function not an action. action is sent to reducer, hence wrapped in another function.
  return Util.getTonnage() //create axios for tonnage
            .then(res => {
              return dispatch(receiveTonnage(res.data)) //key into axios response ..
            })
            .catch(err => {
              console.log(err)
            })
};
