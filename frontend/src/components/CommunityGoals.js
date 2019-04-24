import React, { Component } from 'react';
import { Col , Row, ProgressBar } from 'react-materialize'
import { getSingleSubscriptionIdForUserAndGoal, addSubscription, deleteSubscription } from '../util/util';
import GoalDisplay from './GoalDisplay'
import '../css/singlegoal.css';

export default class CommunityGoal extends Component {
  state = {
    loggedUser: {id: 28},
    submissions: [{id:2, goal_id:3, img_url:"https://cdn.nexternal.com/pjgh/images/Ehrlich%20Simple%20Water6.jpg"}, {id:3, goal_id:4, img_url:"https://cdn.nexternal.com/pjgh/images/Ehrlich%20Simple%20Water6.jpg"}],
    subscriptions: [{id: 9, username:"LeoTheGreat", name:"Queens", title:"Coolest Goal", target_value:600},{id: 9, username:"LeoTheGreatest", name:"Bronx", title:"Cool Goal", target_value:600}],
    goals: [{id:3, title:"Coolest Goal", target_value:600, users:[{username:"ChooChoo", id:21}, {username:"Choo", id:23}]}, {id:4, title: "amazing goal", target_value:700, users:[{username:"Chen", id:26}, {username:"Chord", id:15}]}, {id:5, title: "great goal", target_value:600, users:[{username:"Chenchie", id:24}, {username:"Chordie", id:12}]}]
  }

  componentDidUpdate(prevProps) {
    // let { loggedUser } = this.props;
    // if (loggedUser.id !== prevProps.loggedUser.id) {
    //   let userId = loggedUser.id
      // let goalId = +this.props.match.params.goal_id
      // this.refreshSubscriptions(userId, goalId)
    // }
  }

  handleSubscribe = (e) => {
    let { loggedUser, match } = this.props;
    let { loggedUserSubId } = this.state;
    let userId = loggedUser.id;
    // let goalId = this.props.match.params.goal_id;
      if (e.target.innerText.slice(0,3) === "SUB") {
        // addSubscription({ user_id: userId , goal_id: goalId }).then((res) => {
          // this.refreshSubscriptions(userId, goalId);
        // })
      } else {
        // deleteSubscription(loggedUserSubId).then((res) => {
          // this.refreshSubscriptions(userId, goalId);
        // })
      }
  }

  refreshSubscriptions = (userId, goalId) => {
    // getSingleSubscriptionIdForUserAndGoal(userId, goalId)
    //   .then((res) => {
    //       this.props.fetchSubscriptionsPerGoal(goalId);
    //       let newValue = res.data.subId.length ? res.data.subId[0].id : "" ;
    //       return this.setState({ loggedUserSubId: newValue });
    //   })
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
    //isSubscribed
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
    console.log('props===>',this.props);
    // let { loggedUserSubId } = this.state
    let { community } = this.props;
    // let { submissions, subscriptions, loggedUser, goals, users } = this.state;

    let mapGoals = community.goals ? community.goals.data.map(goal => {
      return <GoalDisplay
                title={goal.title}
                goalId={goal.id}
                usernames={this.getUserNames(goal.id)}
                percAll={this.calcProgress(this.submissionCount(goal.id), goal.target_value)}
                handleSubscribe={this.handleSubscribe}
                isSubscribed={false}
                subscriptionCount={this.subscriptionCount(goal.id)}
             />
    }) : ""


    return(
      community.goals !== undefined ? (
      <div className="container">
        <div className="goal-header">
          <h3>Goals for {community.goals.data[0].community}</h3>
        </div>
        <div className="subs">
          {/*<button className="btn waves-effect waves-light" onClick={this.handleSubscribe}> {loggedUserSubId ? "Unsubscribe " : "Subscribe "}{subscriptions ? subscriptions.length : null}</button>*/}
        </div>
        {mapGoals ? mapGoals : ""}
      </div>
    ) : ""
    )
  }
}
