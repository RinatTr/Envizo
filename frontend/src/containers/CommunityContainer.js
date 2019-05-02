import { fetchAllCommunityActivity } from '../actions/CommunityAction'
import { fetchAllGoalsPerCommunity } from '../actions/GoalsActions'
import { connect } from 'react-redux';
import CommunityProfile from '../components/CommunityProfile'

const mapStateToProps = (state, ownProps) => {
  return {
    activity: state.activity,
    community: state.goals.goalsComm
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllCommunityActivity: (community_id) => dispatch(fetchAllCommunityActivity(community_id)),
    fetchAllGoalsPerCommunity: (community_id) => dispatch(fetchAllGoalsPerCommunity(community_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityProfile);
