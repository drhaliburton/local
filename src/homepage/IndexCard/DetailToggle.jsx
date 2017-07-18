import React, {Component} from 'react';

class DetailToggle extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isExpanded: false,
        isRotated: false
      };
    }

  toggleDescription(event){
    console.log('clicked');
    document.querySelector('.card-details').classList.add('expanded');
  }  


  render() {
    return (
    <span className="card-toggle" onClick={this.toggleDescription.bind(this)}>
      <a><span className={"icon fa fa-chevron-up" + `${isRotated}`}></span></a>
    </span>
    );
  }
}

export default DetailToggle;


// this.state = {
// 	isLoading: false,
// }

// // on event 
// this.setState({isLoading: !this.state.isLoading});

// // in render
// const loadingCls = this.state.isLoading ? 'appear'  : 'hidden';

// <div className={`  donation-form__loading-spinner text-center`}>