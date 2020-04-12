import React from 'react';

class CartListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      max: 5,
      min: 0
    };
    this.incrementCounterHandler = this.incrementCounterHandler.bind(this);
    this.decrementCounterHandler = this.decrementCounterHandler.bind(this);
  }

  incrementCounterHandler() {
    console.log('clicked');
    this.setState((prevState) => {
      if (prevState.quantity < 10) {
        return {
          quantity: prevState.quantity + 1
        };
      } else {
        return null;
      }
    });
  }
  decrementCounterHandler() {
    console.log('clicked');
    this.setState((prevState) => {
      if (prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1
        };
      } else {
        return null;
      }
    });
  }

  counterChangeHandler(e) {
    this.setState({ quantity: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.props.inCart.product_image} height="250" width="180" />
        </div>
        <div>
          <p>{this.props.inCart.product_description}</p>
        </div>
        <div>
          <h4>${this.props.inCart.product_price}</h4>
        </div>
        <div>
          <div>
            <button
              onClick={() => {
                this.incrementCounterHandler();
              }}
            >
              +
            </button>
            <input
              value={this.state.quantity}
              onChange={this.counterChangeHandler}
            ></input>
            <button
              onClick={() => {
                this.decrementCounterHandler();
              }}
            >
              -
            </button>
          </div>
          <div>
            <a href='#' onClick={()=> this.props.removeItem(this.props.inCart._id)}>remove item</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CartListing;
