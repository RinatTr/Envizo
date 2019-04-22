import Goals from '../components/Goals';
import { connect } from 'react-redux';
import { fetchSubmissionsPerGoal, fetchSubscriptionsPerGoal } from '../actions/GoalsActions';
import { checkAuthenticateStatus } from '../actions/AuthActions';


const mapStateToProps = (state, ownProps) => {
  // console.log("state==>",state);
  return {
    loggedUser: state.auth.currentUser,
    submissions: state.goals.submissions,
    subscriptions: state.goals.subscriptions
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSubmissionsPerGoal: (goalId) => dispatch(fetchSubmissionsPerGoal(goalId)),
    fetchSubscriptionsPerGoal: (goalId) => dispatch(fetchSubscriptionsPerGoal(goalId)),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus())
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Goals)
