import React from 'react';
import './NavMinjae.scss';

const NavMinjae = () => {
  return (
    <div className="nav">
      <nav className="navigation-bar">
        <div className="navigation-bar__column">
          <i className="fab fa-instagram" />
          <div className="navigation-bar__divider" />
          <span className="navigation-bar__title">Westagram</span>
        </div>
        <div className="navigation-bar__column">
          <i className="fas fa-search" />
          <input
            className="navigation-bar__search"
            type="text"
            placeholder="검색"
          />
        </div>
        <div className="navigation-bar__column">
          <img alt="나침반" src="/images/minjaeJo/explore.png" />
          <img alt="하트" src="/images/minjaeJo/heart.png" />
          <img alt="내정보" src="/images/minjaeJo/profile.png" />
          <div className="red-dot" />
        </div>
      </nav>
    </div>
  );
};

export default NavMinjae;
