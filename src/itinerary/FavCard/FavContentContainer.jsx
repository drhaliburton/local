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
    console.log(categoryName);
    const iconCategories = {
      1: 'fa-tree',
      4: 'fa-binoculars',
      3: 'fa-shopping-bag',
      2: 'fa-cutlery',
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
        <div className="card-content">
              <p className="card-title">{card.title}</p>
               <p className="category duration"><span className={`icon is-small fa ${this.findIconCategory(card.category_id)}`}>&nbsp;</span>&nbsp;~{card.duration} minutes
                <span className="icon is-pulled-right" aria-hidden="true"><i className="fa fa-plus"></i></span></p>
            </div>
          </div>
    );
  }
}
export default FavContentContainer;

