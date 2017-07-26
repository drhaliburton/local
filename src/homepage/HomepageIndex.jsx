import React, {Component} from 'react';
import IndexCard from "./IndexCard/IndexCard.jsx";
import Search from "./Search.jsx";
import CardView from "./CardView.jsx";
import Styles from "../../styles/layout.scss";
import Api from '../../library/api.js';
import Img from 'react-image'
import ReactDOM from 'react-dom';

class HomepageIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      allCards: [],
      homepageImage: false
    }
  }

  componentWillMount() {
    Api.get('/index')
      .then((cardsArr) => this.setState({
        cards: cardsArr,
      })
    );
    this.renderHomePageImage();
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
        cards: cards,
        allCards: cards
      })
    );
    const node = document.getElementById('view-all');
    setTimeout(function(){node.scrollIntoView({ behavior: "smooth" })}, 200);
  }

  resetCards() {
    this.setState({
      cards: this.state.allCards
    })
  };

  reRenderHomepageCards() {
    Api.get('/index')
      .then((cardsArr) => this.setState({
        cards: cardsArr,
      })
    );
  }

  categoryFilter(category) {
    let cards = this.state.allCards;
    let filteredCards = [];
    cards.map((card) => {
      if (card.category === category) {
        filteredCards.push(card);
      }
    })
    this.setState({
      cards: filteredCards,
    });
  };

  newFavorite(id) {
    console.log(id)
    Api.post('/index/favorite', id)
      .then(() => {
        this.resetCards();
    })
  }

 renderHomePageImage(){
    let images = {
      1: 'http://i.imgur.com/AYwlpde.jpg',
      2: 'http://i.imgur.com/W399SYI.jpg',
      3: 'http://i.imgur.com/tBNrHVE.jpg',
      4: 'http://i.imgur.com/9voihyL.jpg',
      5: 'http://i.imgur.com/13R59WI.jpg',
      6: 'http://i.imgur.com/tdiyFfG.jpg',
      7: 'http://i.imgur.com/iyzC6fn.jpg'
    }
    let randomInt = Math.ceil(Math.random() * 7);
    let image = images[randomInt];
    this.setState({
      homepageImage: image
    })

  }
  addOne(cardID){
    event.preventDefault();
    fetch('/index/upvote', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardID: cardID
      })
    })
    .then(() => {
      console.log('Added vote');
      this.reRenderHomepageCards();
    })
  };


  removeOne(cardID){
    event.preventDefault();
      fetch('/index/downvote', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardID: cardID
        })
      }).then(() => {
        console.log('Removed vote!');
      this.reRenderHomepageCards();
      })
    }

  render() {
    console.log(this.state.cards);
    return (
      <div>
        <div className="landing-content">
        <Img src={this.state.homepageImage || 'http://i.imgur.com/AYwlpde.jpg'} className="homepage-image"/>
        <Search locate={this.locationSearch.bind(this)} />
        </div>
        <CardView cards={this.state.cards} favorite={this.newFavorite.bind(this)} categoryFilter={this.categoryFilter.bind(this)} resetCards={ this.resetCards.bind(this) } />
        <IndexCard addOne={this.addOne.bind(this)} removeOne={this.removeOne.bind(this)} cards={this.state.cards} favorite={this.newFavorite.bind(this)}/>
      </div>
    );
  }
}

export default HomepageIndex;
