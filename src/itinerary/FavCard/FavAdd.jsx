import React, {Component} from 'react';

class FavAdd extends Component {

  render() {
    return (
      <span className="icon is-pulled-right" aria-hidden="true"><i className="fa fa-plus" onClick={(event) => {
            this.props.favorite({id: this.props.cardID})}}></i></span>
    );
  }
}

export default FavAdd;