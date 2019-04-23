import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Collection, CollectionItem, Icon, Modal, Button } from 'react-materialize';
import { Link } from 'react-router-dom'
import '../css/user.css'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  TumblrIcon,
  TumblrShareButton,
  PinterestIcon,
  PinterestShareButton
} from 'react-share'

class UserProfile extends Component {

  state = {
    community: []
  }

  componentDidMount() {
    // const { userId } = this.props.match.params.id
    this.props.fetchAllGoals();
    this.props.checkAuthenticateStatus();
    this.getCommunityForAUser();
    this.props.fetchAllSubscriptionsForAUser(this.props.match.params.id);
    this.props.fetchUserActivity(this.props.match.params.id);

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

  getActivities = () => {
    const { users } = this.props;

    if (users.activity) {
      const activityList = users.activity.map(activity => {
  
        if(activity.type === 'joined') {
          return (
            <CollectionItem className='l2'>
              <div className='joined'>
                <p>You have joined the community.</p>
                <div className='share_buttons'>
                  <FacebookShareButton url='www.facebook.com' className="button">
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
              
                  <TwitterShareButton url='www.twitter.com' className="button">
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>

                  <TumblrShareButton url='www.tumblr.com' className="button">
                    <TumblrIcon size={32} round={true} />
                  </TumblrShareButton>
                </div>
              </div>
            </CollectionItem>
          ) 
          } else if(activity.type === 'uploaded') {
          return (
            <CollectionItem className='l2'>
              <div className='joined'>
                <p>You have uploaded a photo.</p>
                <div className='share_buttons'>
                  <FacebookShareButton url='www.facebook.com' className="button">
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
              
                  <TwitterShareButton url='www.twitter.com' className="button">
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>

                  <TumblrShareButton url='www.tumblr.com' className="button">
                    <TumblrIcon size={32} round={true} />
                  </TumblrShareButton>
                </div>
              </div>
            </CollectionItem>
          )
        } else if(activity.type === 'subscribed') {
          return (
            <CollectionItem className='l2'>
              <div className='joined'>
                <p>You have subscribed to a goal.</p>
                <div className='share_buttons'>
                  <FacebookShareButton url='www.facebook.com' className="button">
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
              
                  <TwitterShareButton url='www.twitter.com' className="button">
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>

                  <TumblrShareButton url='www.tumblr.com' className="button">
                    <TumblrIcon size={32} round={true} />
                  </TumblrShareButton>
                </div>
              </div>
            </CollectionItem>
          )
        } else if(activity.type === 'milestone') {
          return (
            <CollectionItem className='l2'>
             <div className='joined'>
                <p>You have reached a milestone.</p>
                <div className='share_buttons'>
                  <FacebookShareButton url='www.facebook.com' className="button">
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
              
                  <TwitterShareButton url='www.twitter.com' className="button">
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>

                  <TumblrShareButton url='www.tumblr.com' className="button">
                    <TumblrIcon size={32} round={true} />
                  </TumblrShareButton>
                </div>
              </div>
            </CollectionItem>
          )
        } else {
          return (<p>No Activities yet</p>)
        };
      })
      return activityList;
      }
    }


  render() {
    console.log(this.props.users.activity)
    const { community } = this.state;
    const { subscripUser } = this.props.subscriptions;
    const { users } = this.props;
    
    //loop through subscritionsForAUser and get goals that the user subscribed
    let imgUrl;
    if ( subscripUser ) {
      const usersInfo = subscripUser.find(user => {
        return user.user_id === parseInt(this.props.match.params.id)
      })
      if (usersInfo) {
        imgUrl = usersInfo.avatar_img
      } else {
        imgUrl = ''
      }
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

    //loop through activities for the user


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

              {this.getActivities()}
                
            </Collection>
          </Col>
        </Row>
      </>
    )
  }
}

export default UserProfile;
