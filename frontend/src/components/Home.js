import React, { Component } from 'react';
import { VisualDisplay } from './VisualDisplay'
import { Tab, Tabs, Select } from 'react-materialize'
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

  componentDidUpdate(){
    window.scroll(0,document.body.scrollHeight)
  }
  componentDidMount() {
    this.props.fetchTonnage();
  }
  handleChange = e => {
    this.setState({
      borough:e.target.value
    })
    window.scroll(0,document.body.scrollHeight)
  }

    render() {
      return (
        <>
        <div className="col s6">
          <Tabs className=" tab-demo z-depth-1" options={{swipeable: true}}>
            <Tab title="Monthly Tonnage" active>
            <div className="container">
              <h4 id='bold'>Take a dive in NYC's trash pile.</h4>
              </div>
                <div id="demo">
                <VisualDisplay />
                <div className="container">
                  <p>* Each circle represents Monthly Tonnage for each borough between 2018-2019, according to NYC Open Data API.</p>
                </div>
                <h4 className="center" id="bold">OK. How Can I Help?</h4>
              </div>
            </Tab>
            <Tab title="Air Pollution">
              <div className="container"><h5>Coming soon ...</h5></div>
            </Tab>
            <Tab title="Energy Consumption">
              <div className="container"><h5>Coming soon ...</h5></div>
            </Tab>
          </Tabs>
          </div>
          <div className="container borough-select">
          <div className ='input-field col s6'>
          <Select name='borough' onChange={this.handleChange}>
            <option value='0'>Select Borough</option>
            <option value='1'>Manhattan</option>
            <option value='2'>Queens</option>
            <option value='3'>Bronx</option>
            <option value='4'>Brooklyn</option>
            <option value='5'>Staten Island</option>
          </Select>
          </div>
          </div>


          <GoalsListContainer boroughId={this.state.borough}/>
        </>
      )
    }
}

export default Home;
