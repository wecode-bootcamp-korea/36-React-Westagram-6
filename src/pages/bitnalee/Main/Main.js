import React, { useState, useEffect } from 'react';
import NavbarMain from '../../../components/NavbarMain/NavbarMain';
import './Main.scss';
import CommentBox from './CommentBox';
import StoryCommand from './StoryCommand';
import Comment from './Comment';
// import Comment from './Comment';

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
  const [commentArr, setCommentArr] = useState([]);

  function addComnnet(data) {
    setCommentArr(prevData => {
      return [...prevData, data];
    });
  }
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
              <div className="feeds">
                {console.log(item)}
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
                      <img src={item.userImg} alt="" />
                      <span className="text">
                        <strong>{item.userName}</strong>님 외{' '}
                        <strong>{item.userLike}</strong>이 좋아합니다.
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
