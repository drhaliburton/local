import React, {Component} from 'react';
import FavCard from "./FavCard/FavCard.jsx";

//Contains
class FavoriteBar extends Component {
  render() {
    return (
    <div className="favorites-container">
      <FavCard cards={this.props.favCards}/>
    </div>
    );
  }
}
export default FavoriteBar;



