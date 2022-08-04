import React, { useState } from 'react';
import './Login.scss';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const LoginBitna = () => {
  const [id, idValue] = useState('');
  const [pw, pwValue] = useState('');
  const [val, setVal] = useState(true);

  // 아아디 비밀번호 데이터 전달 함수
  function saveUserld(e) {
    e.target.id === 'id' ? idValue(e.target.value) : pwValue(e.target.value);
    // 아이디 비밀번호 기준 충족시, 로그인 버튼 활성화 시킬 함수
    id.length > 5 && pw.length > 5 ? setVal(false) : setVal(true);
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
          <button disabled={val} type="button" id="button">
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
