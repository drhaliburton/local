import React, { Component } from 'react';

class DeleteCard extends Component {
      render() {
    return (
      <span className="icon is-pulled-right" aria-hidden="true"><i className="fa fa-minus-circle " onClick={(event) => {
         this.props.delete({card:this.props.card})}}></i></span>
    );
  }
}
export default DeleteCard;