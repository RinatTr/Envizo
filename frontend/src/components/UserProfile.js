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

  componentDidUpdate(prevProps){
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchAllGoals();
      this.props.fetchAllUsers();
      this.props.checkAuthenticateStatus();
      this.getCommunityForAUser();
      this.props.fetchAllSubscriptionsForAUser(this.props.match.params.id);
      this.props.fetchUserActivity(this.props.match.params.id);
    }
  }

  getCommunityForAUser = () => {
    axios.get(`/api/communities/user/${this.props.match.params.id}`)
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
    const isLoggedInUserPage = auth.currentUser.id === routeId
    const userName = theUser ? (isLoggedInUserPage ? 'You' : theUser.username) : null;
    const userWord = theUser ? (isLoggedInUserPage ? 'have' : 'has') : null;
    let activityList;

    if (userActivity.length) {
      activityList = userActivity.map(activity => {
        if(activity.type === 'joined') {
          return (
            <CollectionItem className='l2' key={activity.id}>
              <div className='joined'>
                <div className='text'>
                  <p className='left'>{userName} {userWord} joined
                    <Link to={community.length ?  `/community/${community[0].id}` : 'not available' }>
                      {' '}{ community.length ? community[0].name : 'Loading'}
                    </Link> community.
                  </p><br/>
                  <p className='left grey-text'><Timeago date= {activity.time_stamp}/></p>
                </div>
                { isLoggedInUserPage ?
                  <div className='share_buttons'>
                    <FacebookShareButton url='https://envizo.herokuapp.com' quote={'I have joined the ' + community[0].name + 'community at Envizo'} className="button">
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>

                    <TwitterShareButton url='https://envizo.herokuapp.com'
                      hashtags={['Envizo', 'Environment', 'HelpKeepYourCommunityClean']}
                      title={'I have joined the ' + community[0].name + 'community at Envizo'} className="button">
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>

                    <TumblrShareButton url='https://envizo.herokuapp.com' caption={'I have joined the ' + community[0].name + 'community at Envizo'} className="button">
                      <TumblrIcon size={32} round={true} />
                    </TumblrShareButton>
                  </div> : null
                }
              </div>
            </CollectionItem>
          )
        } else if(activity.type === 'uploaded') {
        return (
          <CollectionItem className='l2' key={activity.id}>
            <div className='joined'>
              <div>
                <p className='left'>{userName} {userWord} uploaded a photo to <a href={`/goal/${activity.goal_id}`} className='communityActivity_link'>{activity.title}</a>.</p><br/>
                <p className='left grey-text'><Timeago date= {activity.time_stamp}/></p>
              </div>
              { isLoggedInUserPage ?
                <div className='share_buttons'>
                  <FacebookShareButton url='https://envizo.herokuapp.com' quote={'I have uploaded a photo to the ' + activity.title + ' goal at Envizo !'} className="button">
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>

                  <TwitterShareButton url='https://envizo.herokuapp.com'
                    hashtags={['Envizo', 'Environment', 'HelpKeepYourCommunityClean']}
                    title={'I have uploaded a photo to the ' + activity.title + ' goal at Envizo !'} className="button">
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>

                  <TumblrShareButton url='https://envizo.herokuapp.com'
                    tags={['Envizo', 'Environment', 'HelpKeepYourCommunityClean']}
                    caption={'I have uploaded a photo to the ' + activity.title + ' goal at Envizo !'} className="button">
                    <TumblrIcon size={32} round={true} />
                  </TumblrShareButton>
                </div> : null
              }
            </div>
          </CollectionItem>
        )
        } else if(activity.type === 'subscribed') {
        return (
          <CollectionItem className='l2' key={activity.activity_id}>
            <div className='joined' key={activity.id}>
              <div>
                <p className='left'>{userName} {userWord} subscribed to <a href={`/goal/${activity.goal_id}`} className='communityActivity_link'>{activity.title}</a>.</p><br/>
                <p className='left grey-text'><Timeago date= {activity.time_stamp}/></p>
              </div>
              { isLoggedInUserPage ?
                <div className='share_buttons'>
                <FacebookShareButton url='https://envizo.herokuapp.com' quote={'I have subscribed to the ' + activity.title + ' goal at Envizo !'} className="button">
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

                <TwitterShareButton url='https://envizo.herokuapp.com'
                  hashtags={['Envizo', 'Environment', 'HelpKeepYourCommunityClean']}
                  title={'I have subscribed to the ' + activity.title + ' goal at Envizo !'} className="button">
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>

                <TumblrShareButton url='https://envizo.herokuapp.com'
                tags={['Envizo', 'Environment', 'HelpKeepYourCommunityClean']}
                caption={'I have subscribed to the ' + activity.title + ' goal at Envizo !'} className="button">
                  <TumblrIcon size={32} round={true} />
                </TumblrShareButton>
                </div> : null
              }
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
                { isLoggedInUserPage ?
                  <div className='share_buttons'>
                    <FacebookShareButton url='https://envizo.herokuapp.com' quote={'My community has completed a milestone in ' + activity.title + ' goal at Envizo !'} className="button">
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>

                    <TwitterShareButton url='https://envizo.herokuapp.com'
                      hashtags={['Envizo', 'Environment', 'HelpKeepYourCommunityClean']}
                      title={'My community has completed a milestone in ' + activity.title + ' goal at Envizo !'} className="button">
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>

                    <TumblrShareButton url='https://envizo.herokuapp.com'
                      tags={['Envizo', 'Environment', 'HelpKeepYourCommunityClean']}
                      caption={'My community has completed a milestone in ' + activity.title + ' goal at Envizo !'} className="button">
                      <TumblrIcon size={32} round={true} />
                    </TumblrShareButton>
                  </div> : null
                }
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
    // const { subscriptions.subscripUser } = this.props.subscriptions;
    const { users, match, subscriptions } = this.props;
    const routeId = parseInt(match.params.id);
    const userObj = users.find(user => user.id === routeId)
    const userName = userObj ? userObj.username : "";
    // const { users } = this.props;
    //loop through subscritionsForAUser and get goals that the user subscribed
    let imgUrl = userObj ? userObj.avatar_img : '';
    // if ( subscriptions.subscripUser ) {
    //   const usersInfo = subscriptions.subscripUser.find(user => {
    //     return user.user_id === parseInt(this.props.match.params.id)
    //   })
    //   if (usersInfo) {
    //     imgUrl = usersInfo.avatar_img
    //     console.log(imgUrl);
    //   } else {
    //     imgUrl = 'subscribe to show photo'
    //   }
    // }

    const goalsList = subscriptions.subscripUser.length ? subscriptions.subscripUser.map(goal => {
      return (
        <CollectionItem key={goal.goal_id} className="community-goal" onClick={()=>this.props.history.push(`/goal/${goal.goal_id}`)}>
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
          <Col l={4} className="white push-l1 m10 s12 black-text z-depth-3 no-pad">

                <div className="pic-container">
                  <img src={community[0]?borough[community[0].id]:null} alt="borough" className='borough responsive-img' />
                  <span className="borough-title">
                    <Link to={community.length ?  `/community/${community[0].id}` : 'not available' }>
                      { community.length ? <h4 className ='boroughName' id="bold">{community[0].name}</h4> : 'Loading'}
                    </Link>
                  </span>
                  <img src={imgUrl} alt='' className="circle profile-pic z-depth-3 center"></img>
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
          <Col l={5} className="offset-l2 m10 s12 black-text z-depth-3 no-pad">

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
