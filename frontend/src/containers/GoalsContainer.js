import GoalsList from '../components/GoalsList';
import { connect } from 'react-redux';
import { fetchAllGoals } from '../actions/GoalsActions';
import { fetchAllSubscriptions } from '../actions/SubscriptionsActions';

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    goals: state.goals.goals,
    subscriptions: state.subscriptions.subscriptions
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllGoals: () => dispatch(fetchAllGoals()),
    fetchAllSubscriptions: () => dispatch(fetchAllSubscriptions())
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(GoalsList)