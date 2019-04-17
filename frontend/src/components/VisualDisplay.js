import React, { Component } from 'react';
import Iframe from 'react-iframe';

export const VisualDisplay = () => {

    return(
      <div id="content">
        <Iframe url="https://rinattr.github.io/envizoDemo/"
        width="740px"
        height="640px"
        id="myId"
        className="iframe-visual"
        display="initial"
        position="relative"
        allowFullScreen/>
     </div>)
}
