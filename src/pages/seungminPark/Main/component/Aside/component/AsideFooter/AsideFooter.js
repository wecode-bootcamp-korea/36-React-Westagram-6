import React from 'react';
import './AsideFooter.scss';

const AsideFooter = () => {
  return (
    <footer className="asideFooter">
      <div className="recommendedFooterWrap">
        <ul>
          <li>소개</li>
          <li>도움말</li>
          <li>홍보 센터</li>
          <li>API</li>
          <li>채용 정보</li>
          <li>개인정보처리방침</li>
          <li>약관</li>
          <li>위치</li>
          <li>언어</li>
        </ul>
      </div>
      <div className="footerCorp">© 2022 INSTAGRAM FROM META</div>
    </footer>
  );
};

export default AsideFooter;
