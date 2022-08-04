import React, { useState } from 'react';
import './Login.scss';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginBitna = () => {
  const [id, idValue] = useState('');
  const [pw, pwValue] = useState('');

  function saveUserld(e) {
    if (e.target.id === 'id') {
      idValue(e.target.value);
      console.log(id);
    } else {
      pwValue(e.target.value);
      console.log(pw);
    }
  }
  return (
    <div className="login">
      <article className="article">
        <div className="logo">westargram</div>
        <div className="inputBox">
          <input
            onChange={saveUserld}
            type="text"
            id="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={saveUserld}
            type="password"
            id="pw"
            placeholder="비밀번호"
          />
          <button type="button" id="button">
            로그인
          </button>
        </div>
        <div className="forget">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </article>
    </div>
  );
};

export default LoginBitna;
