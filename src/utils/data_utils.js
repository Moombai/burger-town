function fetchFromFourSquare() {
  const clientId = "client_id=VUQYEQENPANR3UEYUMV2TS3A10CIMJ55WB3IL5ZHOWGDQOAP";
  const clientSecret = "client_secret=TQU2LWXFBSYUBNGPY4N4Q14BYKO1NWHMWWQGFQ1UQF4HY12D";
  const version = "v=20180710";

  let venues = [];

  const locations = [
    "58188c2b38fab86819349c50",
    "56372298498eccf54c9b7aef",
    "557ade61498e2f0253159e93",
    "4fbabe9be4b0c673b642103c",
    "4ddbb28e18388dd692371228"
  ];

  function checkStatus(response) {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(
        new Error(response.statusText)
      );
    }
  }

  function getJSON(response) {
    return response.json();
  }

  // Here we build an array of promises to pass to our Promise.all method
  locations.forEach(location => {
    let venue = fetch(`https://api.foursquare.com/v2/venues/${location}?${clientId}&${clientSecret}&${version}`)
      .then(checkStatus)
      .then(getJSON);

    venues.push(venue);
  });

  return Promise.all(venues).then(response => {
    return response;
  })
}

export { fetchFromFourSquare };