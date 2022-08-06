import React from 'react';
import '../../pages/minjaeJo/Main/Main.scss';

const Comment = props => {
  return (
    <li className="feed__comment">
      <div className="feed__comment--content">
        <div>
          <span className="user-ID">JMJ</span>
          <span className="comment__text">{props.userComment}</span>
        </div>
        <button>
          <i className="far fa-heart" />
        </button>
      </div>
    </li>
  );
};

export default Comment;
