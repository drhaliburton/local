import React, {Component} from 'react';

class Star extends Component {

  render() {
    return (
      <span className="icon is-pulled-right" aria-hidden="true" onClick={this.toggleFavorite.bind(this)}><i className={`fa ${favToggle}`} onClick={(event) => {
                  this.props.favorite({id: this.props.cardID})}}></i></span>
    );
  }
}

export default Star;