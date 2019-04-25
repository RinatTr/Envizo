import * as Util from '../util/util'

export const RECEIVE_ALLACTIVITY_FORACOMMUNITY = 'RECEIVE_ALLACTIVITY_FORACOMMUNITY';

export const receiveAllCommunityActivity = activity => {
  return {
    type: RECEIVE_ALLACTIVITY_FORACOMMUNITY,
    activity
  }
}

export const fetchAllCommunityActivity = (community_id) => dispatch => {
  return Util.getAllActivityForACommunity(community_id)
  .then(res => {
    return dispatch(receiveAllCommunityActivity(res.data))
  })
  .catch(err => console.log(Error))
}