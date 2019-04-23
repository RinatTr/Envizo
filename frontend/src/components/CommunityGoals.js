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
    //getUserNames
    //isSubscribed
    //subscriptionCount
  render(){
    // let { loggedUserSubId } = this.state
    // let { submissions, subscriptions, loggedUser } = this.props;
    let { submissions, subscriptions, loggedUser, goals, users } = this.state;

    let mapGoals = goals ? goals.map(goal => {
      return <GoalDisplay
                title={goal.title}
                goalId={goal.id}
                usernames={goal.users}
                percAll={this.calcProgress(submissions.length, goal.target_value)}
                handleSubscribe={this.handleSubscribe}
                isSubscribed={true}
                subscriptionCount={subscriptions.length}
             />
    }) : null


    return(
      submissions && subscriptions ? (
      <div className="container">
        <div className="goal-header">
          <h3>Goals for </h3>
        </div>
        <div className="subs">
          {/*<button className="btn waves-effect waves-light" onClick={this.handleSubscribe}> {loggedUserSubId ? "Unsubscribe " : "Subscribe "}{subscriptions ? subscriptions.length : null}</button>*/}
        </div>
        {mapGoals}

      </div>
    ) : ""
    )
  }
}
