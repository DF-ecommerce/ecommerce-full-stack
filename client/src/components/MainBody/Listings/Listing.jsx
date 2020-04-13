import React, { useState } from 'react';
import Reviews from '../Reviews/Reviews.jsx';

const Listing = (props) => {
  const [showReviews, setShowReviews] = useState(false);
  return (
    <div className="ListingDiv">
      <img id="ListingImg" src={props.data.product_image}/>
      <h3><strong>{props.data.product_name}</strong></h3>
      <p>{props.data.product_description}</p>
      <h4><strong>Price: ${props.data.product_price}</strong></h4>
      <button onClick={()=> props.addToCart(props.data._id)}>Add To Cart</button>
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
