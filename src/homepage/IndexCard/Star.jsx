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
<<<<<<< HEAD
      <span className="icon is-pulled-right" aria-hidden="true"><i className="fa fa-star" onClick={(event) => {
=======
      <span className="icon is-pulled-right" aria-hidden="true" onClick={this.toggleFavorite.bind(this)}><i className={`fa ${favToggle}`} onClick={(event) => {
>>>>>>> 5b666b9cfa77ded3171f37aac0ac2d37e9317961
            this.props.favorite({id: this.props.cardID})}}></i></span>
    );
  }
}

export default Star;