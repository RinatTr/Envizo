import React,  { Component } from 'react';
import '../css/aboutus.css'


export default class  AboutUs extends Component {
  render(){
    return (
      <div className='container about'>
      <h2>Our Mission</h2>
      <p className='flow-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h2>About Us</h2>
      <p className='flow-text'> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2>Meet The Envizo Team</h2>
      <div className="us">
      <div className='me'>
      <img class="ipic circle responsive-img" src="https://media.licdn.com/dms/image/C5603AQHOAyGVTY4jFw/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=wbjMusyW99PlvWoCke87xNkR1BuUvFFjhdBKgx1QnKQ"/>
      <h5>Leo Lu</h5>
      <p className="desc">
      About something about yourself here
      </p>
      <div className='contact'>
      <a href='https://github.com/Godsby'><img src="https://img.icons8.com/ios/50/000000/github-filled.png"/></a>
      <a href='https://www.linkedin.com/in/followingdreams/'><img src="https://img.icons8.com/ios/50/000000/linkedin-filled.png"/></a>
      </div>
      </div>

      <div className='me'>
      <img class="ipic circle responsive-img" src="https://media.licdn.com/dms/image/C4D03AQHNCQX_yyHPLQ/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=cu32UAtRtaeO7ifc5aW3O0VPUDFZ2pP0YJ19O7YDYdg"/>
      <h5>Michell Tejada</h5>
      <p className="desc">
      About something about yourself here
      </p>
      <div className='contact'>
      <a href='https://github.com/mitejada'><img src="https://img.icons8.com/ios/50/000000/github-filled.png"/></a>
      <a href='https://www.linkedin.com/in/michell-tejada-8a78b5174/'><img src="https://img.icons8.com/ios/50/000000/linkedin-filled.png"/></a>
      </div>
      </div>

      <div className='me'>
      <img class="ipic circle responsive-img" src="https://media.licdn.com/dms/image/C4E03AQElsAzXkY2U8A/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=HhzLXqcBI5k_1Dh8WFiGlTMxcXeSGMhtrwcAjwHY8-4"/>
      <h5>Rinat Tregerman</h5>
      <p className="desc">
      About something about yourself here
      </p>
      <div className='contact'>
      <a href='https://github.com/RinatTr'><img src="https://img.icons8.com/ios/50/000000/github-filled.png"/></a>
      <a href='https://www.linkedin.com/in/rinat-tregerman/'><img src="https://img.icons8.com/ios/50/000000/linkedin-filled.png"/></a>
      </div>
      </div>

      <div className='me'>

      <img class="circle responsive-img" src="https://media.licdn.com/dms/image/C4D03AQHn4BwtTjdT_g/profile-displayphoto-shrink_200_200/0?e=1561593600&v=beta&t=8qz21GaYp8I3n6jXz1nW1s8in5rFjr3BDns-wCEGum0"/>

      <h5>Jonathan Andrade</h5>
      <p className="desc">
      About something about yourself here
      </p>
      <div className='contact'>
      <a href='https://github.com/xpectro93'><img src="https://img.icons8.com/ios/50/000000/github-filled.png"/></a>
      <a href='https://www.linkedin.com/in/jonathan-andrade-571201175/'><img src="https://img.icons8.com/ios/50/000000/linkedin-filled.png"/></a>
      </div>
      </div>


      </div>


      </div>
    )
  }
}
