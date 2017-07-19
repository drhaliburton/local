import React, {Component} from 'react';
import { fadeInDown } from 'react-animations';

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filtersVisible: false
    };
  }

  toggleFilters(event){
    console.log('filters clicked');
    this.setState({
      filtersVisible: !this.state.filtersVisible,
      isRotated: !this.state.isRotated,
      isActive: !this.state.isActive
    });  
  }  

  render() {
    const styles = {
      fadeInDown: {
        animation: 'x 1s',
      }
    }
    const toggledFilter = this.state.filtersVisible ? 'visible' : '';
    const rotatedToggle = this.state.isRotated ? 'is-rotated' : '';
    const activeCategory = this.state.isActive ? 'is-active' : '';

    return (
      <div className="filter has-text-centered">
        <h5 className="filter-brand title is-6">Filters</h5>
        <span className="filter-toggle">
          <a className="icon is-medium" onClick={this.toggleFilters.bind(this)}><i className={`fa fa-chevron-down ${rotatedToggle}`}></i></a>
        </span><div></div>
          
          <div className={`filter-content ${toggledFilter}`} style={styles}>

            <div className="columns">
              <div className="column"></div>
              <div className="column is-one-third">
                <h5 className="title is-5">Radius</h5>
                <span className="filter-button"><a className="button is-small">Street</a></span>
                <span className="filter-button"><a className="button is-small">Neighborhood</a></span>
                <span className="filter-button"><a className="button is-small">City</a></span>
              </div>
              <div className="column is-one-third">
                <h5 className="title is-5">Category</h5>
                <span className="filter-button" onClick={() => this.props.categoryFilter('outdoors')}>
                  <a className={`button is-small ${activeCategory}`}>
                    <span className="header">Nature</span>
                    <span className="icon is-small"></span>
                    <i className="fa fa-tree"></i>
                  </a>
                </span>
                <span className="filter-button" onClick={() => this.props.categoryFilter('food')}>
                  <a className="button is-small">
                    <span className="header">Food</span>
                    <span className="icon is-small"></span>
                    <i className="fa fa-cutlery"></i>
                  </a>
                </span>
                <span className="filter-button" onClick={() => this.props.categoryFilter('spas & wellness')}>
                  <a className="button is-small">
                    <span className="header">Shopping</span>
                    <span className="icon is-small"></span>
                    <i className="fa fa-shopping-bag"></i>
                  </a>
                </span>
                <span className="filter-button" onClick={() => this.props.categoryFilter('culture')}>
                  <a className="button is-small">
                    <span className="header">Sights</span>
                    <span className="icon is-small"></span>
                    <i className="fa fa-binoculars"></i>
                  </a>
                </span>
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
    );
  }
}
export default Filter;
