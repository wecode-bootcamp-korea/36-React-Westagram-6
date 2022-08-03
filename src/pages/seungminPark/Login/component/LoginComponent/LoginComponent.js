import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.scss';

const LoginComponent = () => {
  // ID입력창에 입력된 Value가 Email 형식인지 검증하는 정규식
  const regExp = /^[0-9a-zA-Z]+[-_.]?[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]{2,3}$/;

  // Input{id}의 Value를 실시간으로 갱신하는 State , 함수
  const [id, setId] = useState('');

  const idValueChange = e => {
    setId(e.target.value);
  };

  // Input{pw}의 Value를 실시간으로 갱신하는 State , 함수
  const [pw, setPw] = useState('');

  const pwValueChange = e => {
    setPw(e.target.value);
  };

  // 로그인 성공시 Main으로 넘어가는 함수
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-seungmin');
  };

  // 실시간으로 갱신되는 Input{id,pw}를 이용해서 현재 로그인 버튼의 상태를 판단하는 변수
  const isLoginAbleClass =
    pw !== '' && id !== '' ? 'loginAble' : 'loginDisable';
  const isLoginAbleState = pw !== '' && id !== '';

  // 로그인 버튼의 onClick에 사용되어 입력된 값이 정해진 형식이 맞는지 검증하는 함수.
  // 성공시 Main으로 이동
  const regForm = () =>
    regExp.test(id) === true && pw.length > 5
      ? goToMain()
      : regExp.test(id) === true && pw.length <= 5
      ? alert('비밀번호가 5자리 이하입니다.')
      : regExp.test(id) === false && pw.length > 5
      ? alert('이메일 형식이 아닙니다.')
      : (alert('이메일형식이 아닙니다, 비밀번호가 5자리 이하입니다.'),
        setId(''),
        setPw(''));

  return (
    <form className="loginInput">
      <input
        type="text"
        id="id"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        value={id}
        onChange={idValueChange}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            regForm();
          }
        }}
      />
      <input
        type="password"
        id="pw"
        value={pw}
        placeholder="비밀번호"
        autoComplete="off"
        onChange={pwValueChange}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            regForm();
          }
        }}
      />
      <button
        type="submit"
        className={'loginSubmit ' + isLoginAbleClass}
        disabled={!isLoginAbleState}
        onClick={regForm}
      >
        로그인
      </button>
    </form>
  );
};

export default LoginComponent;
