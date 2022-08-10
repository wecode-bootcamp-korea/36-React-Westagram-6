import React from 'react';
import './Comment.scss';

const Comment = ({ comment }) => {
  return (
    <li className="feed__comment">
      <div className="feed__comment--content">
        <div>
          <span className="user-ID">JMJ</span>
          <span className="comment__text">{comment}</span>
        </div>
        <button>
          <i className="far fa-heart" />
        </button>
      </div>
    </li>
  );
};

export default Comment;
