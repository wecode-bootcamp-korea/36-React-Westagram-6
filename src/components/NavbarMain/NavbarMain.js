import React from 'react';
import './NavbarMain.scss';

const NavbarMain = () => {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <div className="logo" />
      </div>
      <div className="navbarSearch">
        <input type="text" placeholder="검색" />
      </div>
      <div className="navbarMenu">
        <div className="navbarMenuItems">
          <i className="fa-solid fa-house fa-lg" />
        </div>
        <div className="navbarMenuItems">
          <i className="fa-solid fa-paper-plane fa-lg" />
        </div>
        <div className="navbarMenuItems">
          <i className="fa-solid fa-table-cells-large fa-lg" />
        </div>
        <div className="navbarMenuItems">
          <i className="fa-solid fa-compass fa-lg" />
        </div>
        <div className="navbarMenuItems" />
        <div className="navbarMenuItems" />
      </div>
    </nav>
  );
};

export default NavbarMain;
