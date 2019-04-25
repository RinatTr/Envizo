import React, { Component } from 'react';
import { VisualDisplay } from './VisualDisplay'
import { Tab, Tabs } from 'react-materialize'
import '../css/home.css';
import GoalsListContainer from '../containers/GoalsListContainer';
import M from 'materialize-css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      borough:0
    }
  }
  componentDidMount() {
    this.props.fetchTonnage();
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
    window.scroll(0,document.body.scrollHeight)
  }

    render() {
      return (
        <>
        <div className="col s6">
          <Tabs className=" tab-demo z-depth-1" options={{swipeable: true}}>
            <Tab title="Monthly Tonnage">
            <div className="container">
              <h1 id='visual-header'>Take a dive in NYC's trash pile.</h1>
              </div>
                <div id="demo">
                <VisualDisplay />
                <p>* Each circle represents Monthly Tonnage for each borough between 2018-2019, according to NYC Open Data API.</p>
                </div>
            </Tab>
            <Tab title="Air Pollution">
              Air Pollution
            </Tab>
            <Tab title="Energy Consumption">
              Energy Consumption
            </Tab>
          </Tabs>
          </div>
          <div className="container borough-select">
          <div className ='input-field col s6'>
          <select name='borough' onChange={this.handleChange}>
            <option value='0'>Select Borough</option>
            <option value='1'>Manhattan</option>
            <option value='2'>Queens</option>
            <option value='3'>Bronx</option>
            <option value='4'>Brooklyn</option>
            <option value='5'>Staten Island</option>
          </select>
          </div>
          </div>


          <GoalsListContainer boroughId={this.state.borough}/>
        </>
      )
    }
}

export default Home;
