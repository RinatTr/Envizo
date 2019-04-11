import React, { Component } from 'react';
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
      console.log(this.props)
      return (
        <>
          <h1>Take a dive in NYC's trash pile.</h1>
          <GoalsList goals={this.props.goals}/>
        </>
      )
    }
}

export default Home;
