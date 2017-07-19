import React, {Component} from 'react';
import ContentContainer from "./ContentContainer.jsx";
//Contains
class IndexCard extends Component {


  
  render() {
    const cardsArray = this.props.cards;
    return (
      <div className="columns is-multiline cards">
        {cardsArray.map((card) => {
          return <div className="column is-one-quarter card">
              <ContentContainer cardContent={card} />
            </div>;
          })
        }
      </div>
    );
  }
}
export default IndexCard;


