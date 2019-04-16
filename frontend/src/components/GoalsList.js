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
    this.props.fetchAllSubscriptions()
  }

  calcSubscribers(id) {
    //input : all subscribers counts per all goals (from a BE query)
    // this.state.allSubscribers --> from GoalsContainer
    //return output : subscribers count per goal id.
  }
  render() {
    console.log("goalslistprops===>",this.props)

    //map through the goals array and present the goal in a collapsible card.
    const goalsList = this.props.goals ? this.props.goals.data.map(goal => {
      return (
        <CollapsibleItem header={goal.title} icon="delete" key={goal.id}> { goal.description }
          <div className='buttons' goal_id={goal.id}>
            <Prediction />{' '}{' '}
            <button className="btn-small subscribe"><a href='/login' className='subscribe-link white-text'>Subscribe</a></button>{' '}{' '}{' '}
            <SubscriberCount subscribers={this.calcSubscribers(goal.id)}/>
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
