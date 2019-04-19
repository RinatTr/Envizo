import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Collection, CollectionItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom'

class UserProfile extends Component {

  componentDidMount() {
    this.props.fetchAllGoals();
    this.props.checkAuthenticateStatus();
    this.props.fetchAllUsers();
  }
  
  render() {
    const { users, goals } = this.props;
    console.log(goals)
    let imgUrl;
    const usersInfo = users.find(user => {
       return user.id === parseInt(this.props.match.params.id)
    }) 

    if (usersInfo) {
      imgUrl = usersInfo.avatar_img
    } else {
      imgUrl = ''
    }

    // const goalsList = goals.find(goal => {
    //   return 
    // })

    return (
      <>
        <Row className='center'>
        {/* User side */}
          <Col l={4} className="teal push-l1 black-text">
            <Collection className='avatar'>
              <CollectionItem> 
                <img src={imgUrl} alt="" className="circle"></img>
                <div><Link to='/community/:id'>Community Name</Link></div>
              </CollectionItem>
            </Collection>
            <Collection>
              <CollectionItem>
              {/* <img src="https://materializecss.com/images/yuna.jpg" alt="" className="circle" /> */}
              Alvin
              <a href="javascript:void(0)" className="secondary-content">
              <Icon>
              send
              </Icon>
              </a>
              </CollectionItem>
              <CollectionItem>
              Alvin
              <a href="javascript:void(0)" className="secondary-content">
              <Icon>
              send
              </Icon>
              </a>
              </CollectionItem>
            </Collection>
          </Col>
          {/* Activities side */}
          <Col l={5} className="teal offset-l2 black-text">
            <Collection>
              <CollectionItem className='l2'>
              Alvin
              </CollectionItem>
              <CollectionItem>
              Alvin
              </CollectionItem>
              <CollectionItem>
              Alvin
              </CollectionItem>
              <CollectionItem>
              Alvin
              </CollectionItem>
            </Collection>
          </Col>
        </Row>
      </>
    )
  }
}

export default UserProfile;