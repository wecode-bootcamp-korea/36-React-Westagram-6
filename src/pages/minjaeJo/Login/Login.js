import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate('/main-minjae');
  };

  return (
    <div className="login">
      <h1 id="title">Westagram</h1>
      <form id="login-form">
        <input
          id="input_id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input id="input_password" type="password" placeholder="비밀번호" />
        <button
          id="login_btn"
          className="login_btn-disabled"
          disabled="disabled"
        >
          로그인
        </button>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </form>
      <button onClick={goMain}>메인페이지로</button>
    </div>
  );
};

export default Login;
