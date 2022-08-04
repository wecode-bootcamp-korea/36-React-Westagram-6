import React, { useState } from 'react';
import './Main.scss';
import CommentBox from './CommentBox';
import StoryCommand from './StoryCommand';

const MainBitna = () => {
  return (
    <div>
      <nav className="nav">
        <div className="inner">
          <div className="logo">
            <img src="/images/bitnalee/instagram.png" alt="insta logo" />
            <a href="#">westargram</a>
          </div>

          <div className="search">
            <img src="/images/bitnalee/serch.png" />
            <input type="text" placeholder="검색" />
          </div>

          <div className="utility">
            <div className="utilityBox">
              <a href="#" className="utilityicon">
                <img src="./images/bitnalee/explore.png" alt="explore" />
              </a>
              <a href="#" className="utilityicon">
                <img src="/images/bitnalee/heart.png" alt="like" />
              </a>
              <a href="#" className="utilityicon">
                <img src="/images/bitnalee/profile.png" alt="profile" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="main">
        <div className="wrap">
          <div className="feeds">
            <article className="article">
              <div className="contentTop">
                <div className="profileBox">
                  <img src="/images/bitnalee/feedimg.jpeg" />
                  <div className="info">
                    <p className="title">Mardi Mercredi</p>
                    <p className="text">마르디</p>
                  </div>
                </div>

                <button className="rightButton">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

              <img src="/images/bitnalee/feedimg.jpeg" />

              <div className="contentBottom">
                <div className="contentIcon">
                  <div className="iconBox">
                    <button type="button">
                      <img src="/images/bitnalee/like.png" />
                    </button>
                    <button type="button">
                      <img src="/images/bitnalee/comment.png" />
                    </button>
                    <button type="button">
                      <img src="/bitnalee/dm.png" />
                    </button>
                  </div>

                  <button type="button" className="link">
                    <img src="/images/bitnalee/share.png" />
                  </button>
                </div>

                <div className="userBox">
                  <img src="/images/bitnalee/feedimg.jpeg" />
                  <span className="text">
                    <strong>bitnalee</strong>님 외 <strong>486명</strong>이
                    좋아합니다.
                  </span>
                  <ul className="addUl"></ul>
                </div>

                <CommentBox />
              </div>
            </article>
          </div>
          <div className="main-right">
            <div className="myProfile">
              <div className="profileBox">
                <img src="/images/itnalee/feedimg.jpeg" />
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
    </div>
  );
};

export default MainBitna;
