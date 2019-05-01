import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Collection, CollectionItem, Icon, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../css/user.css';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  TumblrIcon,
  TumblrShareButton,
} from 'react-share';
import Timeago from 'react-timeago';

let borough = {
  1:'https://img3.goodfon.com/wallpaper/nbig/a/9b/new-york-city-new-york-1271.jpg',
  2:'https://pbs.twimg.com/media/Drb0hVBWwAUvJSr.jpg',
  3:'https://cdn-assets.alltrails.com/uploads/photo/image/19326941/extra_large_a08958fc25b15bb98cf4e1d17f1443c1.jpg',
  4:'http://s1.1zoom.net/big0/603/Australia_Rivers_Boats_Brooklyn_Hawkesbury_River_540885_1280x800.jpg',
  5:'https://cdn2.vox-cdn.com/uploads/chorus_asset/file/6695497/07_Kensinger_Mill_Creek_DSC_8839.0.jpg'
}

class UserProfile extends Component {

  state = {
    community: []
  }

  componentDidMount() {
    this.props.fetchAllGoals();
    this.props.fetchAllUsers();
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
    const { community } = this.state;
    const { auth, users, userActivity } = this.props;
    const routeId = parseInt(this.props.match.params.id);
    const theUser = users.find(user => user.id === routeId)
    const userName = theUser ? (auth.currentUser.id === routeId ? 'You' : theUser.username) : null;
    const userWord = theUser ? (auth.currentUser.id === routeId ? 'have' : 'has') : null;
    let activityList;

    if (userActivity.length) {
      activityList = userActivity.map(activity => {
        if(activity.type === 'joined') {
          return (
            <CollectionItem className='l2' key={activity.id}>
              <div className='joined'>
                <div className='text'>
                  <p className='left'>{userName} {userWord} joined
                    <Link to={community.length ?  `/community/${community[0].id}` : null }>
                      {' '}{ community.length ? community[0].name : 'Loading'}
                    </Link> community.
                  </p><br/>
                  <p className='left grey-text'><Timeago date= {activity.time_stamp}/></p>
                </div>
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
          <CollectionItem className='l2' key={activity.id}>
            <div className='joined'>
              <div>
                <p className='left'>{userName} {userWord} uploaded a photo.</p><br/>
                <p className='left grey-text'><Timeago date= {activity.time_stamp}/></p>
              </div>
              <div className='share_buttons'>
                <FacebookShareButton url='www.facebook.com' className="button">
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

                <TwitterShareButton url='/' className="button">
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
          <CollectionItem className='l2' key={activity.id}>
            <div className='joined'>
              <div>
                <p className='left'>{userName} {userWord} subscribed to a goal.</p><br/>
                <p className='left grey-text'><Timeago date= {activity.time_stamp}/></p>
              </div>
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
          return (
            <CollectionItem className='l2' key={activity.id}>
              <div className='joined'>
                <div>
                  <Link to={community.length ?  `/community/${community[0].id}` : null }>
                    { community.length ? community[0].name : 'Loading'}
                  </Link> {userWord} reached a milestone.<br/>
                  <p className='left grey-text'><Timeago date= {activity.time_stamp}/></p>
                </div>
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
        }
      })
    } else {
      activityList = (
        <CollectionItem className='l2' >
          <p>No Activities yet...</p>
        </CollectionItem>
      )
    }
    return activityList;
  }

  render() {
    // let boroughid = this.props.auth.currentUser.community_id
    const { community } = this.state;
    const communityId = community.length ? community[0].id : null;
    const { subscripUser } = this.props.subscriptions;
    const { users, match } = this.props;
    const routeId = parseInt(match.params.id);
    const userObj = users.find(user => user.id === routeId)
    const userName = userObj ? userObj.username : "";
    // const { users } = this.props;

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
        <CollectionItem key={goal.id}>
          { goal.title }
          <a href={`/goal/${goal.goal_id}`} className='secondary-content'>
            <Icon>
              arrow_forward
            </Icon>
          </a>
        </CollectionItem>
      )
    }) : (
      <>
      <CollectionItem>
        <h6>No subscriptions...please click to subscribe ;)</h6>
      </CollectionItem>
      <CollectionItem>
        <Button type="submit" waves="light">
          <a href={`/goals/community/${communityId}`} className='secondary-content'>
            <div className='white-text'>
              Subscribe
              <Icon right>
              send
              </Icon>
            </div>
          </a>
        </Button>
      </CollectionItem>
      </>
    )

    return (
      <div className='user_profile'>
        <Row className='center'>

          {/* User side */}
          <Col l={4} className="white push-l1 m8 s12 black-text z-depth-3 no-pad">

                <div className="pic-container">
                  <img src={community[0]?borough[community[0].id]:null} alt="borough" className='borough responsive-img' />
                  <span className="borough-title">
                    <Link to={community.length ?  `/community/${community[0].id}` : null }>
                      { community.length ? <h4 className ='boroughName' id="bold">{community[0].name}</h4> : 'Loading'}
                    </Link>
                  </span>
                  <img src={imgUrl} alt="" className="circle profile-pic z-depth-3 center"></img>
                </div>
                <div>
                  <h4 className="username">{userName}</h4>
                </div>
                <h5>What Motivates You?</h5>
              <Collection className="no-pad">
              { goalsList }
              </Collection>

          </Col>

          {/* Activities side */}
          <Col l={5} className="offset-l2 m8 s12 black-text z-depth-3 no-pad">

              <Collection header='Feed' className="no-pad">
              {this.getActivities()}
              </Collection>
          </Col>

        </Row>
      </div>
    )
  }
}

export default UserProfile;
