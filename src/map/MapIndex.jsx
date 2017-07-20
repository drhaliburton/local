// import React, {Component} from 'react';

// class MapIndex extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cards: []

//     }
//   }

//   componentDidMount() {
//     fetch('/index')
//       .then((res) => res.json())
//       .then((cards) => this.setState({
//         cards: cards
//       })
//     );
//   this.map = this.initMap()
//   this.marker = this.addMarkers()
//   }

//   initMap() {
//     const mapOptions = {
//       zoom: 5,
//       center: {lat: this.state.cards[0].location[0], lng: this.state.cards[0].location[1]}
//     }
//     return new google.maps.Map(document.getElementById('map'), mapOptions)
//   }

//   addMarkers() {
//     this.state.cards.forEach((card) => {
//       return new google.maps.Marker({
//         position: {lat: card.location[0], lng: card.location[1]},
//         map: this.map
//       })
//     })
// 	}

//   render() {
//       console.log("Rendering <App />");
//     return (
//       <div>
//       <script src={'https://maps.googleapis.com/maps/api/js?key=AIzaSyDLNoIr5eXlZwltOZ6-jOVjrlhrxHqUu6I&callback=initMap'}
//     async defer></script>
//       <div id="map"></div>
//       </div>
//     );
//   }
// }
//   render() {
//     return (
//       <div>
//         <h1>Map Page</h1>
//         <iframe width={'600'} height={'450'} frameBorder={'0'} src={'https://www.google.com/maps/embed/v1/search?q=vancouver&key=AIzaSyCYGEUbiGFs5-eKgiH4jDuv9hD1HgOmlYs'} allowFullScreen></iframe>
//       </div>
//     );
//   }
// }

// export default MapIndex;
