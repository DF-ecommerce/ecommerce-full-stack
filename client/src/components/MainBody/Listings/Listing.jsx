import React, { useState } from 'react';
import Reviews from '../Reviews/Reviews.jsx';

const Listing = (props) => {
  const [showReviews, setShowReviews] = useState(false);
  return (
    <div className="ListingDiv">
      <div className="mainProductContent">

        <img className="ListingImg" src={props.data.product_image} />


        <div className="productDescriptionContainer">
          <p className="ListingName">{props.data.product_name}</p>
          <p className="ListingPrice">Price: ${props.data.product_price}</p>
          <p className="ListingPromotion">
            Original Price: ${(props.data.product_price * 1.5).toFixed(2)}
          </p>
          <p className="ListingShipping">Free shipping on orders $1+</p>
        </div>


        <div className="productButtonsContainer">
          <button
            className="addToCartButton"
            onClick={() => props.addToCart(props.data._id)}
          >
            Add to Cart
          </button>
          <select className="showReviewsButton">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>


      </div>
    </div>
  );
};

export default Listing;

// Show reviews button (deprecated in favor for quantity)
{/* <button
id="showReviewsButton"
onClick={() => {
  setShowReviews(!showReviews);
}}
>
{showReviews ? 'Hide Review' : 'Show Reviews'}
</button> 
<div id="reviewContainer">
{showReviews && <Reviews reviews={props.data.product_reviews || []} />}
</div>
*/}


//           <p className="ListingDescription">{props.data.product_description}</p>