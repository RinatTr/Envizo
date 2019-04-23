import Goals from '../components/Goals';
import { connect } from 'react-redux';
import { fetchSubmissionsPerGoal,
         fetchSubscriptionsPerGoal,
         fetchAllGoalsPerCommunity,
         fetchAllSubmissionCountPerComm } from '../actions/GoalsActions';
import { fetchAllSubscriptionsForAUser, fetchAllSubscriptionsPerComm } from '../actions/SubscriptionsActions'
import { checkAuthenticateStatus } from '../actions/AuthActions';


const mapStateToProps = (state, ownProps) => {
  // console.log("state==>",state);
  return {
    loggedUser: state.auth.currentUser,
    submissions: state.goals.submissions,
    subscriptions: state.goals.subscriptions,
    subsPerUser:state.subscriptions.subscripUser,
    communityGoals:state.goals.goalsComm,
    community:state.subscriptions.community,
    count:state.goals.subCount

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllSubmissionCountPerComm: (comm_id) => dispatch(fetchAllSubmissionCountPerComm(comm_id)),
    fetchAllSubscriptionsPerComm: (comm_id) => dispatch(fetchAllSubscriptionsPerComm(comm_id)),
    fetchAllGoalsPerCommunity: (comm_id) => dispatch(fetchAllGoalsPerCommunity(comm_id)),
    fetchAllSubscriptionsForAUser: (user_id) => dispatch(fetchAllSubscriptionsForAUser(user_id)),
    fetchSubmissionsPerGoal: (goalId) => dispatch(fetchSubmissionsPerGoal(goalId)),
    fetchSubscriptionsPerGoal: (goalId) => dispatch(fetchSubscriptionsPerGoal(goalId)),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus())
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Goals)
