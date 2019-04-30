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
    let { boroughId } = this.props;
    //first it filters on community id then maps the result
    //map through the goals array and present the goal in a collapsible card.
    const goalsList = this.props.goals ? this.props.goals.data.filter(goal =>goal.community_id=== +boroughId).map(goal => {
      return (

        <CollapsibleItem node='h5' header={goal.title +' - ' + goal.description.slogan} icon="delete" key={goal.id}>
          <div className="container">
            <p className='flow-text'>{goal.description.initiative}</p>
            <h4>Task:</h4><h5>{goal.description.description}</h5>
          </div>

          <div className='container leButtons'>
            <Prediction currentGoal={goal.title}/>
            {this.props.isLoggedIn?<button className="btn-small subscribe">
              <a href={`/goal/${goal.id}`} className='subscribe-link white-text'>Learn More</a>
            </button>:<button className="btn-small subscribe">
              <a href={`/login`} className='subscribe-link white-text'>Learn More</a>
            </button>}
            <SubscriberCount count={this.calcSubscribers(goal.id)}/>
          </div>

        </CollapsibleItem>

      )
    })
     : <div className="container">
         <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
             <div className="circle-clipper left">
               <div className="circle"></div>
             </div><div class="gap-patch">
               <div className="circle"></div>
             </div><div className="circle-clipper right">
               <div className="circle"></div>
             </div>
            </div>
        </div>
      </div>;

    return (
      <>

        <Collapsible>
          {goalsList}
        </Collapsible>
      </>
    )
  }
}

export default GoalsList;
