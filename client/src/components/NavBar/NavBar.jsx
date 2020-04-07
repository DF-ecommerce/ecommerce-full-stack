import React from 'react';

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

  searchButtonHandler(e) {}

  render() {
    console.log(this.state.search);
    return (
      <div id="topNavDiv">
        <div id="search">
          <form>
            <input
              onChange={this.searchInputHandler}
              type="text"
              name="search"
              value={this.state.search}
              placeholder="Search Products"
            ></input>
            <button>Search</button>
          </form>
        </div>

        <div id="mainNav">
          <ul>
            <li>
              <a id="logo">D&F</a>
            </li>
            <li>
              <a id="accountNav">Sign-out </a>
            </li>
            <li>
              <a id="accountNav">Account </a>
            </li>
            <li>
              <a id="accountNav">Cart</a>
            </li>
          </ul>
        </div>

        <div id="subNav">
          <ul id="horizontal-list">
            <li>
              <a>Shop by Department:</a>
            </li>
            <li>
              <a>Men</a>
            </li>
            <li>
              <a>Women</a>
            </li>
            <li>
              <a>Shoes</a>
            </li>
            <li>
              <a>Accessories</a>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default NavBar;
