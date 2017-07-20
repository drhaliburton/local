// import React, {Component} from 'react';
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import Helmet from "react-helmet";
// import _ from "lodash";


// const GettingStartedGoogleMap = withGoogleMap(props => (
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={10}
//     defaultCenter={{ lat: 49.2576508, lng: -123.2639868 }}
//     onClick={props.onMapClick}
//   >
//     {props.markers.map((marker, index) => (
//       <Marker
//         { ...marker }
//         onRightClick={() => props.onMarkerRightClick(marker)}
//       />
//     ))}
//   </GoogleMap>
// ));

// class MapIndex extends Component {
//    state = {
//     markers: [{
//       position: {
//         lat: 49.2802079,
//         lng: -123.1352891,
//       },
//       key: `Downtown Vancouver`,
//       defaultAnimation: 2,
//     }],
//     radius: 6000
//   };

//   handleMapLoad(map) {
//     this._mapComponent = map;
//     if (map) {
//       console.log(map.getZoom());
//     }
//   }

//   handleMapClick(event) {
//     const nextMarkers = [
//       ...this.state.markers,
//       {
//         position: event.latLng,
//         defaultAnimation: 2,
//         key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
//       },
//     ];
//     this.setState({
//       markers: nextMarkers,
//     });
//   }

//   handleMarkerRightClick(targetMarker) {
//     const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
//     this.setState({
//       markers: nextMarkers,
//     });
//   }



//   render() {
//     return (
//       <GettingStartedGoogleMap
//         containerElement={
//           <div style={{
//             position: 'absolute',
//             top: '80px',
//             bottom: 0,
//             left: 0,
//             right: 0
//              }} />
//         }
//         mapElement={
//           <div style={{ height: `100%` }} />
//         }
//         onMapLoad={this.handleMapLoad.bind(this)}
//         onMapClick={this.handleMapClick.bind(this)}
//         onMarkerRightClick={this.handleMarkerRightClick.bind(this)}
//         markers={this.state.markers}
//          />
//       // document.getElementById('root')
//     );
//   }
// }
// export default MapIndex;