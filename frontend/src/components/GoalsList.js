import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import '../css/goalsList.css';
import Prediction from './Prediction';
import SubscriberCount from './SubscriberCount';

class GoalsList extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchAllGoals();
    this.props.fetchAllSubscriptions();
  }

  //Input: all subsciptions fetched from backend; Output: number of subscribers for each goal
  calcSubscribers = (id) => {
    
    if (this.props.subscriptions) {
      const { subscriptions } = this.props.subscriptions;
      let count = 0;
      subscriptions.forEach(subscription => (subscription.goal_id === id && count ++));
      return count;
    } else {
      return 0;
    }
  }

  render() {
    //map through the goals array and present the goal in a collapsible card.
    const goalsList = this.props.goals ? this.props.goals.data.map(goal => {
      return (
        <CollapsibleItem header={goal.title} icon="delete" key={goal.id}> { goal.description }
          <div className='buttons' goal_id={goal.id}>
            <Prediction />{' '}{' '}
            <button className="btn-small subscribe"><a href='/login' className='subscribe-link white-text'>Subscribe</a></button>{' '}{' '}{' '}
            <SubscriberCount count={this.calcSubscribers(goal.id)}/>
          </div>
        </CollapsibleItem>
      )
    })
     : <p>Loading...</p>;

    return (
      <div>
        <Collapsible>
          {goalsList}
        </Collapsible>
      </div>
    )
  }
}

export default GoalsList;
