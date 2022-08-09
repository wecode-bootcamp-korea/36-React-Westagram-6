import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.scss';

const LoginComponent = () => {
  const [inputValue, setInputValue] = useState({ id: '', pw: '' });

  const inputValueChange = e => {
    const { id, value } = e.target;
    setInputValue({ ...inputValue, [id]: value });
  };

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seungmin');
  };

  const isLoginAbleState = inputValue.pw !== '' && inputValue.id !== '';

  const regExp = /^[0-9a-zA-Z]+[-_.]?[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]{2,3}$/;
  const regForm = () =>
    regExp.test(inputValue.id) === true && inputValue.pw.length > 5
      ? goToMain()
      : regExp.test(inputValue.id) === true && inputValue.pw.length <= 5
      ? alert('비밀번호가 5자리 이하입니다.')
      : regExp.test(inputValue.id) === false && inputValue.pw.length > 5
      ? alert('이메일 형식이 아닙니다.')
      : (alert('이메일형식이 아닙니다, 비밀번호가 5자리 이하입니다.'),
        setInputValue({ id: '', pw: '' }));

  return (
    <form className="loginComponent" onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        id="id"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        value={inputValue.id}
        onChange={inputValueChange}
      />
      <input
        type="password"
        id="pw"
        value={inputValue.pw}
        placeholder="비밀번호"
        autoComplete="off"
        onChange={inputValueChange}
      />
      <button
        className={
          isLoginAbleState
            ? 'loginSubmit loginAble'
            : 'loginSubmit loginDisable'
        }
        disabled={!isLoginAbleState}
        onClick={regForm}
      >
        로그인
      </button>
    </form>
  );
};

export default LoginComponent;
