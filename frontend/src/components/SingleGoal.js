import React, { Component } from 'react';
import { Col , Row, ProgressBar} from 'react-materialize'
import '../css/singlegoal.css';

export default class SingleGoal extends Component {
  state = {
    progress:98,
    subs:1247
  }
  distance = this.state.progress

  goUp = e => {
    e.preventDefault();
    this.setState({
      progress:this.state.progress + 1,
      subs:this.state.subs + 1

    })

  }


  render(){
    let { progress, subs} = this.state

    return(

      <div className="container">
      <h3>Goal Title -  Community</h3>
      <div className="subs">
      <button className="btn waves-effect waves-light" onClick={this.goUp}>Subscribe</button>
      <h2>{subs}</h2>
      </div>

    <Row>
      <Col s={12}>
      <h3>User's Contribution</h3>
      <h2>{progress}%</h2>
      <ProgressBar className={progress >99? "finished":'not-finished'}progress={progress} />
      </Col>
    </Row>
    <Row>
      <Col s={12}>
      <h3>Community Contribution</h3>
      <h2>{25.3}%</h2>
      <ProgressBar className={progress >99? "finished":'not-finished'}progress={25.3} />
      </Col>

        <div className="container puzzle-container">
      <img
          src="https://2.bp.blogspot.com/-h0-yckGhOGI/T_nO4vP-6UI/AAAAAAAACD0/gqYb6lg50pQ/s1600/Fresh+Nature.jpg"
          alt="placeholder"
      />
      <button className="btn waves-effect waves-light" onClick={this.goUp}>Upload</button>

        </div>

    </Row>

      </div>
    )
  }
}
