import React from 'react';
import RecommendsForMeList from './component/RecommendsForMeList/RecommendForMeList';
import AsideFooter from './component/AsideFooter/AsideFooter';
import './Aside.scss';

const Aside = () => {
  return (
    <aside className="aside">
      <section className="recommendSection">
        <div className="recommendMyProfile">
          <div className="recommendMyIcon" />
          <div className="recommendMyId">
            <p className="recommendMyIdEng">pmb087</p>
            <p className="recommendMyIdKor">박승민</p>
          </div>
          <div className="recommendMyProfileSwitch">전환</div>
        </div>
      </section>
      <section className="recommendForMe">
        <span className="recommendForMeText">회원님을 위한 추천</span>
        <span className="recommendForMeAll">모두 보기</span>
      </section>
      <RecommendsForMeList />
      <AsideFooter />
    </aside>
  );
};

export default Aside;
