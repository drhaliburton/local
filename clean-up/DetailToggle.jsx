import React, {Component} from 'react';

class DetailToggle extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isExpanded: false,
        isRotated: false,
        visibleDetails: false
      };
    }

  toggleDescription(event){
    this.setState({
      isExpanded: !this.state.isExpanded,
      isRotated: !this.state.isRotated,
      visibleDetails: !this.state.visibleDetails
    });
  }


  render() {
    const expandedToggle = this.state.isExpanded ? 'expanded'  : '';
    const rotatedToggle = this.state.isRotated ? 'is-rotated'  : '';
    const detailsVisible = this.state.visibleDetails ? 'visible'  : '';

    return (
    <span className={`card-toggle ${expandedToggle}`} onClick={this.toggleDescription.bind(this)}>
      <a><span className={`icon fa fa-chevron-up ${rotatedToggle}`}></span></a>
    </span>
    );
  }
}

export default DetailToggle;