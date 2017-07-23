import React, {Component} from 'react';
import IndexCard from "./IndexCard/IndexCard.jsx";
import Search from "./Search.jsx";
import CardView from "./CardView.jsx";
import Styles from "../../styles/layout.scss";
import Api from '../../library/api.js';
import Img from 'react-image'


class HomepageIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      allCards: [],
      homepageImage: 'http://i.imgur.com/AYwlpde.jpg'
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
      cards: filteredCards,
    });
  };

  newFavorite(id) {
    Api.post('/index/favorite', id)
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

  render() {
    return (
      <div>
        <div className="landing-content">
        <Img src={this.state.homepageImage} className="homepage-image"/>
        <Search locate={this.locationSearch.bind(this)} />
        </div>
         <CardView cards={this.state.cards} categoryFilter={this.categoryFilter.bind(this)} resetCards={ this.resetCards.bind(this) } />
        <IndexCard cards={this.state.cards} favorite={this.newFavorite.bind(this)}/>
      </div>
    );
  }
}

export default HomepageIndex;
