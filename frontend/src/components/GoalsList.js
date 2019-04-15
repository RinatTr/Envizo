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

  render() {

    //map through the goals array and present the goal in a collapsible card.
    const goalsList = this.props.goals ? this.props.goals.data.map(goal => {
      return (
        <CollapsibleItem header={goal.title} icon="delete"> { goal.description }
          <div className='buttons'>
            <Prediction />{' '}{' '}
            <button className="btn-small subscribe"><a href='/login' className='subscribe-link white-text'>Subscribe</a></button>{' '}{' '}{' '}
            <SubscriberCount />
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