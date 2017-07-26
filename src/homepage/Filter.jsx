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
    this.setState({
      filtersVisible: !this.state.filtersVisible,
      isRotated: !this.state.isRotated
    });
  }


  function setColor(icon) {
      console.log(icon);
      let colors = {
      'tree': 'is-green',
      'shopping-bag': 'is-pink',
      'cutlery': 'is-orange',
      'binoculars': 'is-grey',
    }
      console.log(colors[icon]);
      return colors[icon];
    }
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
                { filters }
              <div className="column"></div>
            </div>
    );
  }
}
export default Filter;
