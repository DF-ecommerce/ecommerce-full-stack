import React from 'react';
import Axios from 'axios'
import CartListings from './CartListings.jsx'

class Cart extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      inCart: []
    }
  }
  componentDidMount(){
    this.addToCartHandler()
  }

  addToCartHandler(){
    Axios.get('/cart/incart')
    .then(cart => {
      this.setState({
        inCart: cart.data
      })
    })
  }

  render(){
    console.log('insidecart', this.state)
    return(
      <div id="cartContainer">
      <h1 id='cartTitle'>Your Shopping Cart</h1>
        <div className='cartHeadingContainer'>
          <ul className='cartHeadings'>
            <li>Product</li>
            <li>Description</li>
            <li>Price</li>
            <li>Quantity</li>
          </ul>
        </div>
        <div id="cartList">
          <CartListings inCart={this.state.inCart}/>
        </div>
        
      </div>
    )
  }
}

export default Cart