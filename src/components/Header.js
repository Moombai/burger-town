import React from 'react';

const Header = (props) => (
  <div className="Header">
    <div
      id="menu"
      role="button"
      tabIndex="0"
      aria-expanded={`${props.extendSidebar}`}
      onClick={props.handleSidebarToggle}
      onKeyPress={props.handleSidebarToggle}
      >
      <span className="hamburger"></span>
      <span className="hamburger"></span>
      <span className="hamburger"></span>
    </div>
  </div>
);

export default Header;