import React, { useState } from 'react';
import Reviews from '../Reviews/Reviews.jsx';

const Listing = (props) => {
  const [showReviews, setShowReviews] = useState(false);
  return (
    <div className={`ListingDiv`}>
      <img id="ListingImg" src={props.data.product_image}/>
      <p id="ListingName">{props.data.product_name}</p>
      <p id="ListingDescription">{props.data.product_description}</p>
      <p id="ListingPrice">Price: ${props.data.product_price}</p>
      <p id="ListingShipping">Free shipping on orders $25+</p>
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
