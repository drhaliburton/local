import React, {Component} from 'react';

class FavAdd extends Component {

  render() {
    return (
      <span className="icon is-pulled-right" aria-hidden="true"><i className="fa fa-plus" onClick={(event) => {
         this.props.add({id:this.props.card.card_id})}}></i></span>
    );
  }
}

export default FavAdd;