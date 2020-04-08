import React, { useState } from 'react';
import Reviews from '../Reviews/Reviews.jsx';

const Listing = (props) => {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div className="ListingDiv">
      <h3>{props.data.product_name}</h3>
      <img src={props.data.product_image} height="400" width="300"/>
      <h4>Product Description</h4>
      <p>{props.data.product_description}</p>
      <h4>Price: ${props.data.product_price}</h4>
      <button>Add To Cart</button>
      <button
        onClick={() => {
          setShowReviews(!showReviews);
        }}
      >
        {showReviews ? "Hide Review" : "Show Reviews"}
      </button>
      {showReviews && <Reviews reviews={props.data.product_reviews || []} />}
    </div>
  );
};

export default Listing;
