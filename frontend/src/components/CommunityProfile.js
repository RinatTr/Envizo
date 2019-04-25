import React, { Component } from 'react';
import { Row, Col, Collection, CollectionItem, Icon, Button } from 'react-materialize';
import '../css/community.css'
import Timeago from 'react-timeago';

class CommunityProfile extends Component {
  componentDidMount() {
    this.props.fetchAllCommunityActivity(this.props.match.params.id);
    this.props.fetchAllGoalsPerCommunity(this.props.match.params.id);
  }

  getActivities = () => {
    const { activity } = this.props;

    if (activity) {
      const activityList = activity.map(activity => {

        if(activity.type === 'joined') {
          return (
            <CollectionItem className='avatar'>
              <img src={activity.avatar_img} alt="" className="circle" />
                <p className = "title left" >
                <a href={`/profile/${activity.usersid}` }>{activity.username}</a> has joined the community.
                </p>
                <br />
                <p className='left'><Timeago date= {activity.time_stamp}/></p>
            </CollectionItem>
          ) 
          } else if(activity.type === 'uploaded') {
          return (
            <CollectionItem className='avatar'>
              <img src={activity.avatar_img} alt="" className="circle" />
                <p className = "title left" >
                <a href={`/profile/${activity.usersid}` }>{activity.username}</a> has uploaded a photo.
                </p>
                <br />
                <p className='left'><Timeago date= {activity.time_stamp}/></p>
            </CollectionItem>
          )
        } else if(activity.type === 'subscribed') {
          return (
            <CollectionItem className='avatar'>
              <img src={activity.avatar_img} alt="" className="circle" />
                <p className = "title left" >
                <a href={`/profile/${activity.usersid}` }>{activity.username}</a> has subscribed to a goal.
                </p>
                <br />
                <p className='left'><Timeago date= {activity.time_stamp}/></p>
            </CollectionItem>
          )
        } else if(activity.type === 'milestone') {
          return (
            <CollectionItem className='avatar'>
              <img src={activity.avatar_img} alt="" className="circle" />
                <p className = "title left" >
                <a href={`/profile/${activity.usersid}` }>{activity.name}</a> has reached the milestone
                </p>
                <br />
                <p className='left'><Timeago date= {activity.time_stamp}/></p>
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
    console.log(this.props)
    let goalsList;
    let imgUrl;
    let communityName;
    if (this.props.match.params.id == 1) {
      imgUrl = 'https://lh3.googleusercontent.com/proxy/St6LIl5bJgeazlZGUlSJKCV0dMSBsyvDlEjFm1-RG14tp9M6m_OouMdNYWznNE_2YeJF2A8s7Y0i7iuUTupvTk_bia_crzi5Bz5d_0W5VwxDTxBSsrvSjDqR7vej0MuTLB-4Qwi3zKP0-8P417gY5pa-ETw=w100-h134-n-k-no'
      communityName = 'Manhattan';
    } else if (this.props.match.params.id == 2) {
      imgUrl = 'https://lh4.googleusercontent.com/proxy/wFzYqDFVO8MdySYztyb0lfZ4X2lGKIRPQfOG0MK4OK-hhu5SMaWioUsLvjH8HFnd2gQrDGM71Cl3vM2hAMOiVFKpg-DC7gzJOgwdaWhFguBOtQIHUD_3HcwEDBuU9WYwiWBWQlWFxgzDFyPWebkJX35u8SA=w100-h134-n-k-no'
      communityName = 'Queens';
    } else if (this.props.match.params.id == 3) {
      imgUrl = 'https://lh4.googleusercontent.com/-gPwo34QaDBQ/W3x_jw9ZYXI/AAAAAAAAIxA/Wvnpd-MzoZg6tn5FgfQ_10GG7Hd6bUs5wCLIBGAYYCw/w100-h134-n-k-no/'
      communityName = 'Bronx';
    } else if (this.props.match.params.id == 4) {
      imgUrl = 'https://lh3.googleusercontent.com/proxy/pFj8y2-5LEdGMGl9Zj29meMpsAuDk9RLtCAk9AWxacqVXuXzkS3iFyCjsjLqpiuPRTI2ELA6kE_JC9bIB9mkCkOrDR7UMortMtdGYd_cG-EtWugRxPhAKiEh7gssc9yG9bklK7duwviO0ogGQNFnKgerUXg=w100-h134-n-k-no'
      communityName = 'Brooklyn';
    } else if (this.props.match.params.id == 5) {
      imgUrl = 'https://lh4.googleusercontent.com/proxy/Shgm80IWPINGqlsPTiFbrYRMrNqCAg8r3xJXS2L_XA2CBXDf7Z_UbwFtj1lU74bDTiP7kpNPHVY49dOY00O8Kj6ZHa8pnMb1RTP37fLHciFjn2r0OdXPRB7dhWMXYe32J5wbh5U6E6n6VCPPATuYbW9u5MU=w100-h134-n-k-no'
      communityName = 'Staten Island';
    }

    if (this.props.community ) {
      goalsList = this.props.community.data.map(goals => {
            return (
              <>
                <CollectionItem>
                  {goals.title}
                  <a href={`/goal/${goals.id}`} className='secondary-content'>
                    <Icon>
                      send
                    </Icon>
                  </a>
                </CollectionItem>
              </>
            )
          })
    } 


    return (
      <div className='community_profile'>
        <Row className='center'>
          {/* Communityside */}
          <Col l={4} className='teal push-l1 black-text'>
            <Collection className='avatar'>
              <CollectionItem> 
                <h5>{communityName}</h5><br />
                <img src={imgUrl} className='circle'></img>
                <h5>About ?</h5>
              </CollectionItem>
              { goalsList }
              <CollectionItem>
                  <Button type="submit" waves="light">
                  <a href={`/goal/commmunity/${this.props.match.params.id}`} className='secondary-content'>
                      <div className='white-text'>
                      Community Goals 
                      <Icon right>
                      send
                      </Icon>
                      </div>
                  </a>
                  </Button>
              </CollectionItem>
            </Collection>
          </Col>
          {/* Activityside */}
          <Col l={5} className='teal offset-l2 black-text'>
            <Collection>
            {this.getActivities()}
            </Collection>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CommunityProfile;