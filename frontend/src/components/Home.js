import React, { Component } from 'react';
import { VisualDisplay } from './VisualDisplay'
import GoalsList from './GoalsList';
import { Tab, Tabs } from 'react-materialize'
import '../css/home.css';
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
          <Tabs className="tab-demo z-depth-1">
            <Tab title="Monthly Tonnage">
              <h1>Take a dive in NYC's trash pile.</h1>
                <div id="demo">
                <VisualDisplay />
                </div>
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
