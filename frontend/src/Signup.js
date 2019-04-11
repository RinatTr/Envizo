import React from 'react'

const Signup = (props) => {
  return (
    <div>
      <form onSubmit={props.registerUser}>
        <input
          type='text'
          className='signup_email'
          name='email'
          value={props.email}
          placeholder='Email'
          onChange={props.handleChange}
        />
        <input
          type='text'
          className='signup_username'
          name='username'
          value={props.username}
          placeholder='Username'
          onChange={props.handleChange}
        />
        <input
          type='password'
          className='signup_password'
          name='password'
          value={props.password}
          placeholder='Password'
          onChange={props.handleChange}
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




export default Signup
