import React, {Component} from 'react';
import FavContentContainer from "./FavContentContainer.jsx";
import FavImage from "./FavImage.jsx";
//Contains
class FavCard extends Component {
  add(event){
  }
  render() {
    const cardsArray = this.props.cards;
    return (
      <span>
        {
          cardsArray.map((card, index) => {
            return <div key={index} className="card">
              <FavContentContainer key={card.id}  add={this.props.add.bind(this)} cardContent={card}/>
            </div>;
          })
        }
      </span>
    );
  }
}
export default FavCard;


