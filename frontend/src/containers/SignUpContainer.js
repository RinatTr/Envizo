import SignUp from "../components/Signup";
import { connect } from "react-redux";
import {newUser, checkAuthenticateStatus, logout, loadCurrent } from "../actions/AuthActions";
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    user:state.auth.currentUser,
    isLoggedIn:state.auth.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    newUser: userData => dispatch(newUser(userData)),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    logout: () => dispatch(logout()),
    loadCurrent: () => dispatch(loadCurrent())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp));
