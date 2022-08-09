import React, { useEffect, useState } from 'react';
import PostFeed from './component/PostFeed/PostFeed';
import './Posting.scss';

const Posting = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/seungminFeed.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <article className="posting">
      <section className="postNew">
        <div className="postNewProfile">
          <div className="postNewProfileIcon" />
          <div className="postNewProfileId">lofi_image</div>
        </div>
      </section>
      {feedList.map(data => {
        return (
          <PostFeed
            key={data.id}
            userId={data.userId}
            profileImg={data.profileImg}
            feedContents={data.feedContents}
            feedImg={data.feedImg}
            feedlikes={data.feedlikes}
          />
        );
      })}
    </article>
  );
};

export default Posting;
