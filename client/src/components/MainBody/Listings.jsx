import React from 'react';
import Listing from './Listing.jsx';

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="ListingsDiv">
        {this.props.listingData.map((item) => (
          <Listing key={item._id} data={item} />
        ))}
      </div>
    );
  }
}

export default Listings;
