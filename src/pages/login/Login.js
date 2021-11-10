import styles from './Login.module.css';

import iconId from "../../images/icon-id.png";
import iconPW from "../../images/icon-password.png";

export default function Login() {
  return (
      <main>
        <div className={styles["login-section"]}>
          <h3>로그인</h3>
          <div className={styles["member-select"]}>
            <a href="#">회원</a>
            <a href="#">비회원</a>
          </div>
          <div className={styles.member}>
            <form action="#" method="POST">
              <div className={styles["id-box"]}>
                <span>
                  <img src={iconId} alt="아이디" />
                </span>
                <label htmlFor="ID"></label>
                <input type="text" placeholder="아이디" id={styles.ID} />
              </div>
              <div className={styles["pw-box"]}>
                <span>
                  <img src={iconPW} alt="비밀번호" />
                </span>
                <label htmlFor="PW"></label>
                <input type="password" placeholder="비밀번호" id={styles.PW} />
              </div>
              <div className={styles["id-memory-box"]}>
                <input type="checkbox" id={styles["id-memory"]} />
                <label htmlFor="id-memory">아이디 저장</label>
              </div>
              <button type="submit" className={styles["login-btn"]}>
                로그인
              </button>
            </form>

            <ul className={styles["login-other"]}>
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
        <div id={styles["naver_id_login"]}></div>
        {/* //네이버아이디로로그인 버튼 노출 영역 */}
      </main>
  );
}
