// Set icon size: https://stackoverflow.com/a/24794891
const icon = {
  url: "https://cdn3.iconfinder.com/data/icons/yummicon-pro/100/063_Hamburger-512.png",
  scaledSize: new window.google.maps.Size(30, 30),
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

        // marker animation
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(function () { marker.setAnimation(null); }, 750);
      });
    };
  });
}

function updateMarkerDisplay(map, locations) {

  markers.forEach(marker => {
    // try to match each marker with a location (markers is a global variable)
    const found = locations.find(location => {
      return location === marker.title;
    })
    // if a marker has a location and is not visible we should show it!
    if (found && marker.getMap() === null) {
      marker.setMap(map)
    } else if (found && marker.getMap() !== null) {
      // take no action if marker is already on the map
      return;
    } else { // Otherwise the marker does not have a location. Hide it
      marker.setMap(null)
    }
  });
}

function openMarkersfromList(map, location) {
  // find a marker associated with the given location
  let i;
  let foundMarker = markers.find(marker => {
    return marker.title = location;
  });

  if (foundMarker) {
    // find the index of the relevant marker
    markers.forEach((marker,index) => {
      if (marker.title === foundMarker.title) {
        i = index;
      }
    })

    // dynamically open the correct marker
    window.google.maps.event.trigger(markers[i], 'click');
  }
}

function handleMapClick(map) {
  window.google.maps.event.addListener(map, "click", function (event) {
    infowindow.close();
  });
}

export { icon, displayMarkers, addInfoWindows, updateMarkerDisplay, openMarkersfromList, handleMapClick };