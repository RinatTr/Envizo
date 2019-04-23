import React, { Component } from 'react';
import SingleGoal from './SingleGoal';
import CommunityGoals from './CommunityGoals';

export default class Goals extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let { match } = this.props;
    this.props.checkAuthenticateStatus()
    if (match.params.goal_id) {
      this.props.fetchSubmissionsPerGoal(match.params.goal_id);
      this.props.fetchSubscriptionsPerGoal(match.params.goal_id);
      //waiting for michell and leo to push so i know how to proceed
      if (this.props.loggedUser.id) { this.props.fetchAllSubscriptionsPerUser(this.props.loggedUser.id) }
    } else {
      this.props.fetchAllSubscriptionsForAUser(22);
      this.props.fetchAllSubscriptionsPerComm(4)
      this.props.fetchAllSubmissionCountPerComm(4)
      this.props.fetchAllGoalsPerCommunity(2);
    }
  }

  render() {
    let { match } = this.props;
    console.log('PROPS',this.props);
    return (
      <React.Fragment>
      {match.params.goal_id ? <SingleGoal {...this.props}/> : <CommunityGoals />}
      </React.Fragment>
      )
  }

}
