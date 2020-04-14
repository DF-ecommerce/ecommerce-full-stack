import React from 'react';
// import {Input} from 'antd'
// import 'antd/dist/antd.css';
// const {Search} = Input;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
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
          <div id="searchBar">
            <form onSubmit={this.searchButtonHandler}>
              <input 
                size="75" // couldn't get input sizing to work so in-line css for temp. solution
                onChange={this.searchInputHandler}
                type="text"
                name="search"
                value={this.state.search}
                placeholder="Search Products"
                
              ></input>
              <input type="submit" value="Search"/>
            </form>
            {/* <Search placeholder="Search Products" onSearch={this.searchButtonHandler} enterButton /> */}
          
          </div>
          <ul>
            <li >
              <a id="logo" onClick={() => this.props.onClickHandler('mainBody')}>D&F</a>
            </li>
            <li>
              <a className="accountNav">Sign-out </a>
            </li>
            <li>
              <a className="accountNav">Account </a>
            </li>
            <li id='cartIcon' >
              <a className="accountNav" onClick={() => this.props.onClickHandler('cart')}>Cart</a>
            </li>
          </ul>

          
        </div>

        <div id="subNav">
          <ul id="horizontal-list">
            <li>
              <a href="#">Shop by Department:</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Kids & Baby</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shoes</a>
            </li>
            <li>
              <a href="#">Furniture</a>
            </li>
            <li>
              <a href="#">Bed</a>
            </li>
            <li>
              <a href="#">Bath</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
