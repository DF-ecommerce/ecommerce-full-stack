import React from 'react';
import CartListing from './CartListing.jsx';

const CartListings = (props) => {
  let total = 0;
  let countTotal = () => {
    for (let i = 0; i < props.inCart.length; i++) {
      total += props.inCart[i].product_price
    }
    total = (Math.ceil(total * 100) / 100)
  }
  countTotal()
  
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

            <div className="totalPrice">Subtotal: </div>
            <div className="totalPrice">{`$${total}`} </div>
  
            <button className="addToCartButton">
              Checkout
            </button>
        </div>
      </div>
    </div>
  );
};

export default CartListings;
