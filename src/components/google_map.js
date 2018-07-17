import React, { Component } from 'react';

export default class extends Component {
  shouldComponentUpdate() {
    // Component will not re-render after the first render
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng })
  }

  componentDidMount() {
    // map will make changes to the dom node with ref="map"
    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng},
      zoom: 8
    })
  }
  render() {
    return (
      <div id="map" ref="map" />
    );
  }
}