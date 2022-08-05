import React from 'react';

// 댓글 엘리먼트, 부모한테 댓글을 받아옴
const Comment = props => {
  return (
    <div>
      <strong>bitnalee</strong>
      {props.text}
    </div>
  );
};

export default Comment;
