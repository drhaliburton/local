import React, {Component} from 'react';
import ContentContainer from "./ContentContainer.jsx";
import Image from "./Image.jsx";

//Contains
class IndexCard extends Component {
  render() {
    return (
      <div className="card">
        <Image />
        <ContentContainer />
      </div>
    );
  }
}
export default IndexCard;