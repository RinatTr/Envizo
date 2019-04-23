import React, { Component } from 'react';
import SingleGoal from './SingleGoal';
import CommunityGoals from './CommunityGoals';

// community name // subcriptions.name has it
// all goals per community //added on redux
// target_value // goals has this
// Number of submissions per goal // can be gotten by seeing res.data.length of fetchSubmissionsPerGoal
// all member names for specific goal // added on redux
// all subs per user

export default class Goals extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { match } = this.props;
    this.props.checkAuthenticateStatus();

    if (match.params.goal_id) {

      this.props.fetchSubmissionsPerGoal(match.params.goal_id);
      this.props.fetchSubscriptionsPerGoal(match.params.goal_id);
      //waiting for michell and leo to push so i know how to proceed
      if (this.props.loggedUser.id) { this.props.fetchAllSubscriptionsPerUser(this.props.loggedUser.id) }
    } else {

    }
  }

  render() {
    let { match } = this.props;
    console.log("PROPS AT GoAls",this.props);
    return (
      <React.Fragment>
      {match.params.goal_id ? <SingleGoal {...this.props}/> : <CommunityGoals />}
      </React.Fragment>
      )
  }

}
