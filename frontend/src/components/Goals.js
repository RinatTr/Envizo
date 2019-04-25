import React, { Component } from 'react';
import SingleGoal from './SingleGoal';
import CommunityGoals from './CommunityGoals';

export default class Goals extends Component {
  componentDidMount() {
    let { match, loggedUser } = this.props;
    this.props.checkAuthenticateStatus()
    if (loggedUser.id) { this.props.fetchAllSubscriptionsForAUser(loggedUser.id) }
    if (match.params.goal_id) {
      this.props.fetchSubmissionsPerGoal(match.params.goal_id);
      this.props.fetchSubscriptionsPerGoal(match.params.goal_id);
    } else {
      this.props.fetchAllSubscriptionsPerComm(match.params.community_id)
      this.props.fetchAllSubmissionCountPerComm(match.params.community_id)
      this.props.fetchAllGoalsPerCommunity(match.params.community_id);
    }
  }

  componentDidUpdate(prevProps) {
    this.refreshProps(prevProps)
  }

  refreshProps = (prevProps) => {
    let { match, loggedUser } = this.props;
    if (match.path !== prevProps.match.path) {
      this.props.fetchSubmissionsPerGoal(match.params.goal_id);
      this.props.fetchSubscriptionsPerGoal(match.params.goal_id);
      this.props.checkAuthenticateStatus()
      if (loggedUser.id) {
        this.props.fetchAllSubscriptionsForAUser(loggedUser.id)
      }
    }
  }

  render() {
    let { match } = this.props;

    return (
      <React.Fragment>
      {match.params.goal_id ? <SingleGoal {...this.props}/> : <CommunityGoals {...this.props}/>}
      </React.Fragment>
      )
  }

}
