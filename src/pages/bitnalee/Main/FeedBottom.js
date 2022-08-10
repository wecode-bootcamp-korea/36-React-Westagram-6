import React, { useState } from 'react';
import CommentBox from './CommentBox';
import Comment from './Comment';

const FeedBottom = props => {
  const { item } = props;
  const [commentArr, setCommentArr] = useState([]);

  function addComnnet(data) {
    setCommentArr(prevData => {
      return [...prevData, data];
    });
  }

  return (
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
          <strong>{item.userName}</strong>님 외 <strong>{item.userLike}</strong>
          이 좋아합니다.
        </span>
        <ul className="addUl">
          {commentArr.map(function (item, idx) {
            return <Comment text={item} key={idx} />;
          })}
        </ul>
      </div>

      <CommentBox updateData={addComnnet} />
    </div>
  );
};

export default FeedBottom;
