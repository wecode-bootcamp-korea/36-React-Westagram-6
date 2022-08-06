import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [Id, setId] = useState('');
  const [Pw, setPw] = useState('');

  const saveUserId = event => {
    setId(event.target.value);
  };

  const saveUserPw = event => {
    setPw(event.target.value);
  };

  const validationLogin = Id.includes('@') && Pw.length >= 5;

  const navigate = useNavigate();

  const goToMain = () => {
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
          onChange={saveUserId}
        />
        <input
          id="input_password"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
        />
        <button
          id="login_btn"
          disabled={validationLogin ? false : true}
          className={validationLogin ? 'loginYes' : 'loginNo'}
          onClick={goToMain}
        >
          로그인
        </button>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </form>
    </div>
  );
};

export default Login;
