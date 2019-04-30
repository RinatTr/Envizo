import React from 'react';
import { Badge } from 'react-materialize';

const SubscribeCount = (props) => {
  let { count } = props;
  return (
    <Badge className='blue darken-4 white-text'>
      { count } Subscribers
    </Badge>
  )
}

export default SubscribeCount;