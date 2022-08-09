import React, { useState } from 'react';
import './Comments.scss';

const Comments = ({ value, key }) => {
  const [isLiked, setIsLiked] = useState(false);

  const like = event => {
    event.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <li key={key} className="comments" onClick={like}>
      <div className="commentBox">
        <span className="commentName">Me</span>
        {value}
      </div>
      <div className="commentLike">
        <i
          className={
            isLiked
              ? 'fa-heart fa-xs fa-solid commnetLiked'
              : 'fa-heart fa-xs fa-regular'
          }
        />
      </div>
    </li>
  );
};

export default Comments;
