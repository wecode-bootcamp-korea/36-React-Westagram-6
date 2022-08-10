import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavbarMain from './components/NavbarMain/NavbarMain';

import LoginSeungmin from './pages/seungminPark/Login/Login';
import MainSeungmin from './pages/seungminPark/Main/Main';

import LoginBitna from './pages/bitnalee/Login/Login';
import MainBitna from './pages/bitnalee/Main/Main';

import LoginMinjae from './pages/minjaeJo/Login/Login';
import MainMinjae from './pages/minjaeJo/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <NavbarMain /> */}
      <Routes>
        <Route path="/login-seungmin" element={<LoginSeungmin />} />
        <Route path="/main-seungmin" element={<MainSeungmin />} />
        <Route path="/login-bitna" element={<LoginBitna />} />
        <Route path="/main-bitna" element={<MainBitna />} />
        <Route path="/login-minjae" element={<LoginMinjae />} />
        <Route path="/main-minjae" element={<MainMinjae />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
