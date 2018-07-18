import React, { Component } from 'react';
import * as MapUtils from '../utils/map_utils';


export default class extends Component {
  shouldComponentUpdate() {
    // Component will not re-render after the first render
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng })
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