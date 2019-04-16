import React, { Component } from 'react';

class SubscribeCount extends Component {

  render() {
    let { subscribers } = this.props;
    return (
      <span>{subscribers} Subscribers</span>
    )
  }
}

export default SubscribeCount;