import React, { useState } from 'react';
import NavbarMain from '../../../components/NavbarMain/NavbarMain';
import './Main.scss';
import CommentBox from './CommentBox';
import StoryCommand from './StoryCommand';
import Comment from './Comment';
// import Comment from './Comment';

const MainBitna = () => {
  const [commentArr, setCommentArr] = useState([]);

  function addComnnet(data) {
    setCommentArr(prevData => {
      return [...prevData, data];
    });
  }

  return (
    <div>
      {NavbarMain}

      <main className="main">
        <div className="wrap">
          <div className="feeds">
            <article className="article">
              <div className="contentTop">
                <div className="profileBox">
                  <img src="/images/bitnalee/feedimg.jpeg" alt="" />
                  <div className="info">
                    <p className="title">Mardi Mercredi</p>
                    <p className="text">마르디</p>
                  </div>
                </div>

                <button className="rightButton">
                  <span />
                  <span />
                  <span />
                </button>
              </div>

              <img src="/images/bitnalee/feedimg.jpeg" alt="" />

              <div className="contentBottom">
                <div className="contentIcon">
                  <div className="iconBox">
                    <button type="button">
                      <img src="/images/bitnalee/like.png" alt="" />
                    </button>
                    <button type="button">
                      <img src="/images/bitnalee/comment.png" alt="" />
                    </button>
                    <button type="button">
                      <img src="images/bitnalee/dm.png" alt="" />
                    </button>
                  </div>

                  <button type="button" className="link">
                    <img src="/images/bitnalee/share.png" alt="" />
                  </button>
                </div>

                <div className="userBox">
                  <img src="/images/bitnalee/feedimg.jpeg" alt="" />
                  <span className="text">
                    <strong>bitnalee</strong>님 외 <strong>486명</strong>이
                    좋아합니다.
                  </span>
                  <ul className="addUl">
                    {commentArr.map(function (item, idx) {
                      return <Comment text={item} key={idx} />;
                    })}
                  </ul>
                </div>

                <CommentBox updateData={addComnnet} />
              </div>
            </article>
          </div>
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
    </div>
  );
};

export default MainBitna;
