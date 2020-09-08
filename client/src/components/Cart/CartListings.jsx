import React from 'react';
import CartListing from './CartListing.jsx';

const CartListings = (props) => {
  return (
    <div>

      <div>
      {props.inCart.map((inCartProduct, index) => (
        <CartListing
          key={inCartProduct._id}
          inCart={inCartProduct}
          removeItem={props.removeItem}
          index={index}
        />
      ))}
      </div>

        <div id="checkoutButtonContainer">
        <button id="addToCartButton">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartListings;
