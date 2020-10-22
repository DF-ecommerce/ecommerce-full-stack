import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.searchInputHandler = this.searchInputHandler.bind(this);
  }

  searchInputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  render() {
    return (
      <div>
        <input
          id="searchBarInput"
          size="75" // couldn't get input sizing to work so in-line css for temp. solution
          onChange={this.searchInputHandler}
          type="text"
          name="query"
          placeholder="Search Products"
        ></input>
        <button id="searchButtonSubmit">Search</button>
      </div>
    );
  }
}
