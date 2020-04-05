import React from 'react';
import Review from './Review.jsx';

const Reviews = (props) => {
  return (
    <div>
      <h4>Reviews</h4>
      {props.reviews.map((review) => {
        return <Review key={review._id} review={review} />;
      })}
    </div>
  );
};

export default Reviews;
