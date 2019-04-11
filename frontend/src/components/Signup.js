import React, { Component } from 'react'

class Signup extends Component {
  state = {
    email:'',
    username:'',
    password:'',
    avatar_img:''
          }

  componentDidMount(){
  this.props.checkAuthenticateStatus()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmitNewUser = e => {

  e.preventDefault();
  let newuserData = {
    username: this.state.username,
    password:this.state.password,
    email:this.state.email,
    community_id:3, //hard coded community_id
    avatar_img:this.state.avatar


  }

    this.props.newUser(newuserData);

    this.setState({
      username:"",
      password:"",
      email:"",
      avatar:""
    })
  }

  render(){
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.onSubmitNewUser}>
          <input
            type='text'
            className='signup_email'
            name='email'
            value={this.state.emailInput}
            placeholder='Email'
            onChange={this.handleChange}
          />
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
          <input
            type='file'
            name='avatar'
          />
          <button type='submit'>Signup</button>
        </form>
      </div>
    )
  }

}




export default Signup
