import React, { Component } from 'react';
import M from 'materialize-css';

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
        < ul className = "collapsible" >
          <li>
            <div className="collapsible-header"><i className="material-icons">person</i>{goalsTitle}</div>
            <div className="collapsible-body"><span>{goalsDesc}</span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
        </ul>
      </div>
    )
  }
}

export default GoalsList;