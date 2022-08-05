import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

let idLength = 0;
let pwLength = 0;

const LoginBitna = () => {
  const [val, setVal] = useState(true);

  // 아아디 비밀번호 데이터 전달 함수
  function saveUserld(e) {
    // 아이디, 패스워드 입력값 길이
    if (e.target.id === 'id') {
      idLength = e.target.value.length;
    } else {
      pwLength = e.target.value.length;
    }

    // 아이디 비밀번호 기준 충족시, 로그인 버튼 활성화 시킬 함수
    idLength >= 5 && pwLength >= 5 ? setVal(false) : setVal(true);
  }
  const navigate = useNavigate();
  const goTomain = () => {
    navigate('/main-bitna');
  };

  return (
    <div className="login">
      <article className="article">
        <div className="logo">westargram</div>
        <div className="inputBox">
          {/* {console.log(id.length, 'html 영역')} */}
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
          <button disabled={val} type="button" id="button" onClick={goTomain}>
            로그인
          </button>
        </div>
        <div className="forget">
          <a href="https://bitnaleeeee.github.io/">비밀번호를 잊으셨나요?</a>
        </div>
      </article>
    </div>
  );
};

export default LoginBitna;
