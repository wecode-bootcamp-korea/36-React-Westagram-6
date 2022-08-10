import React from 'react';
import './StoryCommand.scss';
import './StoryCommandInfo';
import StoryCommandInfo from './StoryCommandInfo';

const StoryCommand = function () {
  return (
    <div className="storyCommand">
      <div className="moreTitle">
        <div className="text">스토리</div>
        <button type="button">더보기</button>
      </div>

      <StoryCommandInfo />

      <StoryCommandInfo />

      <StoryCommandInfo />

      <StoryCommandInfo />
    </div>
  );
};

export default StoryCommand;
