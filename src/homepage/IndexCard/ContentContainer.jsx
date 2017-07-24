import React, {Component} from 'react';
import Star from "./Star.jsx";
import Rating from "./Rating.jsx";
import NewImage from "./NewImage.jsx";

//Contains
class ContentContainer extends Component {

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
    return (
      <div className={`content-container ${expandedToggle}`}>
        <NewImage image={card.photos}/>
        <span className="card-toggle">
          <a><span className={`icon fa fa-chevron-up ${rotatedToggle}`}onClick={this.toggleDescription.bind(this)}></span></a>
        </span>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title">{card.title}</p>
              <p className="location">{card.location || "Location, Location Ville"}</p>
               <p className="category duration"><span className={`icon is-small fa ${this.findIconCategory(card.category)}`}>&nbsp;</span>&nbsp;~{card.duration} minutes</p>
                <Star cardID={this.props.cardID} favorite={this.props.favorite} />
            </div>
          </div>
          <div className={`card-details ${detailsVisible}`}>
            <div className="content">
              <div className="description">
                <p>{card.description}</p>
                  <Rating rating={card.rating}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContentContainer;

