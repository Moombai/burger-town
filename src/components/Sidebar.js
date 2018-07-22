import React from 'react';


const Sidebar = (props) => (
  <div className={`Sidebar ${props.extendSidebar ? 'sidebar-extra' : ''}`}>
    <div className="container">
      <label htmlFor="restaurantSearch" className="visuallyhidden">Search: </label>
      <input
        id="restaurantSearch"
        type="text"
        name="search"
        placeholder="Search by location"
        value={props.query}
        onChange={props.handleQuery}
      />
      {/* Given a list of locations we compare the values with our search query */}
      <ul>
        {props.locations
          .filter(location => location.title.toLowerCase().includes(props.query.toLowerCase()))
          .map((location, key) => (
            <li key={key} onClick={props.handleClick}><a href={`#map-item-${key}`} role="button">{location.title}</a></li>
        )) }
      </ul>
      <div className="alert">
        <p>{props.failedRequestMessage}</p>
      </div>
    </div>
  </div>
);

export default Sidebar;