import React, {Component} from 'react';
import IndexCard from "./IndexCard/IndexCard.jsx";
import Search from "./Search.jsx";
import Filter from "./Filter.jsx";

const testCards = [ {
     title: "Food Place",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "here",
     type: "food",
     duration: 120,
     start_time: "11:00am"
   }, {
     title: "Hike Time",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "There",
     type: "outdoors",
     duration: 180,
     start_time: "1:00pm"
   }, {
     title: "Art Place",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }
];

class HomepageIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }
  componentDidMount() {
    fetch('/')
      .then((res) => res.json())
      .then((cards) => this.setState({ 
        cards: cards 
      })
    );
  }
  
  render() {
    return (
      <div>    
        <Search />
        <Filter cards={this.state.cards}/>
        <IndexCard cards={this.state.cards}/> 
      </div>
    );
  }
}

export default HomepageIndex;
