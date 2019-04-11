import {NEW_USER, LOG_IN, CURRENT_USER,} from '../actions/AuthActions';
import Auth  from '../util/Auth.js'

const initialState = {
  user: {},
  isLoggedIn: null,
  userId: null,
  username:null,
  email:"",
  currentUser: {
  img_url:"https://bloximages.newyork1.vip.townnews.com/kentwired.com/content/tncms/assets/v3/editorial/f/95/f95384b0-edfc-59b2-8b1e-4a6f2c3bc61c/52c5029f44428.image.jpg"
  }
}

const AuthReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case NEW_USER:
    //user refers to the payload
      return {
        ...state,
        user :action.user
      }
    case LOG_IN:

      return {
        ...state,
        userId: +Auth.getToken(),
        username:action.payload.id,
        isLoggedIn:Auth.isUserAuthenticated()
      }
    case CURRENT_USER:
      return {
        ...state,
        currentUser:action.payload
      }
    default:
      return state
  }
}

export default AuthReducer
