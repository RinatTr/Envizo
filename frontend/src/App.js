import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Navbar from './Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={HomeContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
