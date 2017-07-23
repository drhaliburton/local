import React, {Component} from 'react';
import FavContentContainer from "./FavContentContainer.jsx";
import FavImage from "./FavImage.jsx";
//Contains
class FavCard extends Component {
  render() {
    const cardsArray = this.props.cards;
    return (
      <div className="columns is-multiline cards">
        {
          cardsArray.map((card, index) => {
            return <div key={index} className="column is-one-quarter card">
              <FavContentContainer key={card.id} cardContent={card}/>
            </div>;
          })
        }
      </div>
    );
  }
}
export default FavCard;


