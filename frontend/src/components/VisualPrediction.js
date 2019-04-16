import React from 'react'
import '../css/VisualPrediction.css'



export const VisualPrediction = (props) => {
  let garb = Math.floor(props.result);
  let garbImg = [];

  if(props.type==="Recycle"){
    for(let i = 0; i < garb; i++){
      garbImg.push(<img id='garbage' key={i} src="http://www.stickpng.com/assets/images/5c434bffe39d5d01c21da941.png" alt="paper"/>)
    }
  }else if(props.type==="Reusable Grocery Bag"){
    console.log('lol');
  }else if(props.type==="Drink Tap Water"){
    console.log('keke');
  }else{
    return null
  }

  return (
    <div className='VisualWrapper'>
    <img id='people'src='https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7b04bebafb337899961d/58ab7b16725e25c4fac43d33/1487647075724/NS_0010.png' alt='people'/>
    <div id='garbageList'>
    {garbImg}
    </div>
    </div>
  )
}
