import React from 'react';

class Cart extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      inCart: []
    }
  }

  addToCartHandler(item){
    this.state.inCart.push(item)
  }

  render(){
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
          <p>cart list component will go here</p>
        </div>
        
      </div>
    )
  }
}

export default Cart