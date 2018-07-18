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
    // Create a new map on the given element
    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng},
      zoom: 8
    });

    const bounds = new window.google.maps.LatLngBounds();
    const markers = [];

    // Set icon size: https://stackoverflow.com/a/24794891
    const icon = {
      url: "https://cdn3.iconfinder.com/data/icons/yummicon-pro/100/063_Hamburger-512.png",
      scaledSize: new window.google.maps.Size(40, 40),
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(0, 0)
    };

    // Add multiple markers
    for (let i = 0; i < this.props.locations.length; i++) {
      // get position and title from locations
      const position = this.props.locations[i].location;
      const title = this.props.locations[i].title;

      // create new marker for every location
      var marker = new window.google.maps.Marker({
        map: this.map,
        position: position,
        animation: window.google.maps.Animation.DROP,
        id: i,
        icon: icon
      });
      markers.push(marker);
      bounds.extend(markers[i].position);
    }
    this.map.fitBounds(bounds);
  }

  render() {
    return (
      <div id="map" ref="map" />
    );
  }
}