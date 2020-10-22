import React from 'react';
import SearchBar from './SearchBar.jsx'
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.searchInputHandler = this.searchInputHandler.bind(this);
    this.searchButtonHandler = this.searchButtonHandler.bind(this);
  }

  searchInputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  searchButtonHandler() {
    console.log("search button clicked")
  }

  render() {
    return (
      <div id="topNavContainer">
        <div id="mainNav">

        <div class="logo_wrapper">
            <a id="logo" onClick={() => this.props.onClickHandler('mainBody')}>D&F</a>
        </div>

          <div class="searchBarContainer">
            <SearchBar searchButtonHandler={this.searchButtonHandler}/>
          </div>

          <nav class="userPanel_wrapper">
              <a className="accountNav" onClick={() => this.props.onClickHandler('cart')}>Cart</a>
              <a className="accountNav">Account</a>
              <a className="accountNav">Sign-out</a>
          </nav>
          
        </div>

        <div id="subNav">
          <ul id="horizontal-list">
            <li>
              <a href="#" id="navCategoryItem">Shop by Department:</a>
            </li>
            <li>
              <a href="#" id="navCategoryItem">Men</a>
            </li>
            <li>
              <a href="#" id="navCategoryItem">Women</a>
            </li>
            <li>
              <a href="#" id="navCategoryItem">Kids & Baby</a>
            </li>
            <li>
              <a href="#" id="navCategoryItem">Home</a>
            </li>
            <li>
              <a href="#" id="navCategoryItem">Shoes</a>
            </li>
            <li>
              <a href="#" id="navCategoryItem">Furniture</a>
            </li>
            <li>
              <a href="#" id="navCategoryItem">Bed</a>
            </li>
            <li>
              <a href="#" id="navCategoryItem">Bath</a>
            </li>
            <li>
              <a href="#" id="navCategoryItem">Accessories</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
