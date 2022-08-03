import React, { useState } from 'react';
import AppendCommnets from './component/AppendComments/AppendComments';
import './Posting.scss';

const Posting = () => {
  const [postLike, setPostLike] = useState(false);

  const likePost = event => {
    if (event.target.id === 'heart') setPostLike(!postLike);
  };

  return (
    <article className="post">
      <section className="postNew">
        <div className="postNewProfile">
          <div className="postNewProfileIcon" />
          <div className="postNewProfileId">lofi_image</div>
        </div>
      </section>
      <section className="postFeed">
        <div className="postFeedHeader">
          <div className="feedHeaderProfile">
            <div className="feedHeaderIcon" />
            <div className="feedHeaderId">lofi_image</div>
          </div>
          <div className="feedHeaderFunction">
            <i className="fa-solid fa-ellipsis" />
          </div>
        </div>
        <div className="feedImage" />
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
        <div className="feedLike">좋아요 1,897개</div>
        <div className="feedAuthor">
          <span>lofi_image</span>
          <span>what a wonderful picture!!</span>
        </div>
        <AppendCommnets />
      </section>
    </article>
  );
};

export default Posting;
