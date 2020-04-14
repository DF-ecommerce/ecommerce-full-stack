import React from 'react';
import CartListing from './CartListing.jsx';

const CartListings = (props) => {
  return (
    <div>
      {props.inCart.map((inCartProduct) => (
        <CartListing
          key={inCartProduct._id}
          inCart={inCartProduct}
          removeItem={props.removeItem}
        />
      ))}
    </div>
  );
};

export default CartListings;
