import React, { Component } from 'react';
import M from 'materialize-css';
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
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    });
  }

  render() {
    const goalsTitle = this.props.goals ? this.props.goals.data[0].title : null;
    const goalsDesc = this.props.goals ? this.props.goals.data[0].description : null;

    return (
      <div>
        {/* Goals collapsible list */}
        <ul className="collapsible">
          <li>
            <div className="collapsible-header"><i className="material-icons">delete</i>{goalsTitle}
            </div>
            <div className="collapsible-body">
              <p>{goalsDesc}</p>
              <div>

              <Prediction />
              <button className="btn subscribe"><a href='/login' className='subscribe-link white-text'>Subscribe</a></button>
              <SubscriberCount />
              </div>
            </div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">place</i>{goalsTitle}</div>
            <div className="collapsible-body"><span>{goalsDesc}</span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">whatshot</i>{goalsTitle}</div>
            <div className="collapsible-body"><span>{goalsDesc}</span></div>
          </li>
        </ul>
      </div>
    )
  }
}

export default GoalsList;