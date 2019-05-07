import React,  { Component } from 'react';
import '../css/aboutus.css'


export default class  AboutUs extends Component {
  constructor(){
    super()
    this.state ={}
    this.jonDiv = React.createRef()
    this.rinatDiv = React.createRef()
    this.michellDiv = React.createRef()
    this.leoDiv = React.createRef()
    this.topDiv =React.createRef()
  }
  clickJon = e => {
    //.current is verification that your element has rendered
    if (this.jonDiv.current) {
      this.jonDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };
  clickRinat = e => {
    //.current is verification that your element has rendered
    if (this.rinatDiv.current) {
      this.rinatDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };
  clickMichell = e => {
    //.current is verification that your element has rendered
    if (this.michellDiv.current) {
      this.michellDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };
  clickLeo = e => {
    //.current is verification that your element has rendered
    if (this.leoDiv.current) {
      this.leoDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };
  clickTop = e => {
    if (this.topDiv.current) {
      this.topDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }

  render(){
    return (
      <div className='container about'>

      <h2>Our Mission</h2>
      <p className='flow-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h2>About Us</h2>
      <p className='flow-text'> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2 ref={this.topDiv}>Meet The Envizo Team</h2>

      <div className="us">

      <div className="us-buttons hide-on-med-and-up">
      <button  className="btn waves-effect waves-light"onClick={this.clickJon}>Jon</button>
      <button  className="btn waves-effect waves-light"onClick={this.clickRinat}>Rinat</button>
      <button  className="btn waves-effect waves-light"onClick={this.clickMichell}>Michell</button>
      <button  className="btn waves-effect waves-light"onClick={this.clickLeo}>Leo</button>
      </div>


      <div ref={this.LeoDiv} className='me s6 m6 l6'>
      <img className="ipic circle responsive-img" alt='someone awesome' src="https://media.licdn.com/dms/image/C5603AQHOAyGVTY4jFw/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=wbjMusyW99PlvWoCke87xNkR1BuUvFFjhdBKgx1QnKQ"/>
      <h5>Leo Lu</h5>
      <p className="desc">
      Something about yourself here
      </p>
      <div className='contact'>
      <a href='https://github.com/Godsby'><img alt='github' src="https://img.icons8.com/ios/50/000000/github-filled.png"/></a>
      <a href='https://www.linkedin.com/in/followingdreams/'><img alt='linkedin' src="https://img.icons8.com/ios/50/000000/linkedin-filled.png"/></a>
      </div>
      </div>

      <div ref={this.michellDiv} className='me s6 m6 l6'>
      <img className="ipic circle responsive-img" alt='someone awesome' src="https://media.licdn.com/dms/image/C4D03AQHNCQX_yyHPLQ/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=cu32UAtRtaeO7ifc5aW3O0VPUDFZ2pP0YJ19O7YDYdg"/>
      <h5>Michell Tejada</h5>
      <p className="desc">
      Something about yourself here
      </p>
      <div className='contact'>
      <a href='https://github.com/mitejada'><img alt='github' src="https://img.icons8.com/ios/50/000000/github-filled.png"/></a>
      <a href='https://www.linkedin.com/in/michell-tejada-8a78b5174/'><img alt='linkedin' src="https://img.icons8.com/ios/50/000000/linkedin-filled.png"/></a>
      </div>
      </div>

      <div ref={this.rinatDiv} className='me s6 m6 l6'>
      <img className="ipic circle responsive-img" alt='someone awesome' src="https://media.licdn.com/dms/image/C4E03AQElsAzXkY2U8A/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=HhzLXqcBI5k_1Dh8WFiGlTMxcXeSGMhtrwcAjwHY8-4"/>
      <h5>Rinat Tregerman</h5>
      <p className="desc">
      Something about yourself here
      </p>
      <div className='contact'>
      <a href='https://github.com/RinatTr'><img alt='github' src="https://img.icons8.com/ios/50/000000/github-filled.png"/></a>
      <a href='https://www.linkedin.com/in/rinat-tregerman/'><img alt='linkedin' src="https://img.icons8.com/ios/50/000000/linkedin-filled.png"/></a>
      </div>
      </div>

      <div ref={this.jonDiv} className='me s6 m6 l6'>
        <img className="circle responsive-img" alt='someone awesome' src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/c0.92.370.370a/p370x247/56927150_2215805478511880_8949892781715750912_n.jpg?_nc_cat=109&_nc_ht=scontent-lga3-1.xx&oh=3da8e13beb787f5156d72baf1f10cdc4&oe=5D6755CD"/>
        <h5>Jonathan Andrade</h5>
        <p className="desc">
        Something about yourself here
        </p>
        <div className='contact'>
          <a href='https://github.com/xpectro93'><img alt='github' src="https://img.icons8.com/ios/50/000000/github-filled.png"/></a>
          <a href='https://www.linkedin.com/in/jonathan-andrade-571201175/'><img alt='linkedin' src="https://img.icons8.com/ios/50/000000/linkedin-filled.png"/></a>
        </div>
        <button  className="btn waves-effect waves-light hide-on-med-and-up"onClick={this.clickTop}>Top</button>
      </div>


      </div>


      </div>
    )
  }
}
