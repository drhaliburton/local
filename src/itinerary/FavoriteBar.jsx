import React, {Component} from 'react';
import FavCard from "./FavCard.jsx";

//Contains
class FavoriteBar extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <FavCard />
          </div>
        </div>
      </footer>
    );
  }
}
export default FavoriteBar;