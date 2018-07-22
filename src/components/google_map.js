import React, { Component } from 'react';
import * as MapUtils from '../utils/map_utils';


export default class extends Component {
  shouldComponentUpdate() {
    // Component will not re-render after the first render
    return false;
  }

  componentWillReceiveProps(nextProps) {

    /** As the component cannot re-render we check if it will receive new props before calling
    ** our Google API methods. React will not controll the map directly. These methods can be found
    ** in the utils/map_utls.js file
    **/
    if (nextProps.restaurants && nextProps.restaurants.length > 0) {
      MapUtils.addInfoWindows(this.map, nextProps.restaurants, nextProps.locations);
      MapUtils.updateMarkerDisplay(this.map, nextProps.displayedLocations);
      MapUtils.handleMapClick(this.map);
    }

    if (nextProps.clickedListItem) {
      MapUtils.openMarkersfromList(this.map, nextProps.clickedListItem);
    }
  }

  componentDidMount() {
    // The map is created once on the first and only mounting of this component
    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng},
      zoom: 8
    });

    MapUtils.displayMarkers(this.props.locations, this.map);
  }

  render() {
    return (
      <div id="map" ref="map" role="application"/>
    );
  }
}