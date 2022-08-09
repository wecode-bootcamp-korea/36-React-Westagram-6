import React from 'react';
import './Comment.scss';

const Comment = props => {
  return (
    <li className="feed__comment">
      <div className="feed__comment--content">
        <div>
          <span className="user-ID">JMJ</span>
          <span className="comment__text">{props.comment}</span>
        </div>
        <button>
          <i className="far fa-heart" />
        </button>
      </div>
    </li>
  );
};

export default Comment;
