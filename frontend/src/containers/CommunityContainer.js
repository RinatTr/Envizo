import { fetchAllCommunityActivity } from '../actions/CommunityAction'
import { connect } from 'react-redux';
import CommunityProfile from '../components/CommunityProfile'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    activity: state.activity
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllCommunityActivity: (community_id) => dispatch(fetchAllCommunityActivity(community_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityProfile);