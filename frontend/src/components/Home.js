import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    this.props.fetchTonnage()
  }
    render() {
      console.log(this.props)
      return (<h1>Take a dive in NYC's trash pile.</h1>)
    }
}

export default Home;
