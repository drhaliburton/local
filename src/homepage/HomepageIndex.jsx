import React, {Component} from 'react';
import IndexCard from "./IndexCard/IndexCard.jsx";
import Search from "./Search.jsx";
import Filter from "./Filter.jsx";
import Styles from "../../styles/layout.scss";

class HomepageIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      allCards: []
    }
  }

  componentWillMount() {
    fetch('/index')
      .then((res) => res.json())
      .then((cards) => this.setState({ 
        cards: cards,
        allCards: cards
      })
    );
  }

  resetCards() {
    this.setState({
      cards: this.state.allCards
    })
  }

  categoryFilter(category) {
    if (this.state.cards !== this.state.allCards) {
      this.resetCards();
    } else {
      let cards = this.state.allCards;
      let filteredCards = [];
      cards.map((card) => {
        if (card.category === category) {
          filteredCards.push(card);
        }
      })
      this.setState({
        cards: filteredCards
      });
    }
  }
  
  render() {
    return (
      <div>    
        <Search />
        <Filter cards={this.state.cards} categoryFilter={this.categoryFilter.bind(this)}/>
        <IndexCard cards={this.state.cards}/> 
      </div>
    );
  }
}

export default HomepageIndex;
