import React, { Component } from 'react';
import SingleGoal from './SingleGoal'

// all goals per community //added on redux
// Number of submissions// need to add count on some query
// all member names for specific goal // added on redux
// all subs per user
//subs per community
//subm per community

export default class Goals extends Component {
  componentDidMount() {
    let { match } = this.props;
    this.props.checkAuthenticateStatus()
    this.props.fetchAllSubscriptionsForAUser(22);
    this.props.fetchAllSubscriptionsPerComm(4)
    this.props.fetchAllSubmissionCountPerComm(4)
    if (match.params.goal_id) {
      this.props.fetchSubmissionsPerGoal(match.params.goal_id);
      this.props.fetchSubscriptionsPerGoal(match.params.goal_id);
      //new
    }else {
      this.props.fetchAllGoalsPerCommunity(2);
    }
  }

  render() {
    let { match } = this.props;
    console.log('AT GOAL',this.props);
    return (
      <React.Fragment>
      {match.params.goal_id ? <SingleGoal {...this.props}/> : null}
      </React.Fragment>
      )
  }

}
