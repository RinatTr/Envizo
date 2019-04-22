import Login from "../components/Login";
import { connect } from "react-redux";
import {logIn, checkAuthenticateStatus, logout, loadCurrent } from "../actions/AuthActions";
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    user:state.auth.currentUser,
    isLoggedIn:state.auth.isLoggedIn,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    logIn: logInData => dispatch(logIn(logInData)),
    logout: () => dispatch(logout()),
    loadCurrent: () => dispatch(loadCurrent())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login));
