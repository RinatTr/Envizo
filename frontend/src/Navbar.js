import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import logo from './navbarLogo.png'
import './css/navbar.css'

class Navbar extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }

render(){
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className='logo_img'><a href='/'><img src={logo} alt='' className="brand-logo responsive-img"></img></a></div>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <div className='navbar_registration'>
            <li><a href="/signup" className='signup'>Signup</a></li>
            <li><a href="/login" className='login'>Login</a></li>
            <li><a href="/aboutus" className='aboutus'>About Us</a></li>
            </div>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/aboutus'>About Us</NavLink></li>
      </ul>
    </div>
  )
}
 }

export default Navbar
