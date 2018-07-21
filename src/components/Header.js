import React from 'react';

const Header = (props) => (
  <div className="Header">
    <div id="menu" onClick={props.handleSidebarToggle}>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
    </div>
  </div>
);

export default Header;