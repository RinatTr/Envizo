import UserProfile from '../components/UserProfile';
import { connect } from 'react-redux';
import { fetchAllGoals } from '../actions/GoalsActions';
import { fetchAllActicitiesPerUser } from '../actions/ActivitiesActions';
import { fetchAllUsers } from '../actions/UsersActions';

const mapStateToProps = (state, ownProps) => {
  return {
    goals: state.goals.goals,
    activities: state.activities.activities,
    users: state.users.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllActicitiesPerUser: id => dispatch(fetchAllActicitiesPerUser(id))
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
 ) (UserProfile);