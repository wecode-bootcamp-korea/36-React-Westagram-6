import React from 'react';

// 댓글 엘리먼트, 부모한테 댓글을 받아옴
const Comment = props => {
  const { text } = props;

  return (
    <div>
      <strong>bitnalee</strong>
      {text}
    </div>
  );
};

export default Comment;
