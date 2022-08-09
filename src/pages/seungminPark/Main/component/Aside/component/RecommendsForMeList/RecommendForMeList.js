import React from 'react';
import Recommend from './component/Recommend/Recommend';
import './RecommendsForMeList.scss';

const RecommendsForMeList = () => {
  return (
    <section className="recommendsForMeList">
      <Recommend />
      <Recommend />
      <Recommend />
      <Recommend />
      <Recommend />
    </section>
  );
};

export default RecommendsForMeList;
