import React, { Component } from 'react'
import M from 'materialize-css'
import '../css/signup.css'

class Signup extends Component {
  state = {
    email:'',
    username:'',
    password:'',
    passwordConfirm:'',
    borough:1,
    avatar_img:null,
    error:false
          }

  componentDidMount(){
  this.props.checkAuthenticateStatus()
  document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
  M.updateTextFields()
});
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
      community_id:+this.state.borough,
      avatar_img:this.state.avatar
    }
    console.log(newuserData);
  if(this.state.password===this.state.passwordConfirm){
    this.props.newUser(newuserData);
    this.setState({
      username:"",
      password:"",
      passwordConfirm:'',
      borough:0,
      email:"",
      avatar:"",
      error:false
    })
  }else{
    this.setState({
      error:true
    })
  }


  }

  render(){
    console.log(this.props);
    return (
      <div className='container SignUpContainer'>
      <div className='container'>
        <h1>Sign Up</h1>
      </div>
        <form   className='input-field col s6 FormContainer' onSubmit={this.onSubmitNewUser}>

        <div className='input-field col s6'>
        <label htmlFor="signup_email">Email</label>
          <input
            type='text'
            className="validate"
            id="'signup_email'"
            className='signup_email'
            name='email'
            value={this.state.emailInput}
            onChange={this.handleChange}
          />
          </div>
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
          <div className ='input-field col s6'>
          <select name='borough' onChange={this.handleChange}>
            <option value='0'>Select Borough</option>
            <option value='1'>Manhattan</option>
            <option value='2'>Queens</option>
            <option value='3'>Bronx</option>
            <option value='4'>Brooklyn</option>
            <option value='5'>Staten Island</option>
          </select>
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

          <div className='input-field col s6'>
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type='password'
            className='confirm_password'
            name='passwordConfirm'
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
          />
          </div>

          <div className="file-field input-field">

          <div className="btn-small waves-effect waves-light">
            <span>Upload</span>
              <input
              type="file"
              name="avatar"
              accept=".jpg, .jpeg, .png"/>
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" name='avatarpath' type="text" />
          </div>
        </div>




          <button className="btn-small waves-effect waves-light" type="submit" name="action">Sign Up
            <i className="material-icons right">send</i>
          </button>
        </form>
        {this.state.error?<p>Check Input Entries</p>:null}

        <div className="container">
        <p className="flow-text">Already a member? <button className="btn-small waves-effect waves-light"><a href="login">Login</a></button></p>
        </div>
      </div>
    )
  }

}




export default Signup
