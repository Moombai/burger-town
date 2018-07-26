function fetchFromFourSquare() {
  let venue1 = fetch('https://api.foursquare.com/v2/venues/58188c2b38fab86819349c50?client_id=VUQYEQENPANR3UEYUMV2TS3A10CIMJ55WB3IL5ZHOWGDQOAP&client_secret=TQU2LWXFBSYUBNGPY4N4Q14BYKO1NWHMWWQGFQ1UQF4HY12D&v=20180710').then(response => response.json());
  let venue2 = fetch('https://api.foursquare.com/v2/venues/56372298498eccf54c9b7aef?client_id=VUQYEQENPANR3UEYUMV2TS3A10CIMJ55WB3IL5ZHOWGDQOAP&client_secret=TQU2LWXFBSYUBNGPY4N4Q14BYKO1NWHMWWQGFQ1UQF4HY12D&v=20180710').then(response => response.json());
  let venue3 = fetch('https://api.foursquare.com/v2/venues/557ade61498e2f0253159e93?client_id=VUQYEQENPANR3UEYUMV2TS3A10CIMJ55WB3IL5ZHOWGDQOAP&client_secret=TQU2LWXFBSYUBNGPY4N4Q14BYKO1NWHMWWQGFQ1UQF4HY12D&v=20180710').then(response => response.json());
  let venue4 = fetch('https://api.foursquare.com/v2/venues/4fbabe9be4b0c673b642103c?client_id=VUQYEQENPANR3UEYUMV2TS3A10CIMJ55WB3IL5ZHOWGDQOAP&client_secret=TQU2LWXFBSYUBNGPY4N4Q14BYKO1NWHMWWQGFQ1UQF4HY12D&v=20180710').then(response => response.json());
  let venue5 = fetch('https://api.foursquare.com/v2/venues/4ddbb28e18388dd692371228?client_id=VUQYEQENPANR3UEYUMV2TS3A10CIMJ55WB3IL5ZHOWGDQOAP&client_secret=TQU2LWXFBSYUBNGPY4N4Q14BYKO1NWHMWWQGFQ1UQF4HY12D&v=20180710').then(response => response.json());

  return Promise.all([venue1, venue2, venue3, venue4, venue5]).then(venues => {
    return venues;
  })
}

export { fetchFromFourSquare };