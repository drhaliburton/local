import React, {Component} from 'react';
import Scrollchor from 'react-scrollchor';

class PageToggle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRotated: false,
      linkURL: '#view-all'
    }
  }

  toggleFilters(event){
    this.setState({
      isRotated: !this.state.isRotated
    });
  }

  render() {
    const rotatedToggle = this.state.isRotated ? '' : 'is-rotated';
    const pageLink = this.state.linkURL ? 'view-all' : '';
    return (
      <div className="page-toggle">
        <h5 className="toggle-title">View All</h5>
        <span className="toggle-arrow" onClick={this.toggleFilters.bind(this)}>
          <Scrollchor to="#view-all"><i className={`fa fa-chevron-up ${rotatedToggle}`}></i></Scrollchor>
        </span><div></div>
        </div>
    );
  }
}



export default PageToggle;
