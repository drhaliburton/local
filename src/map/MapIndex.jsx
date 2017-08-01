import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, InfoWindow, Marker} from "react-google-maps";
import Api from '../../library/api.js';
import fancyMapStyles from "../constants/fancyMapStyle.json"
import ItineraryIndex from "../itinerary/ItineraryIndex.jsx";
import SearchBox from "react-google-maps/lib/places/SearchBox";

const INPUT_STYLE = {
  boxSizing: `border-box`,
  MozBoxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  marginTop: `27px`,
  padding: `0 12px`,
  borderRadius: `1px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
};


const GettingStartedGoogleMap = withGoogleMap(props => (
 <GoogleMap
    ref={props.onMapLoad}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
    zoom={props.zoom}

  >
  <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder="Type in a location!"
      inputStyle={INPUT_STYLE}
    />
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
      markers:[],
      bounds: null,
      zoom: 6
    }

  }

  componentDidMount() {
    Api.get('/itinerary/favorites')
      .then((cards) => this.setState({
        cards: cards[0],
        markers: cards.map((card) => {
          return {
            position: new google.maps.LatLng(card.location[0], card.location[1]),
            icon: goldStar,
            showInfo: false,
            infoContent: `${card.title}:
            ${card.description}`
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
    }
  }

  handleBoundsChanged() {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter(),
    });
  }

    handleSearchBoxMounted(searchBox) {
      this._searchBox = searchBox;
    }

    handlePlacesChanged() {
    const places = this._searchBox.getPlaces();

    // Add a marker for each place returned from search bar
    const markers = places.map(place => ({
      position: place.geometry.location,
    }));

    // Set markers; set map center to first search result
    const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

    this.setState({
      center: mapCenter,
      zoom: 15

    });
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
            top: '60px',
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
        onBoundsChanged={this.handleBoundsChanged.bind(this)}
        onSearchBoxMounted={this.handleSearchBoxMounted.bind(this)}
        bounds={this.state.bounds}
        onPlacesChanged={this.handlePlacesChanged.bind(this)}
        onMarkerClick={this.handleMarkerClick.bind(this)}
        onMarkerClose={this.handleMarkerClose.bind(this)}
        zoom={this.state.zoom}
         />

    );
  }
}
export default MapIndex;