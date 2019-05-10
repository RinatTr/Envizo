import React from 'react';
import '../css/puzzle.css';
let imgUrl = "https://trello-attachments.s3.amazonaws.com/5ca1ffec97ca8169c9c3b9b6/512x512/3fe908db8c69290d251c7ea6d9cceb9b/2992451-512.png"
// import Gallery from 'react-photo-gallery';
// var reactPhotoGallery = require("react-photo-gallery");

const Puzzle = ({submissions, isCompleted}) => {
  let mapSubs = [];
  let node;

  if (isCompleted) {
    node = <div>
              <h4 className="center" id="bold-green">Congratulations! Goal Completed</h4>
              <div className="wrapper-grats">
                <img alt="congrats" src={imgUrl}></img>
              </div>
            </div>
  } else {
    for (let i = 0; i < 500; i++ ) {
      if (i < submissions.length) {
        mapSubs.push(<div className="sub-img-wrapper"><img className="user-sub-img" src={submissions[i].img_url} alt="puzzle piece"/></div>)
      } else {
        mapSubs.push(<div className="sub-img-wrapper" key={i} ></div>)
      }
    }
  }

  return (isCompleted ? node : <div className="container-puzzle">{mapSubs.reverse()}</div>)
}

export default Puzzle;
