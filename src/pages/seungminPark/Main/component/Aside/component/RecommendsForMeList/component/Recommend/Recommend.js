import React from 'react';
import './Recommend.scss';

const Recommend = () => {
  return (
    <div className="recommendedProfile">
      <div className="recommendedIcon" />
      <div className="recommendedId">
        <p className="recommendedIdEng">baghyeonjis</p>
        <p className="recommendedComment">회원님을 위한 추천</p>
      </div>
      <div className="recommendFollow">팔로우</div>
    </div>
  );
};

export default Recommend;
