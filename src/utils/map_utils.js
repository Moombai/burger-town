// Set icon size: https://stackoverflow.com/a/24794891
const icon = {
  url: "https://cdn3.iconfinder.com/data/icons/yummicon-pro/100/063_Hamburger-512.png",
  scaledSize: new window.google.maps.Size(40, 40),
  origin: new window.google.maps.Point(0, 0),
  anchor: new window.google.maps.Point(0, 0)
};

function displayMarkers(locations, map) {
  const bounds = new window.google.maps.LatLngBounds();
  const markers = [];

  // Add multiple markers
  for (let i = 0; i < locations.length; i++) {
    // get position and title from locations
    const position = locations[i].location;
    // const title = locations[i].title;

    // create new marker for every location
    var marker = new window.google.maps.Marker({
      map: map,
      position: position,
      animation: window.google.maps.Animation.DROP,
      id: i,
      icon: icon
    });
    markers.push(marker);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}

export { icon, displayMarkers };