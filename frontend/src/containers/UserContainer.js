import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux';
import { fetchAllGoals } from '../actions/GoalsActions';
import { checkAuthenticateStatus } from '../actions/AuthActions';
import { fetchAllUsers } from '../actions/UserActions';

const mapStateToProps = (state, ownProps) => {

  console.log(state)
  return {
    auth: state.auth,
    goals: state.goals.goals,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllGoals: () => dispatch(fetchAllGoals()),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
  }
}

export default connect (
  mapStateToProps, mapDispatchToProps
 ) (UserProfile);