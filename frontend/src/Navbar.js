import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import M from 'materialize-css';
import { Chip } from 'react-materialize'
import logo from './navbarLogo.png'
import './css/navbar.css'

class Navbar extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
    this.props.checkAuthenticateStatus();
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }

  logout = (event) => {
    this.props.logout()
    window.location='/'
  }

render(){
  // if(!this.props.isLoggedIn) {
  //   return <Redirect to='/'></Redirect>
  // }
  const navbarTernary = this.props.auth.isLoggedIn ? (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <div className='navbar_registration'>
        <li>
          <Link to={`/profile/${this.props.auth.currentUser.id}`}>
            <Chip>
              <img src={this.props.auth.currentUser.avatar_img} className="responsive-img" alt="Contact Person" />
              {this.props.auth.currentUser.username}
            </Chip>
          </Link>
        </li>
        <li><NavLink to="/" className='logout' onClick={this.logout}>Logout</NavLink></li>
      </div>
    </ul> ) :
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <div className='navbar_registration'>
    <li><NavLink to="/signup" className='signup'>Signup</NavLink></li>
    <li><NavLink to="/login" className='login'>Login</NavLink></li>
    <li><NavLink to="/aboutus" className='aboutus'>About Us</NavLink></li>
    </div>
  </ul>
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className='logo_img'><a href='/'><img src={logo} alt='' className="brand-logo responsive-img"></img></a></div>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            {navbarTernary}
        </div>
      </nav>
      {this.props.auth.isLoggedIn ?
      <ul className="sidenav" id="mobile-demo">
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to={`/profile/${this.props.auth.userId}`}>My Profile</NavLink></li>
        <li><NavLink to='/aboutus'>About Us</NavLink></li>
      </ul> :
      <ul className="sidenav" id="mobile-demo">
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/aboutus'>About Us</NavLink></li>
      </ul> }

    </div>
  )
}
 }

export default Navbar
