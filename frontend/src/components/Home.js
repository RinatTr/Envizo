import React, { Component } from 'react';
import {VisualDisplay} from './VisualDisplay'
import GoalsList from './GoalsList';

class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    this.props.fetchTonnage();
    this.props.fetchAllGoals();
  }

    render() {

      return (
        <>
          <h1>Take a dive in NYC's trash pile.</h1>
            <div id="demo">
            <VisualDisplay />
            </div>
          <GoalsList goals={this.props.goals}/>
        </>
      )
    }
}

export default Home;
