import React, {Component} from 'react';
import ContentContainer from "./ContentContainer.jsx";
import NewImage from "./NewImage.jsx";
//Contains
class IndexCard extends Component {
  render() {
    const cardsArray = this.props.cards;
    return (
      <div className="columns is-multiline cards">
        <h1>Favourites</h1>
        {cardsArray.map((card, index) => {
          console.log(card);
          return <div key={index} className="column is-one-quarter card">
              <ContentContainer cardID={card.id} cardContent={card} addOne={this.props.addOne} removeOne={this.props.removeOne} favorite={this.props.favorite} />
            </div>;
          })
        }
      </div>
    );
  }
}
export default IndexCard;


