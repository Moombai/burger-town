import React, { Component } from 'react';
import GoogleMap from './components/google_map';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  constructor() {
    // TODO:
    // Add proper data structure to hold data from all restaurant venues
    // (at the moment we just have one restaurant)
    // idea: we could run a promise.all before updating state with the appropriate data structure
    super();
    this.state = {
      locations: [
        { title: 'Smokestak', location: { lat: 51.523673, lng: -0.07291799999995874 }},
        { title: 'The Bike Shed', location: { lat: 51.5270352, lng: -0.07888700000000881 }},
        { title: 'Bodean\'s', location: { lat: 51.5281427, lng: -0.09120469999993475 }},
        { title: 'Tramshed', location: { lat: 51.52586489999999, lng: -0.08164069999997992 }},
        { title: 'Red Dog Saloon', location: { lat: 51.5274037, lng: -0.08067879999998695 }}
      ],
      restaurants: []
    };
  }
  componentDidMount() {
    // fetch(' https://demo7381913.mockable.io')
    fetch('http://localhost:8888/mock-1.json')
      .then(response => response.json())
      .then(parsed => parsed.response.venue)
      .then(venue => {
        this.setState({
          restaurants: venue
        });
      });
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="Main">
          <Header />
          {/* Map me!
          <button onClick={() => this.setState({ lat: 40.7128, lng: -74.005 })}>
            New York
          </button> */}
          <GoogleMap
            locations={this.state.locations}
            restaurants={this.state.restaurants}
            lat={51.523673}
            lng={-0.07291799999995874}
            />
        </div>
      </div>
    );
  }
}

export default App;
