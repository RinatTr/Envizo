import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Navbar from './Navbar'
import SignUpContainer from './containers/SignUpContainer'
import LoginContainer from './containers/LoginContainer'
import SingleGoal from './components/SingleGoal'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/signup' component={SignUpContainer}/>
          <Route path='/login' component={LoginContainer}/>
          <Route path='/goal/:goal_id' component={SingleGoal}/>
          <Route path='/' component={HomeContainer}/>

        </Switch>
      </div>
    );
  }
}

export default App;
