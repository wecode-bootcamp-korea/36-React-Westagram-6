import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import './Feed.scss';

const Feed = props => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const postActive = comment.length > 0;

  const inputComment = e => {
    setComment(e.target.value);
  };

  const addComment = e => {
    e.preventDefault();
    setCommentList([...commentList, comment]);
    setComment('');
  };

  return (
    <article className="feed">
      <div className="feed__header">
        <div className="feed__user">
          <img className="profile-img" src={props.feed.userImg} alt="죠르디" />
          <span className="user-ID feed_user-ID">{props.feed.userID}</span>
        </div>
        <i className="fas fa-ellipsis-h" />
      </div>

      <div className="feed__img">
        <img alt="남극" src={props.feed.feedImg} />
      </div>

      <div className="feed__btns">
        <div className="feed__btns--box">
          <i id="red-heart" className="fas fa-heart" />
          <i className="far fa-comment" />
          <i className="far fa-paper-plane" />
        </div>
        <i className="far fa-bookmark" />
      </div>

      <div className="feed__likes">
        <img alt="JMJ프로필" src="/images/minjaeJo/JMJ_profile.webp" />
        <span>
          <span className="user-ID">JMJ</span>님 외
          <span className="user-number"> 7명</span>이 좋아합니다
        </span>
      </div>

      <div className="feed__info">
        <span className="user-ID">{props.feed.userID}</span>
        <span className="feed__text">{props.feed.feedText}</span>
      </div>

      <ul className="feed__comment-list">
        {commentList.map((comment, i) => {
          return <Comment comment={comment} key={i} />;
        })}
      </ul>

      <form className="comment-form">
        <input
          className="comment__input"
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={inputComment}
        />
        <button
          type="submit"
          className={postActive ? 'submit-abled' : 'submit-disabled'}
          disabled={postActive ? false : true}
          onClick={addComment}
        >
          게시
        </button>
      </form>
    </article>
  );
};

export default Feed;
