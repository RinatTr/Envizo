import React from 'react';

const SubscribeCount = (props) => {
  let { count } = props;
  return (
    <span>{ count } Subscribers</span>
  )
}

export default SubscribeCount;