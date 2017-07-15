import React, {Component} from 'react';
//Contains
class IndexCard extends Component {
  render() {
    return (
      <div className="card">
        <span className="card-username">asfasdf {this.props.username}</span>
        <span className="card-content">asdfasdf {this.props.content}</span>
      </div>
    );
  }
}
export default IndexCard;
