import React, {Component} from 'react';
import IndexCard from "./card/IndexCard.jsx";
import Navbar from "./landing/Navbar.jsx";
import Search from "./landing/Search.jsx";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      messages: [],
      userCount: []
    }
  }

  render() {
      console.log("Rendering <App />");
    return (
      <div>
        <Navbar />
        <IndexCard /> 
        <Search />
      </div>
    );
  }
}

export default App;
