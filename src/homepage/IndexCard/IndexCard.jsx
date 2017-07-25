import React, { Component } from 'react';
import ContentContainer from "./ContentContainer.jsx";
import NewImage from "./NewImage.jsx";
//Contains
class IndexCard extends Component {
  render() {
    const cardsArray = this.props.cards;
    return (
      <span>
        <div className="columns is-multiline cards">
          {cardsArray.map((card, index) => {
            return <div key={index} className="column is-one-quarter card">
              <ContentContainer cardID={card.id} cardContent={card} addOne={this.props.addOne} removeOne={this.props.removeOne} favorite={this.props.favorite} />
            </div>;
          })
          }
        </div>
      </span>
    );
  }
}
export default IndexCard;


