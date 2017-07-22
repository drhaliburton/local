import React, {Component} from 'react';
import Slider from 'react-slick';
import FavCard from "./FavCard/FavCard.jsx";

class FavSlider extends React.Component {

  componentDidMount() {

  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="columns is-multiline cards">
        <Slider {...settings}>
          <div></div>
          <FavCard cards={this.props.cards} />
        </Slider>
      </div>
    );
  }
}

export default FavSlider;

