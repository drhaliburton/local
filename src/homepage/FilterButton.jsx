import React from 'react';

function FilterButton({ id, active, name, icon, handleFilterClick, color }) {
  return (
    <span className="filter-button" onClick={() => handleFilterClick(id) }>
      <a className={ `button ${name} ${ active ? 'is-active' : '' }` }>
        <span className="header">{ name }</span>
        <span className="icon is-small"></span>
        <i className={ `fa fa-${icon}` }></i>
      </a>
    </span>
  )
}

export default FilterButton;
