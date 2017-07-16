import React, {Component} from 'react';

//Contains
class Content extends Component {
  render() {
    return (
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title">{this.props.title}</p>
            <p className="subtitle"><a>{this.props.location}</a></p>
            <p className="duration">Time: ~{this.props.duration} minutes</p>
          </div>
        </div>
        <div className="card-details">
            <p><span className="icon is-small fa fa-tree"></span> Outdoors</p>
          <div className="content">
            <p className="description">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;