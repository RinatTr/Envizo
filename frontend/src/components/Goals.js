import React, { Component } from 'react';
import SingleGoal from './SingleGoal';
import CommunityGoals from './CommunityGoals';

export default class Goals extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { match } = this.props;
    if (match.params.goal_id) {
      this.props.fetchSubmissionsPerGoal(match.params.goal_id);
      this.props.fetchSubscriptionsPerGoal(match.params.goal_id);
      this.props.checkAuthenticateStatus()
    }
  }

  render() {
    let { match } = this.props;
    return (
      <React.Fragment>
      {match.params.goal_id ? <SingleGoal {...this.props}/> : <CommunityGoals />}
      </React.Fragment>
      )
  }

}
