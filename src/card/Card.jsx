
import React, {Component} from 'react';
//Contains
class Message extends Component {
  render() {
    return (
      <div className="card">
        <span className="card-username">{this.props.username}</span>
        <span className="card-content">{this.props.content}</span>
      </div>
    );
  }
}
export default Message;
