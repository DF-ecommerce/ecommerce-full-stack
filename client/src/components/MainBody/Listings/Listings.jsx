import React from 'react';
import Listing from './Listing.jsx';

const Listings = (props) => {
  return (
    <div id="ListingsDiv">
      {props.listingData.map((item) => (
        <Listing key={item._id} data={item} addToCart={props.addToCart}/>
      ))}
    </div>
  );
};

export default Listings;
