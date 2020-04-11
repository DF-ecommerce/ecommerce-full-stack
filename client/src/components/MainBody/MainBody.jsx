import React from 'react';
import Axios from 'axios';
import Listings from './Listings/Listings.jsx';

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.addToCartHandler = this.addToCartHandler.bind(this)
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    Axios.get('/main/data')
      .then((data) => {
        this.setState({
          data: data.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Add to cart function
  addToCartHandler(listing) {
    Axios.put(`/cart/${listing}/updatecart`,
    {in_cart: true})
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div id="mainBodyContainer">
        <div id="mainBodyDiv">
          <Listings listingData={this.state.data} addToCart={this.addToCartHandler}/>
        </div>
      </div>
    );
  }
}

export default MainBody;
