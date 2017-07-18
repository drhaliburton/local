import React, {Component} from 'react';
import IndexCard from "./IndexCard/IndexCard.jsx";
import Search from "./Search.jsx";
import Filter from "./Filter.jsx";
import Styles from "../../styles/layout.scss";

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
