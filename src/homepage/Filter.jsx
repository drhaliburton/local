import React, {Component} from 'react';
//Importing filters and searchbar components

class Filter extends Component {
  render() {
    return (
      <div className="filter has-text-centered">
        <span className="filter-toggle">
          <a className="icon is-medium"><i className="fa fa-chevron-down"></i></a>
        </span>
        <h4 className="filter-brand title is-4">filters</h4>
        <div className="filter-content">
          <div className="columns">
            <div className="column">
                <h5 className="title is-5">Radius</h5>
                <span className="filter-button"><a className="button is-small">Street</a></span>
                <span className="filter-button"><a className="button is-small">Neighborhood</a></span>
                <span className="filter-button"><a className="button is-small">City</a></span>
            </div>
            <div className="column">
              <h5 className="title is-5">Category</h5>
              <span className="filter-button"><a className="button is-small">
              <span className="header">Nature</span>
              <span className="icon is-small"></span>
                <i className="fa fa-tree"></i>
              </a></span>
              <span className="filter-button"><a className="button is-small">
                <span className="header">Food</span>
                <span className="icon is-small"></span>
                <i className="fa fa-cutlery"></i>
              </a></span>
              <span className="filter-button"><a className="button is-small">
                <span className="header">Shopping</span>
                <span className="icon is-small"></span>
                <i className="fa fa-shopping-bag"></i>
              </a></span>
              <span className="filter-button"><a className="button is-small">
                <span className="header">Sights</span>
                <span className="icon is-small"></span>
                <i className="fa fa-binoculars"></i>
              </a></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Filter;
