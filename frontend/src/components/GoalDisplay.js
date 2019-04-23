import React from 'react';
import { Row, Col, ProgressBar } from 'react-materialize';

const GoalDisplay = ({title, usernames, percAll, handleSubscribe, isSubscribed, subscriptionCount }) => {
  return (
    <div className="goal-display-container">
      <div className="goal-header">
        <h4>{title}</h4>
        <div className="subs">
          <button className="btn waves-effect waves-light" onClick={handleSubscribe}> {isSubscribed ? "Unsubscribe " : "Subscribe "}{subscriptionCount ? subscriptionCount : null}</button>
        </div>
      </div>
        <Col s={12}>
        <h4>{percAll}%</h4>
        <ProgressBar className={percAll > 99 ? "finished":'not-finished'} progress={percAll} />
        </Col>
    </div>
  )
}

export default GoalDisplay;
