import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import M from 'materialize-css';
// import { Chip, Navbar as Nav } from 'react-materialize'
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
              <div className="usernav-img-wrapper">
                <img src={this.props.auth.currentUser.avatar_img} className="responsive-img circle" alt="Contact Person" />
                  <h5 id="beige">{this.props.auth.currentUser.username}</h5>
              </div>
          </Link>
        </li>
        <li><NavLink to={`/community/${this.props.auth.currentUser.community_id}`} className='nav-commmunity'><h5 id="beige">My Community</h5></NavLink></li>
        <li><NavLink exact to="/" className='logout' onClick={this.logout}><h5 id="beige">Logout</h5></NavLink></li>
      </div>
    </ul>
    ) :
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <div className='navbar_registration'>
    <li><NavLink to="/signup" className='signup'><h5 id="beige">Sign Up</h5></NavLink></li>
    <li><NavLink to="/login" className='login'><h5 id="beige">Login</h5></NavLink></li>
    <li><NavLink to="/aboutus" className='aboutus'><h5 id="beige">About Us</h5></NavLink></li>
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
        <li className="sidenav-close" ><NavLink exact to='/'>Home</NavLink></li>
        <li className="sidenav-close" ><NavLink to={`/profile/${this.props.auth.userId}`}>My Profile</NavLink></li>
        <li className="sidenav-close" ><NavLink to={`/community/${this.props.auth.currentUser.community_id}`} className='nav-commmunity'>My Community</NavLink></li>
        <li className="sidenav-close" ><NavLink to='/aboutus'>About Us</NavLink></li>
        <li className="sidenav-close" ><NavLink exact to="/" onClick={this.logout}>Logout</NavLink></li>
      </ul> :
      <ul className="sidenav" id="mobile-demo">
        <li className="sidenav-close" ><NavLink to='/signup'>Sign Up</NavLink></li>
        <li className="sidenav-close" ><NavLink to='/login'>Login</NavLink></li>
        <li className="sidenav-close" ><NavLink to='/aboutus'>About Us</NavLink></li>
      </ul> }

    </div>
  )
}
 }

export default Navbar
