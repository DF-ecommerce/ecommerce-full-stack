import React from 'react';

const CartListing = (props) => {
  return (
    <div>
      <div>
        <img src={props.inCart.product_image} height="250" width="180" />
      </div>
      <div>
        <p>{props.inCart.product_description}</p>
      </div>
      <div>
        <h4>${props.inCart.product_price}</h4>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default CartListing;
