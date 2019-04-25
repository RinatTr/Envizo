import React, { Component } from 'react';
import { Col , Row, ProgressBar } from 'react-materialize'
import { getSingleSubscriptionIdForUserAndGoal, addSubscription, deleteSubscription } from '../util/util';
import Puzzle from './Puzzle'
import '../css/singlegoal.css';
import ReactS3 from 'react-s3';
import { uploadFile } from 'react-s3';
let aws = require('../util/secret.json')

//fake key to prevent errors
// let aws = {
//   "AWSAccessKeyId":123,
//   "AWSSecretKey":123
// }

const config = {
    bucketName: 'envizo-img',
    region: 'us-east-1',
    accessKeyId: aws["AWSAccessKeyId"],
    secretAccessKey: aws["AWSSecretKey"]
}

export default class SingleGoal extends Component {
  state = {
    loggedUserSubId: "",
    didUpload: false
  }

  componentDidMount() {
    let { loggedUser, match } = this.props;
    let { loggedUserSubId } = this.state;
    let userId = loggedUser.id;
    let goalId = this.props.match.params.goal_id;
    this.refreshSubscriptions(userId, goalId)
  }

  componentDidUpdate(prevProps) {
    let { loggedUser, match } = this.props;
    if (loggedUser.id !== prevProps.loggedUser.id) {
      let userId = loggedUser.id
      let goalId = +this.props.match.params.goal_id
      this.refreshSubscriptions(userId, goalId)
    }
  }

  handleSubscribe = (e) => {
    let { loggedUser, match } = this.props;
    let { loggedUserSubId } = this.state;
    let userId = loggedUser.id;
    let goalId = this.props.match.params.goal_id;
      if (e.target.innerText.slice(0,3) === "SUB") {
        addSubscription({ user_id: userId , goal_id: goalId }).then((res) => {
          this.refreshSubscriptions(userId, goalId);
        })
      } else {
        deleteSubscription(loggedUserSubId).then((res) => {
          this.refreshSubscriptions(userId, goalId);
        })
      }
  }

  handleUpload = (e) => {
    ReactS3.uploadFile(e.target.files[0], config)
            .then((res) => {
              this.setState({ didUpload: true })
            })
            .catch(err => console.log(err))
    //Util post
    //refresh submissions

  }

  refreshSubscriptions = (userId, goalId) => {
    getSingleSubscriptionIdForUserAndGoal(userId, goalId)
      .then((res) => {
          this.props.fetchSubscriptionsPerGoal(goalId);
          let newValue = res.data.subId.length ? res.data.subId[0].id : "" ;
          return this.setState({ loggedUserSubId: newValue });
      })
  }

  render(){
    console.log(this.props);
    let { loggedUserSubId } = this.state
    let { submissions, subscriptions, loggedUser } = this.props;

    let percAll = submissions && subscriptions ? (submissions.length/+subscriptions[0].target_value*100).toFixed(2) : 0;
    let countUserSubs = submissions ? (submissions.filter(el => el.user_id === loggedUser.id)).length : null
    let percUser = submissions && subscriptions ? (countUserSubs/+subscriptions[0].target_value*100).toFixed(2) : 0 ;
    return(
      submissions && subscriptions ? (
      <div className="container">
        <div className="goal-header">
          <h3>{subscriptions[0].title}</h3>
            <div className="subs">
              <button className="btn waves-effect waves-light" onClick={this.handleSubscribe}> {loggedUserSubId ? "Unsubscribe " : "Subscribe "}{subscriptions ? subscriptions.length : null}</button>
            </div>
        </div>
        <h4>{subscriptions[0].description.description}</h4>
        { loggedUser.id && loggedUserSubId ?
        <Row>
          <Col s={12}>
            <h3>Your Contribution</h3>
            <h2>{countUserSubs}/{subscriptions[0].target_value}</h2>
            <ProgressBar className={percUser > 99 ? "finished":'not-finished'} progress={+percUser} />
          </Col>
        </Row>
        : null }
        <Row>
          <Col s={12}>
            <h3>{subscriptions[0].name} Contributions</h3>
            <h2>{percAll}%</h2>
            <ProgressBar className={percAll > 99 ? "finished":'not-finished'} progress={+percAll} />
          </Col>
          <div className="container puzzle-area">
            <button className="btn waves-effect waves-light" onClick={this.handleUpload}>Upload Photo</button>
            <Puzzle submissions={submissions} />
          </div>
        </Row>

      </div>
    ) : ""
    )
  }
}

// subscribe function
// photo upload
