import React, { Component } from 'react';
import IndexCard from "./IndexCard/IndexCard.jsx";
import Search from "./Search.jsx";
import Styles from "../../styles/layout.scss";
import Api from '../../library/api.js';
import Img from 'react-image'
import ReactDOM from 'react-dom';
import Scrollchor from 'react-scrollchor';
import FilterButton from './FilterButton.jsx';

class HomepageIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      allCards: [],
      homepageImage: false,
      filtersVisible: false,
      isRotated: false,
      viewToggleRotated: false,
      linkURL: false,
      linkText: false,
      filters: [
        {
          name: 'Nature',
          icon: 'tree'
        },
        {
          name: 'Shopping',
          icon: 'shopping-bag'
        },
        {
          name: 'Food',
          icon: 'cutlery'
        },
        {
          name: 'Sights',
          icon: 'binoculars'
        }
      ],
      currentFilter: null
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
    if (event) {
      console.log(event);
      Api.get(`/index/locate?find=${event}`)
        .then((cards) => this.setState({
          cards: cards,
          allCards: cards
        })
        );
    }
    const node = document.getElementById('view-all');
    setTimeout(function () { node.scrollIntoView({ behavior: "smooth" }) }, 400);
    this.togglePageView(event);
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
    Api.post('/index/favorite', id)
      .then(() => {
        this.resetCards();
      })
  }

  renderHomePageImage() {
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
  addOne(cardID) {
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
        this.reRenderHomepageCards();
      })
  };

  removeOne(cardID) {
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
      this.reRenderHomepageCards();
    })
  }

  handleFilterClick(index) {
    event.preventDefault();
    const { filters, currentFilter } = this.state;

    if (currentFilter === index) {
      this.resetCards();
      index = null;
    } else {
      this.categoryFilter(filters[index].name);
    }

    this.setState({
      currentFilter: index
    });
  }
  // grab the button with c
  toggleFilters(event) {
    this.setState({
      filtersVisible: !this.state.filtersVisible,
      isRotated: !this.state.isRotated
    });
  }

  togglePageView(event) {
    event.preventDefault
    this.setState({
      viewToggleRotated: !this.state.viewToggleRotated,
      linkURL: !this.state.linkURL,
      linkText: !this.state.linkText
    });
  }

  render() {

    const toggledFilter = this.state.filtersVisible ? 'toggled-filter' : '';
    const rotatedToggle = this.state.isRotated ? '' : 'is-rotated';
    const viewToggleRotated = this.state.viewToggleRotated ? '' : 'is-rotated';
    const pageLink = this.state.linkURL ? '#' : '#view-all';
    const pageLinkText = this.state.linkText ? 'Search' : 'View All';

    const filters = this.state.filters.map((filter, index) => {
      const active = this.state.currentFilter === index;
      return (
        <FilterButton
          key={index}
          id={index}
          active={active}
          handleFilterClick={this.handleFilterClick.bind(this)}
          { ...filter } />
      )
    });

    return (
      <div>
        <Img src={this.state.homepageImage || 'http://i.imgur.com/AYwlpde.jpg'} className="homepage-image" />
        <div className="landing-content">
          <Search locate={this.locationSearch.bind(this)} />
        </div>
         <div className="page-toggle">
          <h1>Skip the lines & tourist traps - discover hidden gems and build a trip itinerary curated by locals.</h1>
          <h2 id="view-all">Browse recommendations, favourite your must-do's and save your map + calendar to view on the fly.</h2>
          <h5 className="toggle-title">{pageLinkText}</h5>
          <span className="toggle-arrow" onClick={this.togglePageView.bind(this)}>
            <Scrollchor animate={{ offset: -58, duration: 1000 }} to={pageLink}><i className={`fa fa-chevron-up ${viewToggleRotated}`}></i></Scrollchor>
          </span>
        </div>
        <div className="columns cards-container has-text-centered">
          <h3 className="column">Recommendations</h3>
        </div>
        <div className="columns has-text-centered">
        <div className="column is-3"></div>
        <div className="column is-6 homepage-filters">
          {filters}
        </div>
        <div className="column is-3"></div>
        </div>
        <IndexCard addOne={this.addOne.bind(this)} removeOne={this.removeOne.bind(this)} cards={this.state.cards} favorite={this.newFavorite.bind(this)} />
      </div>
    );
  }
}

export default HomepageIndex;
