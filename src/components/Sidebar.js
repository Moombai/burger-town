import React from 'react';


const Sidebar = (props) => (
  <div className={`Sidebar ${props.extendSidebar ? 'sidebar-extra' : ''}`}>
    <div className="container">
      <input
        type="text"
        placeholder="Search by location"
        value={props.query}
        onChange={props.handleQuery}
      />
      {/* Given a list of locations we compare the values with our search query */}
      <ul>
        {props.locations
          .filter(location => location.title.toLowerCase().includes(props.query.toLowerCase()))
          .map((location, key) => (
          <li key={key} onClick={props.handleClick}>{location.title}</li>
        )) }
      </ul>
    </div>
  </div>
);

export default Sidebar;