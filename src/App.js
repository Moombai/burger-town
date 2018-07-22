import React, { Component } from 'react';
import GoogleMap from './components/google_map';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      locations: [
        { title: 'Smokestak', location: { lat: 51.523673, lng: -0.07291799999995874 }},
        { title: 'The Bike Shed', location: { lat: 51.5270352, lng: -0.07888700000000881 }},
        { title: 'Bodean\'s', location: { lat: 51.5281427, lng: -0.09120469999993475 }},
        { title: 'Tramshed', location: { lat: 51.52586489999999, lng: -0.08164069999997992 }},
        { title: 'Red Dog Saloon', location: { lat: 51.5274037, lng: -0.08067879999998695 }}
      ],
      displayedLocations: ['Smokestak', 'The Bike Shed', 'Bodean\'s', 'Tramshed', 'Red Dog Saloon'],
      restaurants: [],
      query: "",
      clickedListItem: "",
      extendSidebar: false,
      failedRequestMessage: ""
    };
    this.locationStore = ['Smokestak', 'The Bike Shed', 'Bodean\'s', 'Tramshed', 'Red Dog Saloon'];
  }

  handleQuery = (event) => {
    this.setState({
      query: event.target.value
    });
    // const updatedLocations = this.state.displayedLocations
    //                           .filter(location => location.toLowerCase().includes(event.target.value.toLowerCase()));
    this.setState({
      displayedLocations: this.locationStore
        .filter(location => location.toLowerCase().includes(event.target.value.toLowerCase()))
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    const listContent = e.target.textContent;
    this.setState({clickedListItem: listContent});
  }

  handleSidebarToggle = (e) => {
    e.preventDefault();
    this.setState({
      extendSidebar: !this.state.extendSidebar
    });
  }

  componentDidMount() {
    var venue1 = fetch('http://localhost:8888/mock-1.json').then(response => response.json());
    var venue2 = fetch('http://localhost:8888/mock-2.json').then(response => response.json());
    var venue3 = fetch('http://localhost:8888/mock-3.json').then(response => response.json());
    var venue4 = fetch('http://localhost:8888/mock-4.json').then(response => response.json());
    var venue5 = fetch('http://localhost:8888/mock-5.json').then(response => response.json());

    Promise.all([venue1, venue2, venue3, venue4, venue5]).then(venues => {
      this.setState({
        restaurants: venues
      })
    }).catch(err => {
      const message = "We were unable to load data from foursquare";
      this.setState({
        failedRequestMessage: message
      })
      console.log(message, err);
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          locations={this.state.locations}
          handleQuery={this.handleQuery}
          handleClick={this.handleClick}
          extendSidebar={this.state.extendSidebar}
          query={this.state.query}
        />
        <div className={`Main ${this.state.extendSidebar ? 'main-extra' : ''}`}>
          <Header handleSidebarToggle={this.handleSidebarToggle} />
          {/* Map me!
          <button onClick={() => this.setState({ lat: 40.7128, lng: -74.005 })}>
            New York
          </button> */}
          <GoogleMap
            locations={this.state.locations}
            displayedLocations={this.state.displayedLocations}
            restaurants={this.state.restaurants}
            clickedListItem={this.state.clickedListItem}
            lat={51.523673}
            lng={-0.07291799999995874}
            />
        </div>
      </div>
    );
  }
}

export default App;
