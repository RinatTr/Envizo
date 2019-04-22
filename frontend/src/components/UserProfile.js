import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Collection, CollectionItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom'
import '../css/user.css'

class UserProfile extends Component {

  state = {
    community: []
  }

  componentDidMount() {
    this.props.fetchAllGoals();
    this.props.checkAuthenticateStatus();
    this.props.fetchAllUsers();
    this.getCommunityForAUser();
    this.props.fetchAllSubscriptionsForAUser(this.props.match.params.id);
  }

  getCommunityForAUser = () => {
    axios.get(`/communities/user/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        community: res.data.community
      })
    })
    .catch(err => Error)
  }

  render() {
    const { users } = this.props;
    const { community } = this.state;
    const { subscripUser } = this.props.subscriptions;

    let imgUrl;
    const usersInfo = users.find(user => {
       return user.id === parseInt(this.props.match.params.id)
    })

    if (usersInfo) {
      imgUrl = usersInfo.avatar_img
    } else {
      imgUrl = ''
    }

    const goalsList = subscripUser.length ? subscripUser.map(goal => {
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
                <div>
                  <Link to='/community/:id'>
                    { community.length ? community[0].name : 'Loading'}
                  </Link>
                </div>
                <h5>What Motivates You?</h5>
              </CollectionItem>
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
