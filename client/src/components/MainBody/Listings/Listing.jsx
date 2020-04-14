import React, { useState } from 'react';
import Reviews from '../Reviews/Reviews.jsx';

const Listing = (props) => {
  const [showReviews, setShowReviews] = useState(false);
  return (
    <div className={`ListingDiv`}>
      <div id="mainProductContent">
        <img id="ListingImg" src={props.data.product_image} />
        <div id="productDescriptionContainer">
          <p id="ListingName">{props.data.product_name}</p>
          <p id="ListingDescription">{props.data.product_description}</p>
          <p id="ListingPrice">Price: ${props.data.product_price}</p>
          <p id="ListingPromotion">
            Original Price: ${(props.data.product_price * 1.5).toFixed(2)}
          </p>
          <p id="ListingShipping">Free shipping on orders $1+</p>
        </div>
        <div id="productButtonsContainer">
          <button
            id="addToCartButton"
            onClick={() => props.addToCart(props.data._id)}
          >
            Add to Cart
          </button>
          <button
            id="showReviewsButton"
            onClick={() => {
              setShowReviews(!showReviews);
            }}
          >
            {showReviews ? 'Hide Review' : 'Show Reviews'}
          </button>
        </div>
      </div>
      <div id="reviewContainer">
        {showReviews && <Reviews reviews={props.data.product_reviews || []} />}
      </div>
    </div>
  );
};

export default Listing;
