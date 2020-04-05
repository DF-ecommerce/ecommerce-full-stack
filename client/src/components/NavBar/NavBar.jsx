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

  searchButtonHandler(e){
    
  }

  render() {
    console.log(this.state.search)
    return (
      <div id="navBar">
        <h2>NAV BAR</h2>
        <form >
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
    );
  }
}

export default NavBar;
