import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './CommentBox.scss';

const CommentBox = props => {
  const [text, setText] = useState('');

  // 인풋에 입력할때마다 내용이 text 변수에 담김
  function changeComment(e) {
    setText(e.target.value);

    // 인풋에서 엔터를 쳤을 경우 글 게시
    if (e.key === 'Enter') {
      clickComment();
    }
  }

  // 게시를 누르면 콘솔로그에 입력했던 내용이 나옴
  function clickComment(e) {
    props.updateData(text);
    setText('');
  }

  return (
    <div className="commentBox">
      <input
        type="text"
        className="commentInput"
        id="commentInput"
        placeholder="댓글 달기..."
        onChange={changeComment}
        value={text}
        onKeyPress={changeComment}
      />
      <button
        type="button"
        id="commentButton"
        className="commnetButton"
        onClick={clickComment}
      >
        게시
      </button>
    </div>
  );
};

export default CommentBox;
