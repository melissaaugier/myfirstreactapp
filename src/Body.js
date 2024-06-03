import React from 'react';
import StarRating from './StarRating';

function Body(props) {
  return(
    <div>
      <div className='quote'>&ldquo;&nbsp;{props.comment}&nbsp;&rdquo;</div>
      <p className='my-20 text-right'>< StarRating rating={props.rating} showRating={true} /></p>
    </div>
  );
}

export default Body;