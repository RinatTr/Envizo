import React from 'react';
import '../css/puzzle.css';
// import Gallery from 'react-photo-gallery';
// var reactPhotoGallery = require("react-photo-gallery");

const Puzzle = ({submissions}) => {
  let mapSubs = [];
  // 500 - target value
  for (let i = 0; i < 500; i++ ) {
    if (i < submissions.length) {
      mapSubs.push(<div className="sub-img-wrapper"><img className="user-sub-img" src={submissions[i].img_url} alt="puzzle piece"/></div>)
    } else {
      mapSubs.push(<div className="sub-img-wrapper" key={i} ></div>)
    }
  }

  return (<div className="container-puzzle">{mapSubs.reverse()}</div>)
}

export default Puzzle;
