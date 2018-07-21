import React, { Component } from 'react';
import * as MapUtils from '../utils/map_utils';


export default class extends Component {
  shouldComponentUpdate() {
    // Component will not re-render after the first render
    return false;
  }

  componentWillReceiveProps(nextProps) {
    // this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });

    // we request the foursquare data in App.js
    // we pass down the foursquare data into the google_map component
    // if foursquare data has been passed as a prop
    if (nextProps.restaurants) {
      MapUtils.addInfoWindows(this.map, nextProps.restaurants, nextProps.locations);
      MapUtils.updateMarkerDisplay(this.map, nextProps.displayedLocations);
      MapUtils.handleMapClick(this.map);
    }

    if (nextProps.clickedListItem) {
      MapUtils.openMarkersfromList(this.map, nextProps.clickedListItem);
    }
  }

  componentDidMount() {
    // Create a new map on the given element
    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng},
      zoom: 8
    });

    MapUtils.displayMarkers(this.props.locations, this.map);
  }

  render() {
    return (
      <div id="map" ref="map" />
    );
  }
}