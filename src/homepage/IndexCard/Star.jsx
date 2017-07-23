import React, {Component} from 'react';

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isFavorited: false
      }
    }

  toggleFavorite(event){
    this.setState({
      isFavorited: !this.state.isFavorited
    });
  }


  render() {

    const favToggle = this.state.isFavorited ? 'fa-star is-full' : 'fa-star-o is-open';
    return (
      <span className="icon is-pulled-right" aria-hidden="true" onClick={this.toggleFavorite.bind(this)}><i className={`fa ${favToggle}`} onClick={(event) => {
                  this.props.favorite({id: this.props.cardID})}}></i></span>
    );
  }
}

export default Star;