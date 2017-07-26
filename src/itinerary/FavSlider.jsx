import React, { Component } from 'react';
import FavContentContainer from "./FavCard/FavContentContainer.jsx";



var Carousel = require('nuka-carousel');

const FavSlider = React.createClass({


   noCardsMessage() {
      console.log('nocardsmessage');
      if (this.props.cards.length === 0) {
        return 'No favorites! Go back and makes some plans or add your own recommendations.';
      }
    },

  mixins: [Carousel.ControllerMixin],


  render() {
    let cardsArray = this.props.cards;


    return (
      <Carousel decorators={Carousel.getDefaultProps().decorators.slice(0, 2)} slidesToShow={1} slidesToScroll={2} cellSpacing={10} dragging={true} wrapAround={true} easing="easeInOut" slideWidth="200px" height="300" cellAlign="left">
        <h1>{this.noCardsMessage()}</h1>
        {
          cardsArray.map((card, index) => {
            return <div key={index} className="card">
              <FavContentContainer key={card.id} cardContent={card} add={this.props.add.bind(this)} removeFavorite={this.props.removeFavorite.bind(this)} />
            </div>;
          })
        }
      </Carousel>
    )
  }
});

module.exports = FavSlider;






// import React, {Component} from 'react';
// import Slider from 'react-slick';
// import FavCard from "./FavCard/FavCard.jsx";

// var FavSlider = React.createClass({
//   render: function() {
//   	var settings = {
//       dots: true,
//       arrows: true,
//       infinite: true,
//       centerPadding: true,
//       speed: 500,
//       initialSlide: 1,
//       slidesToScroll: 1
//     }


//     return (
//     	<div className='cards'>
//       	<Slider {...settings}>
//             <div></div>
//             <FavCard cards={this.props.cards} />

//         </Slider>
//       </div>
//     );
//   }
// });

// export default FavSlider;

