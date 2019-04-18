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
  //description splitter, it splits the string into description, initiative and slogan
  dS = str => {
   let arr = str.split('@$'),
    obj = {
     description:arr[0],
     initiative:arr[1],
     slogan:arr[2]
   }
   return obj
 }

  render() {
    let { boroughId } = this.props.boroughId;

    //first it filters on community id then maps the result
    //map through the goals array and present the goal in a collapsible card.
    const goalsList = this.props.goals ? this.props.goals.data.filter(goal =>goal.community_id=== +this.props.boroughId).map(goal => {
        console.log(goal.description);
      return (
        <CollapsibleItem header={goal.title +' - ' + this.dS(goal.description).slogan} icon="delete" key={goal.id}>
            {this.dS(goal.description).description}
          <div className='buttons'>
            <Prediction currentGoal={goal.title}/>{' '}{' '}
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
