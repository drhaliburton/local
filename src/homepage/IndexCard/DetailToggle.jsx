import React, {Component} from 'react';

class DetailToggle extends Component {

    constructor(props) {
      super(props);
      this.state = {classes: 'expanded'};
    }

  toggleDescription(event){
    console.log('clicked');
    document.querySelector('.card-details').classList.add('expanded');
    // document.querySelector('.card-details').classList.add('expanded');
    // this.toggleClass('expanded');
    // this.find('.fa-chevron-up').toggleClass('chev-rotate');
    // this.find('.fa-chevron-up').toggleClass('chev-rotate-again');
  }  


  render() {
    return (
    <span className="card-toggle" onClick={this.toggleDescription.bind(this)}>
      <a><span className={"icon fa fa-chevron-up chev-rotate-again " + this.state.classes}></span></a>
    </span>
    );
  }
}

export default DetailToggle;