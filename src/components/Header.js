import React from 'react';

const Header = (props) => {
  let status = props.extendSidebar === false ? "false" : "true";
  return (
    <div className="Header">
      <div
        id="menu"
        role="button"
        tabIndex="0"
        aria-expanded={status}
        onClick={props.handleSidebarToggle}
        onKeyPress={props.handleSidebarToggle}
        >
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
    </div>
  );
}

export default Header;