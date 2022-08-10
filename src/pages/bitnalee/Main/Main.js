import React, { useState, useEffect } from 'react';
import NavbarMain from '../../../components/NavbarMain/NavbarMain';
import './Main.scss';
import StoryCommand from './StoryCommand';
import FeedBottom from './FeedBottom';

const array = [
  '소개',
  '도움말',
  '홍보 센터',
  'API',
  '채용 정보',
  '개인정보처리방침',
  '약관',
  '위치',
  '인기',
  '계정',
  '해시태그',
  '언어',
];

const MainBitna = () => {
  const [feedList, setFeedList] = useState([]);
  useEffect(() => {
    fetch('/data/bitnaData.json')
      .then(response => {
        return response.json();
      })
      .then(result => {
        setFeedList(result);
      });
  }, []);

  return (
    <div>
      <NavbarMain />

      <main className="main">
        <div className="wrap">
          {feedList.map((item, idx) => {
            return (
              <div className="feeds" key={idx}>
                <article className="article">
                  <div className="contentTop">
                    <div className="profileBox">
                      <img src={item.profileImg} alt="" />
                      <div className="info">
                        <p className="title">{item.profileTitle}</p>
                        <p className="text">{item.profileName}</p>
                      </div>
                    </div>

                    <button className="rightButton">
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>

                  <img src={item.feedImg} alt="" />

                  <FeedBottom item={item} />
                </article>
              </div>
            );
          })}

          <div className="main-right">
            <div className="myProfile">
              <div className="profileBox">
                <img src="/images/bitnalee/feedimg.jpeg" alt="" />
                <div className="info">
                  <p className="title">Mardi Mercredi</p>
                  <p className="text">마르디</p>
                </div>
              </div>
            </div>
            <StoryCommand />
            <StoryCommand />
          </div>
        </div>
      </main>
      <footer className="footer">
        <ul>
          {array.map((item, idx) => {
            return <li key={idx}> {item}</li>;
          })}
        </ul>
      </footer>
    </div>
  );
};

export default MainBitna;
