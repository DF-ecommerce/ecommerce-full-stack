import React from 'react';

const Footer = () => {
  return (
    <div className="footerMainContainer">
      <span id="footerLogo" href="#"> D&F </span>

      <div id="footerTextContainer">
        <ul id="footerTextColumn">
          <li>Home</li>
          <li>About</li>
          <li>Account</li>
        </ul>

      <ul id="footerTextColumn">
        <li>Customer Support</li>
        <li>Refund Policy</li>
        <li>Sales Tax</li>
      </ul>

      <ul id="footerTextColumn">
        <li>Help Center</li>
        <li>Privacy Settings</li>
        <li>Gift Cards</li>
      </ul>

      <ul id="footerTextColumn">
        <li>Project Commenced on</li>
        <li>March 25, 2020</li>
        <li>By Danny San & Frankie Liu</li>
      </ul>
      </div>

    </div>
  );
};

export default Footer;


// <li id="footerLineTwo">About TEST TEST TEST</li>
// <li id="footerLineThree">Account Center TEST TEST TEST</li>