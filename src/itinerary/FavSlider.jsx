import React, {Component} from 'react';
import FavContentContainer from "./FavCard/FavContentContainer.jsx";



var Carousel = require('nuka-carousel');

const FavSlider = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    let cardsArray = this.props.cards;
    return (
      <Carousel slidesToShow={3} slidesToScroll={2} cellSpacing={20} dragging={true} easing="easeInOut" slideWidth="200px" width="90%">
         {
          cardsArray.map((card, index) => {
            return <div key={index} className="card">
              <FavContentContainer key={card.id} cardContent={card}/>
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

