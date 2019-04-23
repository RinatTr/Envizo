import React from 'react';
<<<<<<< HEAD
import { Row, Col, ProgressBar } from 'react-materialize';

const GoalDisplay = ({title, usernames, percAll, handleSubscribe, isSubscribed, subscriptionCount }) => {
=======

export default const GoalDisplay = ({communityName, title, usernames, percAll, handleSubscribe, isSubscribed, subscriptionCount }) => {
>>>>>>> 2a2cf899cee840d4bd88debfb36b466cb391de47
  return (
    <div className="goal-display-container">
      <div className="goal-header">
        <h4>{title}</h4>
        <div className="subs">
<<<<<<< HEAD
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
=======
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
>>>>>>> 2a2cf899cee840d4bd88debfb36b466cb391de47
