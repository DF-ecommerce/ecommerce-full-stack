import React from 'react';
import Axios from 'axios';
import CartListings from './CartListings.jsx';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: [],
    };
    this.removeItemHandler = this.removeItemHandler.bind(this)
  }
  componentDidMount() {
    this.addToCartHandler();
  }

  addToCartHandler() {
    Axios.get('/cart/incart').then((cart) => {
      this.setState({
        inCart: cart.data
      });
    });
  }

  removeItemHandler(item){
    console.log('removeItem item', item)
    Axios.put(`/cart/${item}/removefromcart`,
    {in_cart: false})
    .then(res => {
      this.componentDidMount()
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div id="cartContainer">
        <h1 id="cartTitle">Your Shopping Cart</h1>
        
        <div id="cartComponentContainer">
          <ul className="cartHeadings">
            <li>Product</li>
            <li>Description</li>
            <li>Price</li>
            <li>Quantity</li>
          </ul>
        </div>
        <div>

          
        <CartListings
            inCart={this.state.inCart}
            incrementCounter={this.incrementCounterHandler}
            decrementCounter={this.decrementCounterHandler}
            counterChange={this.counterChangeHandler}
            counter={this.state.quantity}
            removeItem={this.removeItemHandler}
          />
        </div>
      </div>
    );
  }
}

export default Cart;
