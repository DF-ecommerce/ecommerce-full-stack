import React from 'react';
// import {Input} from 'antd'
// import 'antd/dist/antd.css';
// const {Search} = Input;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.searchInputHandler = this.searchInputHandler.bind(this);
  }

  searchInputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  searchButtonHandler() {
    
    console.log("clicked")
  }

  render() {
    console.log(this.state.search);
    return (
      <div id="topNavContainer">
        <div id="mainNav">
          <div id="searchBarContainer">
            <form onSubmit={this.searchButtonHandler}>
              <input id="searchBarInput"
                size="75" // couldn't get input sizing to work so in-line css for temp. solution
                onChange={this.searchInputHandler}
                type="text"
                name="query"
                placeholder="Search Products"
              ></input>
              <button id="searchButtonSubmit">Search</button>
            </form>
            {/* <Search placeholder="Search Products" onSearch={this.searchButtonHandler} enterButton /> */}
          
          </div>
          <ul>
            <li >
              <a id="logo" onClick={() => this.props.onClickHandler('mainBody')}>D&F</a>
            </li>
            <li>
              <a className="accountNav">Sign-out</a>
            </li>
            <li>
              <a className="accountNav">Account</a>
            </li>
            <li id='cartIcon' >
              <a className="accountNav" onClick={() => this.props.onClickHandler('cart')}>Cart</a>
            </li>
          </ul>

          
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
