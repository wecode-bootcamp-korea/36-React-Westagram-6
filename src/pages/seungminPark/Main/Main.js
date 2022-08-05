import React from 'react';
import Posting from './component/Posting/Posting';
import Aside from './component/Aside/Aside';
import NavbarMain from '../../../components/NavbarMain/NavbarMain';
import './Main.scss';

const MainSeungmin = () => {
  return (
    <>
      <NavbarMain />
      <main className="mainSeungmin">
        <Posting />
        <Aside />
      </main>
    </>
  );
};

export default MainSeungmin;
