import React from 'react';
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

const FOOTER_INFO_LIST = [
  { id: 1, link: '#', text: 'Westagram 정보' },
  { id: 2, link: '#', text: '지원' },
  { id: 3, link: '#', text: '홍보 센터' },
  { id: 4, link: '#', text: 'API' },
  { id: 5, link: '#', text: '채용 정보' },
  { id: 6, link: '#', text: '개인정보처리방침' },
  { id: 7, link: '#', text: '약관' },
  { id: 8, link: '#', text: '디렉터리' },
  { id: 9, link: '#', text: '프로필' },
  { id: 10, link: '#', text: '해시태그' },
  { id: 11, link: '#', text: '언어 ' },
];
