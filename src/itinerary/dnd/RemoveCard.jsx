import React, { Component } from 'react';

class RemoveCard extends Component {
      render() {
    return (
      <span className="icon is-pulled-right" aria-hidden="true"><i className="fa fa-times-circle" onClick={(event) => {
         this.props.remove({card:this.props.card})}}></i></span>
    );
  }
}
export default RemoveCard;