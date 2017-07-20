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
      cards: []
    }
  }
  
  componentDidMount() {
    Api.get('/index')
      .then((cards) => this.setState({ 
        cards: cards 
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

  newFavorite(id) {
    Api.post('/index/favorite', id)
  }
  
  render() {
    return (
      <div>
  
        <Filter cards={this.state.cards}/>  
        <Search locate={this.locationSearch.bind(this)} />
        <IndexCard cards={this.state.cards} favorite={this.newFavorite.bind(this)}/> 
      </div>
    );
  }
}

export default HomepageIndex;
