import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Collection, CollectionItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom'

class UserProfile extends Component {

  state = {
    goalsForUser: []
  }

  componentDidMount() {
    this.props.fetchAllGoals();
    this.props.checkAuthenticateStatus();
    this.props.fetchAllUsers();
    this.getSubscriptionsForAUser();
  }

  getSubscriptionsForAUser = () => {
    axios.get(`/subscriptions/user/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        goalsForUser: res.data.subscripUser
      })
    })
    .catch(err => Error)
  }
  
  render() {
    const { users, goals } = this.props;
    const { goalsForUser } = this.state;
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


    const goalsList = goalsForUser.length ? goalsForUser.map(goal => {
      return (
        <>
         <CollectionItem>
            { goal.title }
            <a href="javascript:void(0)" className="secondary-content">
              <Icon>
                send
              </Icon>
            </a>
          </CollectionItem>
        </>
      )
    }) : <p>No subscriptions yet...</p>

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
              { goalsList }
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