import Goals from '../components/Goals';
import { connect } from 'react-redux';
import { fetchSubmissionsPerGoal, fetchSubscriptionsPerGoal } from '../actions/GoalsActions';

//
const mapStateToProps = (state, ownProps) => {
  return {
    submissions: state.goals.submissions,
    subscriptions: state.goals.subscriptions
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSubmissionsPerGoal: (goalId) => dispatch(fetchSubmissionsPerGoal(goalId)),
    fetchSubscriptionsPerGoal: (goalId) => dispatch(fetchSubscriptionsPerGoal(goalId))
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Goals)
