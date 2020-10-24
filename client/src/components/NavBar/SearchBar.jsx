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
    }, ()=>console.log(this.state));
  }


  render() {
    return (
    <form id="searchBar_form">
        <input
          id="searchBarInput"
        //   size="75" // couldn't get input sizing to work so in-line css for temp. solution
          onChange={this.searchInputHandler}
          type="text"
          name="query"
          placeholder="Type to search products"
        ></input>
        <button id="searchButtonSubmit" type="submit" onSubmit={this.props.searchButtonHandler}>Search</button>
      </form>
    );
  }
}
