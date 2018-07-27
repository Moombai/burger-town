function fetchFromFourSquare() {
  const requestUrl = "https://api.foursquare.com/v2/venues/";
  const clientId = "VUQYEQENPANR3UEYUMV2TS3A10CIMJ55WB3IL5ZHOWGDQOAP";
  const clientSecret = "TQU2LWXFBSYUBNGPY4N4Q14BYKO1NWHMWWQGFQ1UQF4HY12D";
  const version = "20180710";
  let endpoint1 = `${requestUrl}58188c2b38fab86819349c50?client_id=${clientId}&client_secret=${clientSecret}&v=${version}`;
  let endpoint2 = `${requestUrl}56372298498eccf54c9b7aef?client_id=${clientId}&client_secret=${clientSecret}&v=${version}`;
  let endpoint3 = `${requestUrl}557ade61498e2f0253159e93?client_id=${clientId}&client_secret=${clientSecret}&v=${version}`;
  let endpoint4 = `${requestUrl}4fbabe9be4b0c673b642103c?client_id=${clientId}&client_secret=${clientSecret}&v=${version}`;
  let endpoint5 = `${requestUrl}4ddbb28e18388dd692371228?client_id=${clientId}&client_secret=${clientSecret}&v=${version}`;

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

  var venue1 = fetch(endpoint1).then(checkStatus).then(getJSON);
  var venue2 = fetch(endpoint2).then(checkStatus).then(getJSON);
  var venue3 = fetch(endpoint3).then(checkStatus).then(getJSON);
  var venue4 = fetch(endpoint4).then(checkStatus).then(getJSON);
  var venue5 = fetch(endpoint5).then(checkStatus).then(getJSON);

  return Promise.all([venue1, venue2, venue3, venue4, venue5]).then(venues => {
    return venues;
  })
}

export { fetchFromFourSquare };