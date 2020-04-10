import React from 'react';

const Footer = () => {
  return (
    <div className="footerContainer">
      <span id="footerLogo" href="#"> D&F </span>

      <div id="footerTextContainerOne">
        <ul id="footerUlWrapper">
          <li>Home</li>
          <li>About</li>
          <li>Account</li>
        </ul>
      </div>

      <div id="footerTextContainerTwo">
      <ul>
        <li>Customer Support</li>
        <li>Refund Policy</li>
        <li>Sales Tax</li>
      </ul>
    </div>
    </div>
  );
};

export default Footer;


// <li id="footerLineTwo">About TEST TEST TEST</li>
// <li id="footerLineThree">Account Center TEST TEST TEST</li>