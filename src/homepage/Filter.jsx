import React, {Component} from 'react';

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filtersVisible: false,
      isRotated: false
    };
  }

  handleFilterClick(filterName) {
    this.props.categoryFilter(filterName);
    var allCategoryButtons = document.querySelectorAll('.is-active');
    if (document.querySelector(`.${filterName}`).classList.contains('is-active')) {
      document.querySelector(`.${filterName}`).classList.remove('is-active');
    } else {
      document.querySelector(`.${filterName}`).classList.add('is-active');
    }
    for (var button of allCategoryButtons) {
      button.classList.remove('is-active');
    }
  }
  // grab the button with c
  toggleFilters(event){
    console.log('filters clicked');
    this.setState({
      filtersVisible: !this.state.filtersVisible,
      isRotated: !this.state.isRotated
    });  
  }  
  
  render() {

    const toggledFilter = this.state.filtersVisible ? 'toggled-filter' : '';
    const rotatedToggle = this.state.isRotated ? 'is-rotated' : '';

    return (
      <div className="filter has-text-centered" onClick={this.toggleFilters.bind(this)}>
        <h5 className="filter-brand title is-6">Filters</h5>
        <span className="filter-toggle">
          <a className="icon is-medium"><i className={`fa fa-chevron-down ${rotatedToggle}`}></i></a>
        </span><div></div>
          
          <div className={`filter-content ${toggledFilter}`}>

            <div className="columns">
              <div className="column"></div>
              {/*<div className="column is-one-third">
                <h5 className="title is-6">Radius</h5>
                <span className="filter-button"><a className="button">Street</a></span>
                <span className="filter-button"><a className="button">Neighborhood</a></span>
                <span className="filter-button"><a className="button">City</a></span>
              </div>*/}
              <div className="column is-one-third">
                {/*<h5 className="title is-6">Category</h5>*/}
                <span className="filter-button" onClick={() => this.handleFilterClick('Nature')}>
                  <a className="button Nature">
                    <span className="header">Nature</span>
                    <span className="icon is-small"></span>
                    <i className="fa fa-tree"></i>
                  </a>
                </span>
                <span className="filter-button" onClick={() => this.handleFilterClick('Food')}>
                  <a className="button Food">
                    <span className="header">Food</span>
                    <span className="icon is-small"></span>
                    <i className="fa fa-cutlery"></i>
                  </a>
                </span>
                <span className="filter-button" onClick={() => this.handleFilterClick('Shopping')}>
                  <a className="button Shopping">
                    <span className="header">Shopping</span>
                    <span className="icon is-small"></span>
                    <i className="fa fa-shopping-bag"></i>
                  </a>
                </span>
                <span className="filter-button" onClick={() => this.handleFilterClick('Sights')}>
                  <a className="button Sights">
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
