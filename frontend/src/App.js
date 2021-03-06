import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
// import Navbar from './Navbar'
import AboutUs from './components/AboutUs'
import SignUpContainer from './containers/SignUpContainer'
import LoginContainer from './containers/LoginContainer'
import UserContainer from './containers/UserContainer';
import GoalsContainer from './containers/GoalsContainer'
import NavbarContainer from './containers/NavbarContainer'
import CommunityContainer from './containers/CommunityContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Switch>
          <Route exact path='/' component={HomeContainer}/>
          <Route path='/signup' component={SignUpContainer}/>
          <Route path='/login' component={LoginContainer}/>
          <Route path='/aboutus' component={AboutUs}/>
          <Route path='/profile/:id' component={UserContainer}/>
          <Route path='/goal/:goal_id' component={GoalsContainer}/>
          <Route path='/community/:id' component={CommunityContainer}/>
          <Route path='/goals/community/:community_id' component={GoalsContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
