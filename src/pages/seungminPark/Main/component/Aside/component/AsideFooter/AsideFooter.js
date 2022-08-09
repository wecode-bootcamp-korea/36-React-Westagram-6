import React from 'react';
import asideFooterData from './data.js';
import './AsideFooter.scss';

const AsideFooter = () => {
  return (
    <footer className="asideFooter">
      <div className="recommendedFooterWrap">
        <ul>
          {asideFooterData.map(data => (
            <li key={data.id}>{data.text}</li>
          ))}
        </ul>
      </div>
      <div className="footerCorp">© 2022 INSTAGRAM FROM META</div>
    </footer>
  );
};

export default AsideFooter;
