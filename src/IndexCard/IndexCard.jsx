import React, {Component} from 'react';
import ContentContainer from "./ContentContainer.jsx";
import Image from "./Image.jsx";

//Contains
class IndexCard extends Component {
  
  render() {
    const cardsArray = this.props.cards;
    return (
      <div className="cards">
        {cardsArray.map((card) => {
        return <div className="card">
          <Image image={card.image}/>
          <ContentContainer cardContent={card} />
        </div>;
          })
        }
      </div>
    );
  }
}
export default IndexCard;


