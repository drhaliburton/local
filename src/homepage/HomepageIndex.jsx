import React, {Component} from 'react';
import IndexCard from "./IndexCard/IndexCard.jsx";
import Search from "./Search.jsx";
import Filter from "./Filter.jsx";
// import ItineraryIndex from "./itinerary/ItineraryIndex.jsx"

class HomepageIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
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
        <Search />
        <Filter />
        <IndexCard cards={this.state.cards}/> 
      </div>
    );
  }
}

export default HomepageIndex;
