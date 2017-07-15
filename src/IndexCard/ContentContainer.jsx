import React, {Component} from 'react';
import Star from "./Star.jsx";
import DetailToggle from "./DetailToggle.jsx";
import Content from "./Content.jsx";

//Contains
class ContentContainer extends Component {
  render() {
    return (
      <div className="content-container">
        <DetailToggle/>
        <Star />
        <Content />
      </div>
    );
  }
}
export default ContentContainer;