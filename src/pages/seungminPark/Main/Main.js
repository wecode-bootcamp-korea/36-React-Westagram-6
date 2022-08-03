import React from 'react';
import Posting from './component/Posting/Posting';
import Aside from './component/Aside/Aside';
import './Main.scss';

const MainSeungmin = () => {
  return (
    <main className="mainPage">
      <Posting />
      <Aside />
    </main>
  );
};

export default MainSeungmin;
