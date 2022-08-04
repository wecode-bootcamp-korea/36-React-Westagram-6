import React, { useState } from 'react';

// 댓글 엘리먼트, 부모한테 댓글을 받아옴
const Comment = prop => {
  return (
    <div>
      <strong>bitnalee</strong>
      {prop.text}
    </div>
  );
};

export default Comment;
