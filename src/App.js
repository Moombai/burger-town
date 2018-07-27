import React, { Component } from 'react';
import GoogleMap from './components/google_map';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';
import * as dataUtils from './utils/data_utils';

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
    this.locationStore = this.state.locations.map(location => location.title);
  }

  handleQuery = (event) => {
    this.setState({
      query: event.target.value
    });

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
    dataUtils.fetchFromFourSquare().then(venues => {
      this.setState({
        restaurants: venues
      })
    }).catch(err => {
      const message = "Uh oh! We were unable to load your restaurant data.";
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
          failedRequestMessage={this.state.failedRequestMessage}
        />
        <div className={`Main ${this.state.extendSidebar ? 'main-extra' : ''}`}>
          <Header
            handleSidebarToggle={this.handleSidebarToggle}
            extendSidebar={this.state.extendSidebar}
          />
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
