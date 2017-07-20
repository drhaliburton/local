import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps";
import Api from '../../library/api.js';
import fancyMapStyles from "../constants/fancyMapStyle.json";


const GettingStartedGoogleMap = withGoogleMap(props => (
 <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={6}
    center={props.center}
  >
    {props.markers.map((marker, index) => (
      <Marker
        { ...marker }
        onClick={() => props.onMarkerClick(marker)}
      >
      {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

const goldStar = {
  path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
  fillColor: 'gold',
  fillOpacity: 1,
  scale: 0.1,
  strokeColor: 'black gold',
  strokeWeight: 1
};
class MapIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      markers:[]
    }
  }

  componentDidMount() {
    Api.get('/index')
      .then((cards) => this.setState({
        cards: cards[0],
        markers: cards.map((card) => {
          return {
            position: new google.maps.LatLng(card.location[0], card.location[1]),
            icon: goldStar,
            showInfo: false,
            infoContent: `${card.title}:
            ${card.description}
            ${card.photos}`
                  }
        }),
        center: {
      lat: cards[0].location[0],
      lng: cards[0].location[1],
    }
      })
    );
  }

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }


  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

  render() {
    return (
      <GettingStartedGoogleMap
        containerElement={
          <div style={{
            position: 'absolute',
            top: '80px',
            bottom: 0,
            left: 0,
            right: 0
             }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        onMapLoad={this.handleMapLoad.bind(this)}
        center={this.state.center}
        markers={this.state.markers}
        onMarkerClick={this.handleMarkerClick.bind(this)}
        onMarkerClose={this.handleMarkerClose.bind(this)}
         />
    );
  }
}
export default MapIndex;