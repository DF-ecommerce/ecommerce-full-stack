import React from 'react';
import MainBody from './MainBody/MainBody.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Cart from './Cart/Cart.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'mainBody'
    }
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(display){
    if(display === "mainBody"){
      this.setState({
        display: 'mainBody'
      })
    }
    if(display === "cart"){
      this.setState({
        display: 'cart'
      })
    }
  }

  renderBodyHandler(){
    const {display} = this.state
    if(display === 'mainBody'){
      return <div><MainBody /></div>
    }
    if(display === 'cart'){
      return <div><Cart /></div>
    }
  }

  render() {
    return (
      <div>
        <NavBar onClickHandler={this.onClickHandler}/>
        {/* display body or cart */}
        {this.renderBodyHandler()}
        <Footer />
      </div>
    );
  }
};

export default App;
