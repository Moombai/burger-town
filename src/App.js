import React, { Component } from 'react';
import GoogleMap from './components/google_map';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { lat: 51.523673, lng: -0.07291799999995874 };
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
          <GoogleMap lat={this.state.lat} lng={this.state.lng} />
        </div>
      </div>
    );
  }
}

export default App;
