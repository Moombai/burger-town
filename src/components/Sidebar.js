import React from 'react';

const Sidebar = (props) => (
  <div className="Sidebar">
    <div className="container">
      <input type="text" placeholder="Search by location" />
      <ul>
        {props.locations.map((location, key) => (
          <li key={key}>{location.title}</li>
        )) }
      </ul>
    </div>
  </div>
);

export default Sidebar;