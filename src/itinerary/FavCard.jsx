import React, {Component} from 'react';
import Image from "../IndexCard/Image.jsx";

//Contains
class FavCard extends Component {
  
  render() {
    const cardsArray = this.props.cards;
    return (
      <div className="columns is-multiline cards">
        {cardsArray.map((card) => {
        return <div className="column is-one-quarter card">
          <Image image={card.image}/>
        </div>;
          })
        }
      </div>
    );
  }
}
export default FavCard;


