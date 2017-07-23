import React, {Component} from 'react';
import Slider from 'react-slick';
import FavCard from "./FavCard/FavCard.jsx";

var FavSlider = React.createClass({
  render: function() {
  	var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      initialSlide: 8
    }
    return (
    	<div className='cards'>
      	<Slider {...settings}>
          <div></div>
            <FavCard cards={this.props.cards} />
        </Slider>
      </div>
    );
  }
});

// class FavSlider extends React.Component {

//   componentDidMount() {

//   }

//   render() {
//     const settings = {
//       dots: true,
//       arrows: true,
//       infinite: true,
//       speed: 500,
//       accessibility: true,
//       slidesToShow: 5,
//       slidesToScroll: 1
//     };

//     return (
//       <div className="cards">
//         <button onClick={this.slickNext()}></button>
//         <Slider {...settings}>
//           <div></div>

//         </Slider>
//       </div>
//     );
//   }
// }

export default FavSlider;

