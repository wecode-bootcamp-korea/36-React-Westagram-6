import React, { useState, useEffect } from 'react';
import NavMinjae from '../../../components/NavMinjae/NavMinjae';
import Feed from '../../../components/Feed/Feed';
import Footer from '../../../components/Footer/Footer';
import './Main.scss';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/minjaeJo/feedData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <>
      <NavMinjae />

      <main className="main">
        <div className="feeds">
          {feedList.map((data, i) => {
            const feed = feedList[i];
            return <Feed feed={feed} key={feed.id} />;
          })}
        </div>

        <aside className="main-right">
          <div className="user">
            <img alt="니니즈패밀리" src="images/minjaeJo/niniz.png" />
            <div className="user__info">
              <span className="user-ID">NINIZ</span>
              <span className="user__text">세계최고 니니즈 패밀리</span>
            </div>
          </div>

          <div className="stories__container">
            <div className="container__header">
              <span>스토리</span>
              <button>모두 보기</button>
            </div>
            <ul className="stories__list">
              <li className="stories__story">
                <div className="story__profile-img-ring">
                  <img
                    className="profile-img"
                    alt="라이언"
                    src="/images/minjaeJo/RYAN.jpeg"
                  />
                </div>
                <div className="story__user-info">
                  <span className="user-ID">RYAN</span>
                  <span className="time-stamp">3분 전</span>
                </div>
              </li>
              <li className="stories__story">
                <div className="story__profile-img-ring">
                  <img
                    className="profile-img"
                    alt="프로도"
                    src="/images/minjaeJo/FRODO.jpeg"
                  />
                </div>
                <div className="story__user-info">
                  <span className="user-ID">FRODO</span>
                  <span className="time-stamp">4분 전</span>
                </div>
              </li>
              <li className="stories__story">
                <div className="story__profile-img-ring">
                  <img
                    className="profile-img"
                    alt="스카피"
                    src="/images/minjaeJo/SCAPPY.jpeg"
                  />
                </div>
                <div className="story__user-info">
                  <span className="user-ID">SCAPPY</span>
                  <span className="time-stamp">5분 전</span>
                </div>
              </li>
              <li className="stories__story">
                <div className="story__profile-img-ring">
                  <img
                    className="profile-img"
                    alt="앙몬드"
                    src="/images/minjaeJo/ANGMOND.jpeg"
                  />
                </div>
                <div className="story__user-info">
                  <span className="user-ID">ANGMOND</span>
                  <span className="time-stamp">6분 전</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="recommendation__container">
            <div className="container__header">
              <span>회원님을 위한 추천</span>
              <button>모두 보기</button>
            </div>
            <ul className="recommendation__list">
              <li className="recommendation__user">
                <div className="recommendation__info">
                  <img
                    className="profile-img"
                    alt="어피치"
                    src="/images/minjaeJo/APEACH.jpeg"
                  />
                  <div className="recommendation__user-info">
                    <span className="user-ID">APEACH</span>
                    <span className="recommendation__users">
                      RYAN님 외 1명이 추천합니다
                    </span>
                  </div>
                </div>
                <button className="recommendation__user-follow">팔로우</button>
              </li>
              <li className="recommendation__user">
                <div className="recommendation__info">
                  <img
                    className="profile-img"
                    alt="튜브"
                    src="/images/minjaeJo/TUBE.png"
                  />
                  <div className="recommendation__user-info">
                    <span className="user-ID">TUBE</span>
                    <span className="recommendation__users">
                      SCAPPY님 외 1명이 추천합니다
                    </span>
                  </div>
                </div>
                <button className="recommendation__user-follow">팔로우</button>
              </li>
              <li className="recommendation__user">
                <div className="recommendation__info">
                  <img
                    className="profile-img"
                    alt="제이지"
                    src="/images/minjaeJo/JAY-G.jpeg"
                  />
                  <div className="recommendation__user-info">
                    <span className="user-ID">JAY-G</span>
                    <span className="recommendation__users">
                      FRODO님 외 1명이 추천합니다
                    </span>
                  </div>
                </div>
                <button className="recommendation__user-follow">팔로우</button>
              </li>
            </ul>
          </div>

          <Footer />
        </aside>
      </main>
    </>
  );
};

export default Main;
