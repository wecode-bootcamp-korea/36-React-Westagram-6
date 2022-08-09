import React, { useState } from 'react';
import AppendCommnets from '../AppendComments/AppendComments';
import './PostFeed.scss';

const PostFeed = ({ userId, profileImg, feedContents, feedImg, feedlikes }) => {
  const [postLike, setPostLike] = useState(false);

  const likePost = event => {
    if (event.target.id === 'heart') setPostLike(!postLike);
  };

  return (
    <section className="postFeed">
      <div className="postFeedHeader">
        <div className="feedHeaderProfile">
          <div className="feedHeaderIcon">
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="feedHeaderId">{userId}</div>
        </div>
        <div className="feedHeaderFunction">
          <i className="fa-solid fa-ellipsis" />
        </div>
      </div>
      <div className="feedImage">
        <img src={feedImg} alt="feedImage" />
      </div>
      <section className="feedFunctionSection">
        <div className="feedFunctions">
          <div className="feedFunctionContents">
            <div className="feedFunctionContentsItems">
              <i
                className={
                  postLike
                    ? 'fa-solid fa-heart fa-xl postHeart postLike'
                    : 'fa-regular fa-heart fa-xl postHeart'
                }
                id="heart"
                onClick={likePost}
              />
            </div>
            <div className="feedFunctionContentsItems">
              <i className="fa-regular fa-comment fa-xl" />
            </div>
            <div className="feedFunctionContentsItems">
              <i className="fa-solid fa-paper-plane fa-lg" />
            </div>
          </div>
          <div className="feedFunctionClip">
            <i className="fa-regular fa-bookmark fa-lg" />
          </div>
        </div>
      </section>
      <div className="feedLike">{feedlikes}</div>
      <div className="feedAuthor">
        <span>{userId}</span>
        <span>{feedContents}</span>
      </div>
      <AppendCommnets />
    </section>
  );
};

export default PostFeed;
