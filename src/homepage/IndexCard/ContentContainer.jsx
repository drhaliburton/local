import React, {Component} from 'react';
import Star from "./Star.jsx";
import Rating from "./Rating.jsx";

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
        <span className="card-toggle" onClick={this.toggleDescription.bind(this)}>
          <a><span className={`icon fa fa-chevron-up ${rotatedToggle}`}></span></a>
        </span>
        <Star />
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title">{card.title}</p>
              <p className="subtitle"><a>{card.location}</a></p>
              <p className="duration">Time: ~{card.duration} minutes</p>
            </div>
          </div>
          <div className={`card-details ${detailsVisible}`}>
              <p><span className="icon is-small fa fa-tree"></span> Outdoors</p>
            <div className="content">
              <div className="description"><p>{card.description}</p>
                <Rating />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContentContainer;

