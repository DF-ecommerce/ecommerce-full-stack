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
      <p id="ListingPromotion">Original Price: ${(props.data.product_price * 1.50).toFixed(2)}</p>
      <p id="ListingShipping">Free shipping on orders $1+</p>
      <button id="addToCartButton" onClick={()=> props.addToCart(props.data._id)}>Add to Cart</button>
      <button id="showReviewsButton"
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
