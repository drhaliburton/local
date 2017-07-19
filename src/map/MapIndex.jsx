import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Helmet from "react-helmet";
import _ from "lodash";


const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
));

class MapIndex extends Component {


  render() {
    return (
      <GettingStartedGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        onMapLoad={_.noop}
        onMapClick={_.noop}
        markers={markers}
         />,
      document.getElementById('root')
    );
  }
}
export default MapIndex;
