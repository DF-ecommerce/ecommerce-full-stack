import React from 'react';
import Axios from 'axios';
import Listings from './Listings/Listings.jsx';

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
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
    Axios.put(`/update/${listing}/cart`),
      
  }

  render() {
    return (
      <div id="mainBodyContainer">
        <div id="mainBodyDiv">
          <Listings listingData={this.state.data} />
        </div>
      </div>
    );
  }
}

export default MainBody;
