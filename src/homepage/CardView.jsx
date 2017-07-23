import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import FilterButton from './FilterButton.jsx';

class CardView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filtersVisible: false,
      isRotated: false,
      viewToggleRotated: false,
      linkURL: false,
      linkText: false,
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

    if (currentFilter === index) {
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
  toggleFilters(event) {
    console.log('filters clicked');
    this.setState({
      filtersVisible: !this.state.filtersVisible,
      isRotated: !this.state.isRotated
    });
  }

  togglePageView(event) {
    console.log(this.state.linkURL);
    this.setState({
      viewToggleRotated: !this.state.viewToggleRotated,
      linkURL: !this.state.linkURL,
      linkText: !this.state.linkText
    });
  }

  render() {

    const toggledFilter = this.state.filtersVisible ? 'toggled-filter' : '';
    const rotatedToggle = this.state.isRotated ? '' : 'is-rotated';
    const viewToggleRotated = this.state.viewToggleRotated ? '' : 'is-rotated';
    const pageLink = this.state.linkURL ? '#' : '#view-all';
    const pageLinkText = this.state.linkText ? 'Search' : 'View All';



    const filters = this.state.filters.map((filter, index) => {
      const active = this.state.currentFilter === index;
      return (
        <FilterButton
          key={index}
          id={index}
          active={active}
          handleFilterClick={this.handleFilterClick.bind(this)}
          { ...filter } />
      )
    });

    return (
      <span>
      <div className="page-toggle">
        <h1>Skip the lines & tourist traps - discover hidden gems and build a trip itinerary curated by locals.</h1>
        <h2>Browse recommendations, favourite your must-do's and save your map + calendar to view on the fly.</h2>
        <h5 className="toggle-title" id="view-all">{pageLinkText}</h5>
        <span className="toggle-arrow" onClick={this.togglePageView.bind(this)}>
          <Scrollchor animate={{offset: -58, duration: 1000}} to={pageLink}><i className={`fa fa-chevron-up ${viewToggleRotated}`}></i></Scrollchor>
        </span>
      </div>
      <div className="filter has-text-centered">
        <h5 className="filter-brand title is-6">Filters</h5>
        <span className="filter-toggle" onClick={this.toggleFilters.bind(this)}>
          <a className="icon is-medium"><i className={`fa fa-chevron-up ${rotatedToggle}`}></i></a>
        </span><div></div>

        <div className={`filter-content ${toggledFilter}`}>

          <div className="columns">
            <div className="column"></div>

            <div className="column is-one-third">
              {filters}
            </div>
            <div className="column"></div>
          </div>
        </div>
      </div>
      </span>
    );
  }
}
export default CardView;
