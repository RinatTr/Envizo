import React, { Component } from 'react'

class Login extends Component {
  state = {
    username:'',
    password:''
          }

  componentDidMount(){
  this.props.checkAuthenticateStatus()
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
      <div>
        <form onSubmit={this.onSubmitLogIn}>

          <input
            type='text'
            className='signup_username'
            name='username'
            value={this.state.usernameInput}
            placeholder='Username'
            onChange={this.handleChange}
          />
          <input
            type='password'
            className='signup_password'
            name='password'
            value={this.state.passwordInput}
            placeholder='Input Password'
            onChange={this.handleChange}
          />
          {this.props.isLoggedIn?<button onClick={this.logout}>LogOut</button>:<button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>}
        </form>
        {this.props.isLoggedIn?<img src="https://media1.tenor.com/images/8d9e656f141cb596b9196287197bea37/tenor.gif?itemid=11705959" alt="logintest" />:<h1>You're Logged out</h1>}
      </div>
    )
  }

}




export default Login
