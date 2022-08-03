import './Main.scss';

const Main = () => {
  return (
    <>
      <div className="nav">
        <nav className="navigation-bar">
          <div className="navigation-bar__column">
            <i className="fab fa-instagram" />
            <div className="navigation-bar__divider" />
            <span className="navigation-bar__title">Westagram</span>
          </div>
          <div className="navigation-bar__column">
            <i className="fas fa-search" />
            <input
              className="navigation-bar__search"
              type="text"
              placeholder="검색"
            />
          </div>
          <div className="navigation-bar__column">
            <img alt="나침반" src="/images/minjaeJo/explore.png" />
            <img alt="하트" src="/images/minjaeJo/heart.png" />
            <img alt="내정보" src="/images/minjaeJo/profile.png" />
            <div className="red-dot" />
          </div>
        </nav>
      </div>
      <main className="main">
        <div className="feeds">
          <article className="feed">
            <div className="feed__header">
              <div className="feed__user">
                <img
                  className="profile-img"
                  src="/images/minjaeJo/JORDY.jpeg"
                  alt="죠르디"
                />
                <span className="user-ID feed_user-ID">JORDY</span>
              </div>
              <i className="fas fa-ellipsis-h" />
            </div>

            <div className="feed__img">
              <img alt="남극" src="/images/minjaeJo/JORDY_hometown.jpg" />
            </div>

            <div className="feed__btns">
              <div className="feed__btns--box">
                <i id="red-heart" className="fas fa-heart" />
                <i className="far fa-comment" />
                <i className="far fa-paper-plane" />
              </div>
              <i className="far fa-bookmark" />
            </div>

            <div className="feed__likes">
              <img alt="JMJ프로필" src="/images/minjaeJo/JMJ_profile.webp" />
              <span>
                <span className="user-ID">JMJ</span>님 외
                <span className="user-number"> 7명</span>이 좋아합니다
              </span>
            </div>

            <div className="feed__info">
              <span className="user-ID">JORDY</span>
              <span className="feed__text">본가 가고 싶어...</span>
              <button>더 보기</button>
            </div>

            <ul className="feed__comment-list">
              <li className="feed__comment">
                <div className="feed__comment--content">
                  <div>
                    <span className="user-ID">RYAN</span>
                    <span className="comment__text">위코드 좋긴한데</span>
                  </div>
                  <button>
                    <i className="far fa-heart" />
                  </button>
                </div>
                <span className="time-stamp">1분 전</span>
              </li>

              <li className="feed__comment">
                <div className="feed__comment--content">
                  <div>
                    <span className="user-ID">NEO</span>
                    <span className="comment__text">영혼 갈려나가는 중</span>
                  </div>
                  <button>
                    <i className="far fa-heart" />
                  </button>
                </div>
                <span className="time-stamp">3분 전</span>
              </li>
            </ul>

            <form className="comment-form">
              <input
                className="comment-form__input"
                type="text"
                placeholder="댓글 달기..."
              />
              <input
                className="comment-form__submit submit-disabled"
                type="submit"
                disabled="disabled"
                value="게시"
              />
            </form>
          </article>
        </div>

        <aside className="main-right">
          <div className="user">
            <img alt="니니즈패밀리" src="images/minjaeJo/niniz.png" />
            <div className="user__info">
              <span className="user-ID">NINIZ</span>
              <span className="user__text">세계최고 니니즈 패밀리</span>
            </div>
          </div>

          <div className="stories__container">
            <div className="container__header">
              <span>스토리</span>
              <button>모두 보기</button>
            </div>
            <ul className="stories__list">
              <li className="stories__story">
                <div className="story__profile-img-ring">
                  <img
                    className="profile-img"
                    alt="라이언"
                    src="/images/minjaeJo/RYAN.jpeg"
                  />
                </div>
                <div className="story__user-info">
                  <span className="user-ID">RYAN</span>
                  <span className="time-stamp">3분 전</span>
                </div>
              </li>
              <li className="stories__story">
                <div className="story__profile-img-ring">
                  <img
                    className="profile-img"
                    alt="프로도"
                    src="/images/minjaeJo/FRODO.jpeg"
                  />
                </div>
                <div className="story__user-info">
                  <span className="user-ID">FRODO</span>
                  <span className="time-stamp">4분 전</span>
                </div>
              </li>
              <li className="stories__story">
                <div className="story__profile-img-ring">
                  <img
                    className="profile-img"
                    alt="스카피"
                    src="/images/minjaeJo/SCAPPY.jpeg"
                  />
                </div>
                <div className="story__user-info">
                  <span className="user-ID">SCAPPY</span>
                  <span className="time-stamp">5분 전</span>
                </div>
              </li>
              <li className="stories__story">
                <div className="story__profile-img-ring">
                  <img
                    className="profile-img"
                    alt="앙몬드"
                    src="/images/minjaeJo/ANGMOND.jpeg"
                  />
                </div>
                <div className="story__user-info">
                  <span className="user-ID">ANGMOND</span>
                  <span className="time-stamp">6분 전</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="recommandation__container">
            <div className="container__header">
              <span>회원님을 위한 추천</span>
              <button>모두 보기</button>
            </div>
            <ul className="recommendation__list">
              <li className="recommendation__user">
                <div className="recommendation__info">
                  <img
                    className="profile-img"
                    alt="어피치"
                    src="/images/minjaeJo/APEACH.jpeg"
                  />
                  <div className="recommendation__user-info">
                    <span className="user-ID">APEACH</span>
                    <span className="recommendation__users">
                      RYAN님 외 1명이 추천합니다
                    </span>
                  </div>
                </div>
                <button className="recommendation__user-follow">팔로우</button>
              </li>
              <li className="recommendation__user">
                <div className="recommendation__info">
                  <img
                    className="profile-img"
                    alt="튜브"
                    src="/images/minjaeJo/TUBE.png"
                  />
                  <div className="recommendation__user-info">
                    <span className="user-ID">TUBE</span>
                    <span className="recommendation__users">
                      SCAPPY님 외 1명이 추천합니다
                    </span>
                  </div>
                </div>
                <button className="recommendation__user-follow">팔로우</button>
              </li>
              <li className="recommendation__user">
                <div className="recommendation__info">
                  <img
                    className="profile-img"
                    alt="제이지"
                    src="/images/minjaeJo/JAY-G.jpeg"
                  />
                  <div className="recommendation__user-info">
                    <span className="user-ID">JAY-G</span>
                    <span className="recommendation__users">
                      FRODO님 외 1명이 추천합니다
                    </span>
                  </div>
                </div>
                <button className="recommendation__user-follow">팔로우</button>
              </li>
            </ul>
          </div>

          <footer>
            <p>
              Westagram 정보 &middot; 지원 &middot; 홍보 센터 &middot; API
              &middot; <br />
              채용 정보 &middot; 개인정보처리방침 &middot; 약관 &middot; <br />
              디렉터리 &middot; 프로필 &middot; 해시태그 &middot; 언어
            </p>
            <span>@ 2022 WESTAGRAM</span>
          </footer>
        </aside>
      </main>
    </>
  );
};

export default Main;
