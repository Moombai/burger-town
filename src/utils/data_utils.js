function fetchFromFourSquare(venueId) {
  let venueArray = [];
  venueId.forEach((venue, index) => {
    venueArray.push(fetch(`https://api.foursquare.com/v2/venues/${venue}?client_id=VUQYEQENPANR3UEYUMV2TS3A10CIMJ55WB3IL5ZHOWGDQOAP&client_secret=TQU2LWXFBSYUBNGPY4N4Q14BYKO1NWHMWWQGFQ1UQF4HY12D&v=20180710`).then(response => response.json()));
  });
  return venueArray;
}

export { fetchFromFourSquare };