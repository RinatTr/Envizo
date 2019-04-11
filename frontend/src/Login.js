import React from 'react'

const Login = (props) => {
  return (
    <div>
      <form onSubmit={props.loginUser}>
        <input
          type='text'
          className='login_username'
          name='username'
          value={props.username}
          placeholder='Username'
          onChange={props.handleChange}
        />
        <input
          type='password'
          className='login_password'
          name='password'
          value={props.password}
          placeholder='Password'
          onChange={props.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default Login
