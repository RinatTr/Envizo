import React from 'react';
import { Col, ProgressBar } from 'react-materialize';
import { Link } from 'react-router-dom';

const GoalDisplay = ({title, usernames, goalId, percAll, handleSubscribe, isSubscribed, subscriptionCount }) => {
  let mapUsers = usernames ? usernames.map((user,i) => {return <li key={i}>{user}</li>} ).slice(0,5) : ""
  return (
    <div className="goal-display-container">
      <div className="goal-header">
        <h4><Link to={`/goal/${goalId}`}>{title}</Link></h4>
        <div className="subs">
          <button className="btn waves-effect waves-light" onClick={handleSubscribe} id={isSubscribed[1] ? isSubscribed[1].id+"'"+isSubscribed[1].goal_id : 0+"'"+goalId}> {isSubscribed[0] ? "Unsubscribe " : "Subscribe "}{subscriptionCount ? subscriptionCount : null}</button>
        </div>
      </div>
        <Col s={12}>
        <h4>{percAll}%</h4>
        <ProgressBar className={percAll > 99 ? "finished":'not-finished'} progress={percAll} />
        </Col>

        <ul>
          <Link to={`/goal/${goalId}`}>{mapUsers.length ? "Recently joined members" : ""}{mapUsers.length ? mapUsers : ""}{mapUsers.length ? " ..." : ""}</Link>
        </ul>
    </div>
  )
}

export default GoalDisplay;
