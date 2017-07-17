import React, {Component} from 'react';
import IndexCard from "./IndexCard/IndexCard.jsx";
import Navbar from "./landing/Navbar.jsx";
import Search from "./landing/Search.jsx";
import Filter from "./landing/Filter.jsx"
import Itinerary from "./itinerary/Itinerary.jsx"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      messages: [],
      userCount: []
    }
  }
componentDidMount() {
    fetch('/index')
      .then((res) => res.json())
      .then((cards) => this.setState({ 
        cards: cards 
      })
    );
  }
  render() {
      console.log("Rendering <App />");
    return (
      <div>    
        <Navbar />
        <Search />
        <Filter />
        <IndexCard cards={this.state.cards}/> 
        <Itinerary />
      </div>
    );
  }
}

export default App;
