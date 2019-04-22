import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux';
import { fetchAllGoals } from '../actions/GoalsActions';
import { checkAuthenticateStatus } from '../actions/AuthActions';
import { fetchAllUsers } from '../actions/UserActions';
import { fetchAllSubscriptionsForAUser } from '../actions/SubscriptionsActions';

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    auth: state.auth,
    goals: state.goals.goals,
    users: state.users,
    subscriptions: state.subscriptionsUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllGoals: () => dispatch(fetchAllGoals()),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllSubscriptionsForAUser: (user_id) => dispatch(fetchAllSubscriptionsForAUser(user_id))
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
 ) (UserProfile);
