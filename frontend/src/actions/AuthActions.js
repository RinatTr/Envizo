// import * as Util from '../util.js';
import axios from 'axios'
import Auth from "../util/Auth.js"

export const NEW_USER = "NEW_USER";
export const LOG_IN = "LOG_IN";
export const CURRENT_USER = "CURRENT_USER"

//logs out the user
export const logout = () => dispatch => {
  axios
    .post("/sessions/logout")
    .then(() => {
      Auth.deauthenticateUser();
    })
    .then(() => {

      checkAuthenticateStatus();
    });
}
//checks if the user has the same id on the frontend as the user on the backend
export const checkAuthenticateStatus = () => dispatch => {


  axios
    .get("/sessions/isLoggedIn").then(user => {

    if (user.data.id === +Auth.getToken()){


      dispatch({
        type:LOG_IN,
        payload:user.data
      })

      dispatch(loadCurrent())

    } else {
      if (user.data.id) {
        logout()
      } else {
        Auth.deauthenticateUser();
      }
    }
  })

  ;
}
export const newUser = newUserData => dispatch => {
  axios
  .post("/sessions/new", newUserData)
    .then(res => {
      dispatch({
        type:NEW_USER,
        user:res
      })

      axios
      .post("/sessions/login",{username:newUserData.username, password:newUserData.password})
        .then(res => {
          Auth.authenticateUser(res.data.id);
          dispatch({
            type:LOG_IN,
            payload:res.data.id
          })
        })
      .then(()=> {
        // console.log('in new User');
        checkAuthenticateStatus()
      })
    })

}

export const logIn = logInData => dispatch => {
  axios
  .post("/sessions/login", logInData)
    .then(res => {
      // console.log('res of login', res.data);
      Auth.authenticateUser(res.data.id);
      dispatch({
        type:LOG_IN,
        payload:res.data
      })

    })
    .then(()=> {
      // console.log('check auth at login');
      checkAuthenticateStatus();

    })
    .catch(err=> {
      console.log(err);
    })
}


export const loadCurrent = () => dispatch => {
  axios
  .get(`/users/${+Auth.getToken()}`)
    .then(res => {
      dispatch({
        type:CURRENT_USER,
        payload:res.data.user
      })
    })
    .catch(err => {
      console.log(err);
    })

}
