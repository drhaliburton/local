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
            <p className="subtitle is-small">Recommended duration: ~{this.props.duration}</p>
          </div>
        </div>
        <div className="card-details">
            <p className="icon is-small"><i className="fa fa-tree" aria-hidden="true"></i> Outdoors</p>
          <div className="content">
            <p className="subtitle is-small">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;