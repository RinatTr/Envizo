import React from 'react';

export default const GoalDisplay = ({communityName, title, usernames, percAll, handleSubscribe, isSubscribed, subscriptionCount }) => {
  return (
    <div className="goal-display-container">
      <div className="goal-header">
        <h4>{title}</h4>
        <div className="subs">
          <button className="btn waves-effect waves-light" onClick={this.handleSubscribe}> {isSubscribed ? "Unsubscribe " : "Subscribe "}{subscriptionCount ? subscriptionCount : null}</button>
        </div>
      </div>
      <Row>
        <Col s={12}>
        <h4>{percAll}%</h4>
        <ProgressBar className={percAll > 99 ? "finished":'not-finished'} progress={percAll} />*/}
        </Col>
      </Row>

    </div>
  )
}
