import React from 'react';

const Listings = (props) => {
  return (
    <div>
      <h3>{props.listingData.product_name}</h3>
      <img src={props.listingData.product_image} height="400" width="350" />
      <h4> Product Description:</h4>
      <p>{props.listingData.product_description}</p>
      <h4>Price: ${props.listingData.product_price}</h4>
    </div>
  );
};

export default Listings;
