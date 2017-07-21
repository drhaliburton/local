import React, {Component} from 'react';

import FilterButton from './FilterButton.jsx';

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filtersVisible: false,
      isRotated: false,
      filters: [
        {
          name: 'Nature',
          icon: 'tree'
        },
        {
          name: 'Shopping',
          icon: 'shopping-bag'
        },
        {
          name: 'Food',
          icon: 'cutlery'
        },
        {
          name: 'Sights',
          icon: 'binoculars'
        }
      ],
      currentFilter: null
    };
  }

  handleFilterClick(index) {
    const { filters, currentFilter } = this.state;

    if(currentFilter === index) {
      this.props.resetCards();
      index = null;
    } else {
      this.props.categoryFilter(filters[index].name);
    }

    this.setState({
      currentFilter: index
    });
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
    const rotatedToggle = this.state.isRotated ? '' : 'is-rotated';

    const filters = this.state.filters.map((filter, index) => {
    const active = this.state.currentFilter === index;
      return (
        <FilterButton
          key={ index }
          id={ index }
          active={ active }
          handleFilterClick={ this.handleFilterClick.bind(this) }
          { ...filter } />
        )
      });

    return (
      <div className="filter has-text-centered">
        <h5 className="filter-brand title is-6">Filters</h5>
        <span className="filter-toggle" onClick={this.toggleFilters.bind(this)}>
          <a className="icon is-medium"><i className={`fa fa-chevron-up ${rotatedToggle}`}></i></a>
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
                { filters }
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
    );
  }
}
export default Filter;
