// Set icon size: https://stackoverflow.com/a/24794891
const icon = {
  url: "https://cdn3.iconfinder.com/data/icons/yummicon-pro/100/063_Hamburger-512.png",
  scaledSize: new window.google.maps.Size(40, 40),
  origin: new window.google.maps.Point(0, 0),
  anchor: new window.google.maps.Point(0, 0)
};

const markers = [];
const infowindow = new window.google.maps.InfoWindow();

function displayMarkers(locations, map) {
  const bounds = new window.google.maps.LatLngBounds();

  // Add multiple markers
  for (let i = 0; i < locations.length; i++) {
    // get position and title from locations
    const position = locations[i].location;
    const title = locations[i].title;

    // create new marker for every location
    var marker = new window.google.maps.Marker({
      map: map,
      position: position,
      animation: window.google.maps.Animation.DROP,
      id: i,
      icon: icon,
      title: title
    });
    markers.push(marker);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}

/*
** When adding information to the infoWindow, the marker titles are used as
** identification. The addInfoWindows function compares marker titles with the
** name of venues fetched from our api.
 */
function addInfoWindows(map, restaurants, locations) {
  markers.forEach(marker => {

    // find the restaurant by marker title
    const found = restaurants.find(function (restaurant) {
      const venue = restaurant.response.venue;
      return venue.name === marker.title;
    });

    // Add marker if the restaurant venue is found
    const restaurant = found.response.venue;

    if (restaurant) {
      window.google.maps.event.addListener(marker, 'click', function () {
        var contentString = `
        <div id="content">
          <h3>${restaurant.name}</h3>
          <p>${restaurant.location.address}<br>
            ${restaurant.location.city}<br>
            ${restaurant.location.postalCode}
          <p>Likes: <strong>${restaurant.likes.count}</strong></p>
          <a href="${restaurant.canonicalUrl}">Read More</a>
        </div>`;
        // info window info
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
      });
    };
  });
}

export { icon, displayMarkers, addInfoWindows };