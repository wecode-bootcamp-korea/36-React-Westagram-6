import React from 'react';
import './Login.scss';
import LoginComponent from './component/LoginComponent/LoginComponent';
import PartitionLine from './component/PartitionLine/PartitionLine';

const LoginSeungmin = () => {
  return (
    <main className="loginSeungmin">
      <section className="loginContainer">
        <header className="loginLogo">westagram</header>
        <LoginComponent />
        <section className="partitionSection">
          <PartitionLine />
          <div className="partitionText">또는</div>
          <PartitionLine />
        </section>
        <div className="questionPassword">비밀번호를 잊으셨나요?</div>
      </section>
      <section className="signinSection">
        <div className="signinText">계정이 없으신가요?</div>
        <div className="signinLink">가입하기</div>
      </section>
    </main>
  );
};

export default LoginSeungmin;
