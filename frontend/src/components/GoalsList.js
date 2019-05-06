import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Collapsible, CollapsibleItem} from 'react-materialize';
import '../css/goalsList.css';
import Prediction from './Prediction';
import SubscriberCount from './SubscriberCount';

class GoalsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllGoals();
    this.props.fetchAllSubscriptions();
  }
  handleClick = (e) => {
    this.props.isLoggedIn
    ? this.props.history.push(`/goal/${e.target.id}`)
    : this.props.history.push(`/login`)
  }
  handleScroll = () => {
    let div = document.querySelector(".scroll-div.active");
    console.log(div);
    if (div) {div.scrollIntoView(true);}
    // if (div) { div.scrollTop = div.scrollHeight - div.clientHeight }
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
        <CollapsibleItem className="scroll-div" node='h5' header={goal.title +' - ' + goal.description.slogan} icon="delete" key={goal.id}>
          <div className="container">
            <p className='flow-text'>{goal.description.initiative}</p>
            <h4>Task:</h4><h5>{goal.description.description}</h5>
          </div>
          <div className='container leButtons'>
            <Prediction currentGoal={goal.title}/>
            <button className="btn-small subscribe" id={goal.id} onClick={this.handleClick}>
              Learn More
            </button>
            <SubscriberCount count={this.calcSubscribers(goal.id)}/>
          </div>
        </CollapsibleItem>
      )
    })
     : <div className="container center">
         <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
             <div className="circle-clipper left">
               <div className="circle"></div>
             </div><div className="gap-patch">
               <div className="circle"></div>
             </div><div className="circle-clipper right">
               <div className="circle"></div>
             </div>
            </div>
        </div>
      </div>;

    return (
      <>
        <Collapsible className='container collap' onClick={this.handleScroll}>
          {goalsList}
        </Collapsible>
      </>
    )
  }
}

export default withRouter(GoalsList);
