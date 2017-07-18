import React, {Component} from 'react';
import Star from "./Star.jsx";
import DetailToggle from "./DetailToggle.jsx";
import Content from "./Content.jsx";

//Contains
class ContentContainer extends Component {
  render() {
    var card = this.props.cardContent;
    console.log(card);
    return (
      <div className="content-container">
        <DetailToggle/>
        <Star />
        <Content title={card.title} description={card.description} location={card.location} type={card.type} duration={card.duration} />
      </div>
    );
  }
}
export default ContentContainer;

