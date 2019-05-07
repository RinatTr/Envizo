import React, { Component } from 'react';
import { Row, Col, Collection, CollectionItem, Icon, Button } from 'react-materialize';
import '../css/community.css'
import Timeago from 'react-timeago';

let borough = {
  1:{imgUrl:'https://img3.goodfon.com/wallpaper/nbig/a/9b/new-york-city-new-york-1271.jpg',
     communityName:'Manhattan'},
  2:{imgUrl:'https://pbs.twimg.com/media/Drb0hVBWwAUvJSr.jpg',
     communityName:'Queens'},
  3:{imgUrl:'https://cdn-assets.alltrails.com/uploads/photo/image/19326941/extra_large_a08958fc25b15bb98cf4e1d17f1443c1.jpg',
     communityName:'Bronx'},
  4:{imgUrl:'http://s1.1zoom.net/big0/603/Australia_Rivers_Boats_Brooklyn_Hawkesbury_River_540885_1280x800.jpg',
     communityName:'Brooklyn'},
  5:{imgUrl:'https://cdn2.vox-cdn.com/uploads/chorus_asset/file/6695497/07_Kensinger_Mill_Creek_DSC_8839.0.jpg',
     communityName:'Staten Island'}
}

class CommunityProfile extends Component {
  componentDidMount() {
    this.props.fetchAllCommunityActivity(this.props.match.params.id);
    this.props.fetchAllGoalsPerCommunity(this.props.match.params.id);
  }

  click = e => {
    e.preventDefault();
    // this.props.history.push(/goal/${goals.id}')
  }

  getActivities = () => {
    const { activity } = this.props;

    if (activity) {
      const activityList = activity.map((activity, i) => {

        if(activity.type === 'joined') {
          return (
            <CollectionItem className='avatar' key={i +activity.type} >
              <img src={activity.avatar_img} alt="" className="circle" />
                <p className = "title left" >
                <a href={`/profile/${activity.usersid}` } className='communityActivity_username'>{activity.username}</a> has joined the community.
                </p>
                <br />
                <p className='left grey-text'><Timeago date= {activity.time_stamp}/></p>
            </CollectionItem>
          )
          } else if(activity.type === 'uploaded') {
          return (
            <CollectionItem className='avatar' key={i +activity.type} >
              <img src={activity.avatar_img} alt="" className="circle" />
                <p className = "title left" >
                <a href={`/profile/${activity.usersid}` } className='communityActivity_username'>{activity.username}</a> uploaded a photo to <a href={`/goal/${activity.goal_id}`} className='communityActivity_link'>{activity.title}</a>.
                </p>
                <br />
                <p className='left grey-text'><Timeago date= {activity.time_stamp}/></p>
            </CollectionItem>
          )
        } else if(activity.type === 'subscribed') {
          return (
            <CollectionItem className='avatar' key={i +activity.type}>
              <img src={activity.avatar_img} alt="" className="circle" />
                <p className = "title left" >
                <a href={`/profile/${activity.usersid}` } className='communityActivity_username'>{activity.username}</a> has subscribed to <a href={`/goal/${activity.goal_id}`} className='communityActivity_link'>{activity.title}</a>.
                </p>
                <br />
                <p className='left grey-text'><Timeago date= {activity.time_stamp}/></p>
            </CollectionItem>
          )
        } else if(activity.type === 'milestone') {
          return (
            <CollectionItem className='avatar' key={i +activity.type} >
              <img src={activity.avatar_img} alt="" className="circle" />
                <p className = "title left" >
                <a href={`/profile/${activity.usersid}` }>{activity.name}</a> has completed <a href={`/goal/${activity.goal_id}`} className='communityActivity_link'>{activity.title}</a> goal.
                </p>
                <br />
                <p className='left grey-text'><Timeago date= {activity.time_stamp}/></p>
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
    let comm_id = this.props.match.params.id
    let goalsList;
    if (this.props.community ) {
      goalsList = this.props.community.data.map((goals, i) => {
            return (

                <CollectionItem className="community-goal" key={`${goals.title} ${i}`} onClick={()=>this.props.history.push(`/goal/${goals.id}`)}>
                  {goals.title}
                  <a href={`/goal/${goals.id}`} className='secondary-content'>
                    <Icon>
                      arrow_forward
                    </Icon>
                  </a>
                </CollectionItem>

            )
          })
    }


    return (
      <div className='community_profile'>
        <Row className='center'>
          {/* Communityside */}
          <Col l={4} className='push-l1  m10 s12 black-text z-depth-3 try'>
            <Collection className='avatar'>

              <div className="pic-container">
                <img src={borough[comm_id].imgUrl} alt="borough" className='borough responsive-img' />
                <h4>{borough[comm_id].communityName}</h4>
                <h5>Goals</h5>
              </div>


              { goalsList }
              <CollectionItem>
                  <Button type="submit" waves="light">
                  <a href={`/goals/community/${this.props.match.params.id}`} className='secondary-content'>
                      <div className='white-text'>
                      Community Goals
                      <Icon right>
                      arrow_forward
                      </Icon>
                      </div>
                  </a>
                  </Button>
              </CollectionItem>
            </Collection>
          </Col>
          {/* Activityside */}
          <Col l={5} className='offset-l2 m10 s12 z-depth-3 community-activity'>
            <Collection header='Community Feed'>
            {this.getActivities()}
            </Collection>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CommunityProfile;
