import React, {Component} from 'react';
import FavCard from "./FavCard/FavCard.jsx";
import FavSlider from "./FavSlider.jsx";
//Contains
class FavoriteBar extends Component {
   constructor(props) {
    super(props);
    this.state = {
      filtersVisible: false,
      isRotated: false,
    }
   }


  toggleFilters(event){
    this.setState({
      filtersVisible: !this.state.filtersVisible,
      isRotated: !this.state.isRotated
    });
  }

  render() {

     const toggledFilter = this.state.filtersVisible ? 'set-height' : '';
     const rotatedToggle = this.state.isRotated ? '' : 'is-rotated';

    return (
    <div className="filter has-text-centered">
          <h5 className="filter-brand title is-6">Favourites</h5>
          <span className="filter-toggle" onClick={this.toggleFilters.bind(this)}>
            <a className="icon is-medium"><i className={`fa fa-chevron-up ${rotatedToggle}`}></i></a>
          </span><div></div>
      <div className={`favorites-container ${toggledFilter}`}>
        <div className="slider-container">
          <FavSlider cards={this.props.favCards} add={this.props.add.bind(this)}/>
      </div>
    </div>
  </div>
    );
  }
}
export default FavoriteBar;



