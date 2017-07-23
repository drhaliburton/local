import React, {Component} from 'react';
import IndexCard from "./IndexCard/IndexCard.jsx";
import Search from "./Search.jsx";
import Filter from "./Filter.jsx";
import Styles from "../../styles/layout.scss";
import Api from '../../library/api.js';

class HomepageIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      allCards: []
    }
  }

  componentWillMount() {
    Api.get('/index')
      .then((cardsArr) => this.setState({
        cards: cardsArr,
      })
    );
  }

  componentDidMount() {
    Api.get('/index')
      .then((cardsArr) => this.setState({
        allCards: cardsArr
      })
    );
  }



  locationSearch(event) {
    Api.get(`/index/locate?find=${event}`)
      .then((cards) => this.setState({
        cards: cards
      })
    );
  }

  resetCards() {
    this.setState({
      cards: this.state.allCards
    })
  };

  categoryFilter(category) {
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
  };

  newFavorite(id) {
    Api.post('/index/favorite', id)
  }

  addOne(id){
    var t = Api.post('/index/upvote', id);
    console.log("printing t", t);
  }

  removeOne(id){
    Api.post('/index/downvote', id)
    .then(() => {
      this.setState({
        cards: this.state.allCards
      })
    })
  }

  render() {
    return (
      <div>
        <Search locate={this.locationSearch.bind(this)} />
        <Filter cards={this.state.cards} categoryFilter={this.categoryFilter.bind(this)} resetCards={ this.resetCards.bind(this) } />
        <IndexCard addOne={this.addOne.bind(this)} removeOne={this.removeOne.bind(this)} cards={this.state.cards} favorite={this.newFavorite.bind(this)}/>
      </div>
    );
  }
}

export default HomepageIndex;
