import React, { Component } from 'react';
import { getSingleSubscriptionIdForUserAndGoal, addSubscription, deleteSubscription } from '../util/util';
import GoalDisplay from './GoalDisplay'
import '../css/singlegoal.css';

export default class CommunityGoal extends Component {
  state = {
    loggedUserSubId: ""
  }

  componentDidUpdate(prevProps) {
    let { loggedUser } = this.props;
    if (loggedUser.id !== prevProps.loggedUser.id) {
      this.refreshProps()
    }
  }

  handleSubscribe = (e) => {
    let { loggedUser, match } = this.props;
    let { loggedUserSubId } = this.state;
    let userId = loggedUser.id;
    let subStr = e.target.id
    let innerText = e.target.innerText.slice(0,3)
    let sub = subStr.split("'");
    let goalId = sub[1];

    this.refreshSubscriptionsForUserAndGoal(userId, goalId)
          .then(() => {
            if (innerText === "SUB") {
              addSubscription({ user_id: userId , goal_id: goalId }).then((res) => {
                this.refreshSubscriptionsForUserAndGoal(userId, goalId);
                this.refreshProps();
              })
            } else {
              deleteSubscription(sub[0]).then((res) => {
                this.refreshSubscriptionsForUserAndGoal(userId, goalId);
                this.refreshProps();
              })
            }
          })
  }

  refreshSubscriptionsForUserAndGoal = (userId, goalId) => {
    return getSingleSubscriptionIdForUserAndGoal(userId, goalId)
            .then((res) => {
                this.props.fetchSubscriptionsPerGoal(goalId);
                let newValue = res.data.subId.length ? res.data.subId[0].id : "" ;
                return this.setState({ loggedUserSubId: newValue });
            })
  }
    refreshProps = () => {
      let {match} = this.props;
      if (this.props.loggedUser.id) {
        this.props.fetchAllSubscriptionsForAUser(this.props.loggedUser.id);
      }
      this.props.fetchAllSubscriptionsPerComm(match.params.community_id);
      this.props.fetchAllSubmissionCountPerComm(match.params.community_id);
      this.props.fetchAllGoalsPerCommunity(match.params.community_id);
    }
  //make helper functions for each needed props:
    calcProgress = (submissionCount, target) => {
      let percentage = (submissionCount/target*100).toFixed(2);
      return percentage;
    }
    getUserNames = (goalId) => {
      let { community } = this.props;
      let usernames = [];
      if (community.subscriptions_per_goal) {
        if (community.subscriptions_per_goal[goalId] !== undefined) {
          let subs = community.subscriptions_per_goal[goalId]
          subs.forEach(sub => usernames.push(sub.username))
        }
      }
      return usernames;
    }
    isSubscribed = (goalId) => {
      let { community, loggedUser } = this.props;
      let isSub = false;
      let userSub = null;
      if (community.subscriptions_per_goal && loggedUser.id ) {
        if (community.subscriptions_per_goal[goalId] !== undefined) {
          userSub = community.subscriptions_per_goal[goalId].find(sub => sub.user_id === loggedUser.id);
          isSub = userSub ? true : false ;
        }
      }
      return [isSub, userSub];
    }
    submissionCount = (goalId) => {
      let { community } = this.props;
      let count = 0;
      if (community.submissions_count_per_goal) {
        if (community.submissions_count_per_goal[goalId] !== undefined) {
          count = community.submissions_count_per_goal[goalId][0].submissions_count
        }
      }
      return count;
    }
    subscriptionCount = (goalId) => {
      let { community } = this.props;
      let count = 0;
      if (community.subscriptions_per_goal) {
        if (community.subscriptions_per_goal[goalId] !== undefined) {
          count = Object.keys(community.subscriptions_per_goal[goalId]).length
        }
      }
      return count;
    }

  render() {
    let { community } = this.props;
    let mapGoals = community.goals ? community.goals.data.map(goal => {
      return <GoalDisplay
                title={goal.title}
                goalId={goal.id}
                usernames={this.getUserNames(goal.id)}
                percAll={this.calcProgress(this.submissionCount(goal.id), goal.target_value)}
                handleSubscribe={this.handleSubscribe}
                isSubscribed={this.isSubscribed(goal.id)}
                subscriptionCount={this.subscriptionCount(goal.id)}
             />
    }) : ""

    return(
      community.goals !== undefined ? (
      <div className="container">
        <div className="goal-header">
          <h4 id="bold">Goals for {community.goals.data[0].community}</h4>
        </div>
        {mapGoals ? mapGoals : ""}
      </div>
    ) : ""
    )
  }
}
