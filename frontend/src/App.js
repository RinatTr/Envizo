import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Navbar from './Navbar';
import SignUpContainer from './containers/SignUpContainer';
import LoginContainer from './containers/LoginContainer';
import UserContainer from './containers/UserContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/signup' component={SignUpContainer}/>
          <Route path='/login' component={LoginContainer}/>
          <Route path='/' component={HomeContainer}/>
          <Route path='/profile/:id' component={UserContainer}/>

        </Switch>
      </div>
    );
  }
}

export default App;
