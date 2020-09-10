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

        <div id="checkoutSummaryContainer">
          <div id="checkoutSummaryJustify">

            <div id="totalPrice">Subtotal: </div>
            <div id="totalPrice">$1120 </div>
  
            <button id="checkoutButton">
              Checkout
            </button>
        </div>
      </div>
    </div>
  );
};

export default CartListings;
