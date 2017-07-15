import React, {Component} from 'react';

//Contains
class Content extends Component {
  render() {
    return (
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title">Hiking Duncan's Cove</p>
            <p className="subtitle"><a>Duncan's Cove, Nova Scotia</a></p>
            <p className="subtitle is-small">Recommended duration: ~3 hours</p>
          </div>
        </div>
        <div className="card-details">
            <p className="icon is-small"><i className="fa fa-tree" aria-hidden="true"></i> Outdoors</p>
          <div className="content">
            <p className="subtitle is-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;