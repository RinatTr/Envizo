import React, { Component } from 'react';
import {VisualDisplay} from './VisualDisplay'
class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    this.props.fetchTonnage()
  }

  //normalizeData helper function
  //import visual component into react
    render() {
      console.log(this.props)
      return (<>
                <h1>Take a dive in NYC's trash pile.</h1>
                <div id="demo">
                <VisualDisplay />
                </div>
              </>)
    }
}

export default Home;
