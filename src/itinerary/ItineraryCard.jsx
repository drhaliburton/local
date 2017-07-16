import React, {Component} from 'react';

//TO DO For each card import image, icon, name, description

//Contains
class ItineraryCard extends Component {
  render() {
    return (
      <div className="itinerary-card">
        <article className="media large">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png"></img>
          </p>
        </figure>
        <div className="media-content large">
          <div className="content">
            <p>
              <strong>Hiking Duncan's Cove</strong>
              <br className="subtitle"></br>
              Duncan's Cove, Nova Scotia
              <br></br><small>~3 hours</small>
              <span className="icon is-small"><i className="fa fa-tree" aria-hidden="true"></i></span> Outdoors<br></br>
            </p>
          </div>
        </div>
          <div className="media-right">
            <button className="delete"></button>
          </div>
      </article>
    </div>
    );
  }
}
export default ItineraryCard;