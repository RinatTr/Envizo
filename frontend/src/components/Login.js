import React, { Component } from 'react'
import M from 'materialize-css'
import '../css/login.css'
import { Redirect, Link } from 'react-router-dom'

class Login extends Component {
  state = {
    username:'dudette',
    password:'12345'
          }

  componentDidMount(){
  this.props.checkAuthenticateStatus()
  M.updateTextFields()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmitLogIn = e => {
  e.preventDefault();
  let logInData = {
    username: this.state.username,
    password: this.state.password
  }
  this.props.logIn(logInData);

}
  logout = e => {
    this.props.logout()
    // window.location.reload();
    this.props.history.push('/')
  }

  render(){

    return (
      <div className='container LogInContainer'>
      <div className='input-field col s6'>
        <h4>Log In</h4>
      </div>
        <form onSubmit={this.onSubmitLogIn}>
        <div className='input-field col s6'>
        <label htmlFor="username">Username</label>
          <input
            type='text'
            className='signup_username'
            name='username'
            value={this.state.usernameInput}
            onChange={this.handleChange}
          />
          </div>
          <div className='input-field col s6'>
          <label htmlFor="password">Password</label>
          <input
            type='password'
            className='signup_password'
            name='password'
            value={this.state.passwordInput}
            onChange={this.handleChange}
          />
          </div>
          {this.props.isLoggedIn? <Redirect to={`/profile/${this.props.auth.userId}`}></Redirect>:
          <div className="container">
          <button className="btn waves-effect waves-light" type="submit" name="action">Login
            <i className="material-icons right">send</i>
          </button>
        </div>}
        </form>
        {this.props.isLoggedIn ?
          <img src="https://media1.tenor.com/images/8d9e656f141cb596b9196287197bea37/tenor.gif?itemid=11705959" alt="logintest" />
            :<div className="container">
                <h4>Not a member? <Link to='/signup'>Sign up</Link></h4>
              </div>}
      </div>
    )
  }

}




export default Login
