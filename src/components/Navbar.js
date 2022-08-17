import React from 'react';
import NavLink from './NavLink';

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">EDVORA</div>
        <div className="nav-links">
          <NavLink title="Orders" to="/Home" />
          <NavLink title="Statistics" to="/statistics" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
