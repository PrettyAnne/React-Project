import styled from "styled-components";

import footerLieaner from '../../images/footer-line.svg';

import footerLogo from '../../images/footer-logo.png';
import facebookLogo from '../../images/footer-icon-facebook.gif';
import instagramLogo from '../../images/footer-icon-instagram.gif';
import kakaoLogo from '../../images/footer-icon-kakao.gif';
import naverLogo from '../../images/footer-icon-naver.gif';
import youtubeLogo from '../../images/footer-icon-youtube.gif';

const FooterWrapper = styled.div`
/* 푸터 */
footer {
  color: #fff;
}

.footer-imgline {
  min-width: 1280px;
  height: 150px;
  background: url(${footerLieaner}) no-repeat center #eee;
}

.footer-wrap {
  display: flex;
  justify-content: center;
  min-width: 1280px;
  height: 440px;
  background-color: #000;
  padding: 50px 0;
}

/* 푸터 왼쪽 */
.footer-wrap .footer-left {
  width: 300px;
  text-align: left;
}

.footer-wrap .footer-left h6 {
  margin-bottom: 20px;
}

.footer-wrap .footer-left strong {
  display: inline-block;
  margin-bottom: 20px;
}

.footer-wrap .footer-left .mail1 {
  display: block; 
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: underline;
  color: #fff; 
}

.footer-wrap .footer-left p {
  margin-bottom: 33px;
  font-size: 14px;
}

.footer-wrap .footer-left p span {
  margin-left: 20px;
}
.footer-wrap .footer-left i {
  display: inline-block;
  margin-bottom: 20px;
}

.footer-wrap .footer-left .mail2 {
  display: block;
  margin-bottom: 20px;
  text-decoration: underline;
  font-size: 14px;
  color: #fff;
}

.footer-wrap .footer-left .sns {
  display: flex;
}

.footer-wrap .footer-left .sns li {
  margin-right: 4px;
}

.footer-wrap .footer-left .sns li a img {
  width: 30px;
  height: 30px;
}

/* 푸터 오른쪽 */
.footer-wrap .footer-right {
  width: 670px;
}

.footer-wrap .footer-right ul li a {
  margin-right: 20px;
  color: #fff;
}

.footer-right ul {
  display: flex;
  margin-bottom: 40px;
}

.footer-right ul li:nth-child(3) a {
  color: #fbe852;
}

.footer-right ul li a {
  font-size: 14px;
}

.footer-right input {
  width: 362px;
  height: 43px;
  border-radius: 2px;
  border: none;
  padding-left: 10px;
  margin-bottom: 20px;
}

.footer-right button {
  padding: 12px 20px;
  background-color: #000;
  border-radius: 2px;
  border: 1px solid #fff;
  color: #fff;
}

.footer-right strong {
  display: inline-block;
  margin-bottom: 10px;
}

.footer-right strong a {
  color: #fff;
  text-decoration: underline;
  font-weight: normal;
  font-size: 14px;
}

.footer-right span {
  display: inline-block;
  font-size: 12px;
  color: #9b9b9b;
}
`


export default function Footer() {
  return (
    <FooterWrapper>
      <footer>
        <h5>러쉬 정보</h5>
        <div class="footer-imgline" aria-label="여기서부터 푸터입니다."></div>
        <div class="footer-wrap">
          <div class="footer-left">
            <h6 aria-label="러쉬로고">
              <a href="javascript:void(0)">
                <img src={footerLogo} alt="러쉬로고" />
              </a>
            </h6>

            <strong>고객센터 1644-2357</strong>
            <a href="mailto:webmaster@lush.co.kr" class="mail1">webmaster@lush.co.kr</a>
            <p>
              상담전화 7/12~8/22<br />
              <span>유선응대 임시중단</span><br />
              상담톡 10:00~16:00(평일)
            </p>
            <i>기업선물 070-4713-8543</i>
            <a href="mailto:order@lush.co.kr" class="mail2">order@lush.co.kr</a>

            <ul class="sns">
              <li><a href="javascript:void(0)"><img src={facebookLogo} alt="페이스북" /></a></li>
              <li><a href="javascript:void(0)"><img src={instagramLogo} alt="인스타그램" /></a></li>
              <li><a href="javascript:void(0)"><img src={youtubeLogo} alt="유튜브" /></a></li>
              <li><a href="javascript:void(0)"><img src={kakaoLogo} alt="카카오톡 플친" /></a></li>
              <li><a href="javascript:void(0)"><img src={naverLogo} alt="네이버" /></a></li>
            </ul>
          </div> {/* footer-left */}

          <div class="footer-right">
            <ul>
              <li><a href="javascript:void(0)">스카우트</a></li>
              <li><a href="javascript:void(0)">회사소개</a></li>
              <li><a href="javascript:void(0)">개인정보처리방침</a></li>
              <li><a href="javascript:void(0)">영상정보관리지침</a></li>
              <li><a href="javascript:void(0)">이용약관</a></li>
              <li><a href="javascript:void(0)">고객센터</a></li>
            </ul>

            <form action="javascript:void(0)" method="">
              <label for="email"></label>
              <input type="text" placeholder="이메일 주소를 입력해 주세요." id="email" class="email" />
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
    </FooterWrapper>
  );
}
