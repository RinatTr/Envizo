import React from 'react'
import logo from './navbarLogo.png'
import './css/navbar.css'

const Navbar = () => {
return (
  <div>
    <nav>
      <div className="nav-wrapper">
        <div className='logo_img'><a href='/'><img src={logo} alt='' className="brand-logo"></img></a></div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <div className='navbar_registration'>
            <li><a href="signup" className='signup'>Signup</a></li>
            <li><a href="login" className='login'>Login</a></li>
          </div>
        </ul>
      </div>
    </nav>
  </div>
)
 }

export default Navbar
