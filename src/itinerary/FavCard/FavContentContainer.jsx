import React, {Component} from 'react';
import FavStar from "./FavStar.jsx";
import FavRating from "./FavRating.jsx";
import FavImage from "./FavImage.jsx";
import FavAdd from "./FavAdd.jsx";

//Contains
class FavContentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      isRotated: false,
      isVisible: false
    };
  }

  findIconCategory(categoryName){
    const iconCategories = {
      'Nature': 'fa-tree',
      'Sights': 'fa-binoculars',
      'Shopping': 'fa-shopping-bag',
      'Food': 'fa-cutlery',
    }

    return iconCategories[categoryName] || '';
  };

  toggleDescription(event){
    this.setState({
      isExpanded: !this.state.isExpanded,
      isRotated: !this.state.isRotated,
      isVisible: !this.state.isVisible
    });
  }

  render() {
    const expandedToggle = this.state.isExpanded ? 'expanded'  : '';
    const rotatedToggle = this.state.isExpanded ? 'is-rotated'  : '';
    const detailsVisible = this.state.isVisible ? 'visible'  : '';

    let card = this.props.cardContent;
    console.log(card);
    return (
      <div className={`content-container ${expandedToggle}`}>
        <FavImage />
        <span className="card-toggle">
          <a><span className={`icon fa fa-chevron-up ${rotatedToggle}`}onClick={this.toggleDescription.bind(this)}></span></a>
        </span>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title">{card.title}</p>
              <p className="location">{card.location.x + ' ' + card.location.y || "Location, Location Ville"}</p>
               <p className="category duration"><span className={`icon is-small fa ${this.findIconCategory(card.category)}`}>&nbsp;</span>&nbsp;~{card.duration} minutes</p>
                <span className="icon is-pulled-right" aria-hidden="true"><i className="fa fa-plus"></i></span>
            </div>
          </div>
          <div className={`card-details ${detailsVisible}`}>
            <div className="content">
              <div className="description">
                <p>{card.description}</p>
                  <FavRating rating={card.rating}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FavContentContainer;

