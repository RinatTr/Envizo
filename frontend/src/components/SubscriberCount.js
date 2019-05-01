import React from 'react';

const SubscribeCount = (props) => {
  let { count } = props;
  return (
    <div className='sub-count'>
      <span>{ count }</span>
      <span className='text-count'>Subscribers</span>
    </div>
  )
}

export default SubscribeCount;
