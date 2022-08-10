import React from 'react';
import { FOOTER_INFO_LIST } from './data.js';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <ul>
        {FOOTER_INFO_LIST.map(info => (
          <li key={info.id}>
            <a href={info.link}>{info.text}</a>
          </li>
        ))}
      </ul>
      <span>@ 2022 WESTAGRAM</span>
    </footer>
  );
};

export default Footer;
