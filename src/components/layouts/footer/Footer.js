import styles from './Footer.module.css';

import footerLogo from '../../../images/footer-logo.png';
import facebookLogo from '../../../images/footer-icon-facebook.gif';
import instagramLogo from '../../../images/footer-icon-instagram.gif';
import kakaoLogo from '../../../images/footer-icon-kakao.gif';
import naverLogo from '../../../images/footer-icon-naver.gif';
import youtubeLogo from '../../../images/footer-icon-youtube.gif';

export default function Footer() {
  return (
      <footer>
        <h5>러쉬 정보</h5>
        <div className={styles["footer-imgline"]} aria-label="여기서부터 푸터입니다."></div>
        <div className={styles["footer-wrap"]}>
          <div className={styles["footer-left"]}>
            <h6 aria-label="러쉬로고">
              <a href="javascript:void(0)">
                <img src={footerLogo} alt="러쉬로고" />
              </a>
            </h6>

            <strong>고객센터 1644-2357</strong>
            <a href="mailto:webmaster@lush.co.kr" className={styles.mail}>webmaster@lush.co.kr</a>
            <p>
              상담전화 7/12~8/22<br />
              <span>유선응대 임시중단</span><br />
              상담톡 10:00~16:00(평일)
            </p>
            <i>기업선물 070-4713-8543</i>
            <a href="mailto:order@lush.co.kr" className={styles.mail}>order@lush.co.kr</a>

            <ul className={styles.sns}>
              <li><a href="javascript:void(0)"><img src={facebookLogo} alt="페이스북" /></a></li>
              <li><a href="javascript:void(0)"><img src={instagramLogo} alt="인스타그램" /></a></li>
              <li><a href="javascript:void(0)"><img src={youtubeLogo} alt="유튜브" /></a></li>
              <li><a href="javascript:void(0)"><img src={kakaoLogo} alt="카카오톡 플친" /></a></li>
              <li><a href="javascript:void(0)"><img src={naverLogo} alt="네이버" /></a></li>
            </ul>
          </div> {/* footer-left */}

          <div className={styles["footer-right"]}>
            <ul>
              <li><a href="javascript:void(0)">스카우트</a></li>
              <li><a href="javascript:void(0)">회사소개</a></li>
              <li><a href="javascript:void(0)">개인정보처리방침</a></li>
              <li><a href="javascript:void(0)">영상정보관리지침</a></li>
              <li><a href="javascript:void(0)">이용약관</a></li>
              <li><a href="javascript:void(0)">고객센터</a></li>
            </ul>

            <form action="#" method="GET">
              <label htmlFor="email"></label>
              <input type="text" placeholder="이메일 주소를 입력해 주세요." id={styles.email} className={styles.email} />
              <button type="button">구독하기</button>
            </form>

            <strong>
              매주 금요일 오후,구독자님을 위한 제품과 브랜드 이야기를 전해드립니다.<br />
              구독은 언제든지 해지하실 수 있습니다.
              <a href="javascript:void(0)">미리보기</a>
            </strong>

            <span>
              서울특별시 서초구 서운로 138(서초동아타워)6층|사이트 운영자:주식회사 러쉬코리아|대표이사:우미령<br />
              사업자 등록번호:201-81-77964 사업자 정보확인|통신판매업 신고번호:2012-서울서초-0647|개인정보보호책임자:우승용
            </span>
            <span>
              COPYRIGHT LUSHKOREA.CO.LTD.ALL RIGHTS RESERVED.
            </span>
          </div> {/* footer-right */}
        </div> {/* footer-wrap */}
      </footer>
  );
}
