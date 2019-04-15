import React, { Component } from 'react';
import GoalsList from './GoalsList';
import { Tab, Tabs } from 'react-materialize'
import '../css/home.css';
import VisualDisplay from './VisualDisplay'
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
          <Tabs className="tab-demo z-depth-1">
            <Tab title="Monthly Tonnage">
              Monthly Tonnage
            </Tab>
            <Tab title="Air Pollution" active>
              Air Pollution
            </Tab>
            <Tab title="Energy Consumption">
              Energy Consumption
            </Tab>
          </Tabs>
          <GoalsList goals={this.props.goals}/>
        </>
      )
    }
}

export default Home;
