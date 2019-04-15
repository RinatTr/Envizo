import React, { Component } from 'react';
import Iframe from 'react-iframe';

export const VisualDisplay = () => {

    return(
      <div id="content">
        <Iframe url="https://rinattr.github.io/envizoDemo/"
        width="960px"
        height="500px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
     </div>)
}
