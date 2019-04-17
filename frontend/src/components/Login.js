import React, { Component } from 'react'
import M from 'materialize-css'
import '../css/login.css'

class Login extends Component {
  state = {
    username:'',
    password:''
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
    window.location.reload();
  }

  render(){
    console.log(this.props);
    return (
      <div className='container LogInContainer'>
      <div className='input-field col s6'>
        <h1>Log In</h1>
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
          {this.props.isLoggedIn?<button className="btn waves-effect waves-light" onClick={this.logout}>LogOut</button>:<button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>}
        </form>
        {this.props.isLoggedIn?<img src="https://media1.tenor.com/images/8d9e656f141cb596b9196287197bea37/tenor.gif?itemid=11705959" alt="logintest" />:<h1>You're Logged out</h1>}
      </div>
    )
  }

}




export default Login
