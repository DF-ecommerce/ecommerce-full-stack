import React from 'react';
import MainBody from './MainBody/MainBody.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
 

  render() {

    return (
      <div>
        <MainBody />
      </div>
    );
  }
}

export default App;
