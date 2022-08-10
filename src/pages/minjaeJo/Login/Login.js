import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveUserEmail = event => {
    setEmail(event.target.value);
  };

  const saveUserPw = event => {
    setPassword(event.target.value);
  };

  const validationLogin = email.includes('@') && password.length >= 5;

  const navigate = useNavigate();

  const signUp = e => {
    e.preventDefault();
    fetch('http://10.58.5.11:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  };

  const login = e => {
    e.preventDefault();
    const checkLogin = response => {
      if (!response.ok) {
        throw new Error('상태 코드 에러 발생!');
      } else {
        navigate('/main-minjae');
      }
      return response.json();
    };
    fetch('http://10.58.5.11:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(data => localStorage.setItem('TOKEN', data.accessToken))
      .then(checkLogin);
  };

  return (
    <div className="login">
      <h1 id="title">Westagram</h1>
      <form id="login-form">
        <input
          id="input_id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserEmail}
        />
        <input
          id="input_password"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
        />

        <button
          type="submit"
          id="signup_btn"
          disabled={validationLogin ? false : true}
          className={validationLogin ? 'loginYes' : 'loginNo'}
          onClick={signUp}
        >
          회원가입
        </button>

        <button
          type="submit"
          id="login_btn"
          disabled={validationLogin ? false : true}
          className={validationLogin ? 'loginYes' : 'loginNo'}
          onClick={login}
        >
          로그인
        </button>

        <a href="/">비밀번호를 잊으셨나요?</a>
      </form>
    </div>
  );
};

export default Login;
