import styled from "styled-components";

const LoginWrapper = styled.div`
  /* 로그인 화면 */
  .login-section h3 {
    display: block;
    margin: 100px 0 60px;
    font-size: 28px;
    text-align: center;
  }

  .login-section .member-select a {
    text-decoration: underline;
    color: #8f8f8f;
  }

  .login-section .member-select a:first-child {
    color: #000;
    margin-right: 100px;
  }

  .member-select {
    width: 500px;
    margin: 0 auto 60px;
    text-align: center;
  }

  .member {
    margin: 0 auto;
    width: 500px;
  }

  .id-box span,
  .pw-box span {
    display: inline-block;
    margin-left: 8px;
  }

  .id-box {
    width: 350px;
    height: 50px;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 1px solid #000;
  }

  #ID {
    width: 85%;
    height: 100%;
    display: inline-block;
    border: none;
    text-align: center;
  }

  .pw-box {
    width: 350px;
    height: 50px;
    margin: 0 auto;
    padding: 10px 0;
    border: 1px solid #000;
  }

  #PW {
    width: 85%;
    height: 100%;
    display: inline-block;
    /* padding: 10px 0; */
    border: none;
    text-align: center;
  }

  .id-memory-box {
    width: 344px;
    margin: 20px auto 20px;
  }

  .login-btn {
    display: block;
    margin: 0 auto 10px;
    width: 350px;
    height: 50px;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
  }

  .login-other {
    width: 500px;
    padding: 0 76px;
  }

  .login-other li {
    display: inline-block;
  }

  .login-other li:first-child {
    margin-left: 54px;
  }

  .login-other li:first-child::after,
  .login-other li:nth-child(2)::after {
    content: "|";
    display: inline-block;
    padding-left: 10px;
    font-size: 13px;
    color: #8f8f8f;
  }

  .login-other li a {
    font-size: 13px;
    color: #8f8f8f;
  }
`;

export default function Login() {
  return (
    <LoginWrapper>
      <main>
        <div className="login-section">
          <h3>로그인</h3>
          <div className="member-select">
            <a href="#">회원</a>
            <a href="#">비회원</a>
          </div>
          <div className="member">
            <form action="#" method="POST">
              <div className="id-box">
                <span>
                  <img src="./images/icon-id.png" alt="아이디" />
                </span>
                <input type="text" placeholder="아이디" id="ID" />
              </div>
              <div className="pw-box">
                <span>
                  <img src="./images/icon-password.png" alt="비밀번호" />
                </span>
                <input type="password" placeholder="비밀번호" id="PW" />
              </div>
              <div className="id-memory-box">
                <input type="checkbox" id="id-memory" />
                <label for="id-memory">아이디 저장</label>
              </div>
              <button type="submit" className="login-btn">
                로그인
              </button>
            </form>

            <ul className="login-other">
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#">아이디 찾기</a>
              </li>
              <li>
                <a href="#">비밀번호 찾기</a>
              </li>
            </ul>
          </div>
        </div>

        {/* 네이버아이디로로그인 버튼 노출 영역 */}
        <div id="naver_id_login"></div>
        {/* //네이버아이디로로그인 버튼 노출 영역 */}
      </main>
    </LoginWrapper>
  );
}
