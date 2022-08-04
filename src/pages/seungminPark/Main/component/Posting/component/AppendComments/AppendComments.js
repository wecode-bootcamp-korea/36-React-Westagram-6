import React, { useState } from 'react';
import Comments from './component/Comments/Comments';
import './AppendComments.scss';

const AppendComments = () => {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);
  const [disable, setDisable] = useState(true);

  const change = event => {
    setComment(event.target.value);
    if (event.target.value === '') {
      setDisable(true);
      return;
    }
    setDisable(false);
  };
  const onAppend = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(commentValueList => [...commentValueList, comment]);
    setComment('');
    setDisable(true);
  };

  return (
    <>
      <ul className="appendComments">
        {commentArray.map((textValue, index) => (
          <Comments value={textValue} key={index} />
        ))}
      </ul>
      <div className="feedTimeStamp">2hours ago</div>
      <form className="feedAddComment" onSubmit={onAppend}>
        <input
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={change}
        />
        <button
          disabled={disable}
          type="submit"
          className={disable ? 'buttonDisable' : 'buttonAble'}
        >
          게시
        </button>
      </form>
    </>
  );
};

export default AppendComments;
