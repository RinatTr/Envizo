import React, { Component } from 'react';
import { VisualDisplay } from './VisualDisplay'
import { Tab, Tabs } from 'react-materialize'
import '../css/home.css';
import GoalsContainer from '../containers/GoalsContainer';

class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    this.props.fetchTonnage();
  }

    render() {
      console.log(this.props)
      return (
        <>
          <Tabs className="tab-demo z-depth-1">
            <Tab title="Monthly Tonnage">
              <h1>Take a dive in NYC's trash pile.</h1>
                <div id="demo">
                <VisualDisplay />
                <p>* Each circle represents Monthly Tonnage for each borough between 2018-2019, according to NYC Open Data API.</p>
                </div>
            </Tab>
            <Tab title="Air Pollution" active>
              Air Pollution
            </Tab>
            <Tab title="Energy Consumption">
              Energy Consumption
            </Tab>
          </Tabs>
          <GoalsContainer />
        </>
      )
    }
}

export default Home;
