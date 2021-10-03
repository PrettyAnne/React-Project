import { useState } from "react";
import styled from "styled-components";
import headerLogo from '../../images/header-logo.png';
import headerIconSearch from '../../images/header-icon-search.png';
import btnTopsearchSearch from '../../images/btn_topsearch_search.png';
import headerIconCart from '../../images/header-icon-cart.png';
import headerIconMypage from '../../images/header-icon-mypage.png';

const HeaderWrapper = styled.div`
/* 헤더 */
.header-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 1280px;
  height: 100px;
  background-color: #000;
  padding: 0 45px;
  z-index: 1;
}

/* 임시 */
h1,h2,h3,h4,h5 {
  display: none;
}
.hide {
  display: none;
}

/* 헤더 */
.header-wrap {
  display: flex;
  justify-content: space-between;
}

.header-wrap .header-logo {
  height: inherit;
  margin-right: 280px;
}
.header-wrap .header-logo a {
  display: block;
  height: inherit;
}

/* 1단 메뉴 */
.header-wrap .header-menu .gnb1step {
  display: flex;
}

.header-wrap .header-menu .gnb1step > li {
  margin-right: 70px;
}

.header-wrap .header-menu .gnb1step > li > a {
  display: inline-block;
  height: 100px;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  color: #fff;
  line-height: 100px;
}

/* 제품 2단메뉴 */
.gnb1step > li:hover .gnb2step {
  display: flex;
  justify-content: space-between;
}

.gnb2step::before {
  content: '';
  display: block;
  position: absolute;
  top: -20px;
  left: 44%;
  margin-left: -90px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid #333;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.gnb2step {
  display: none;
  min-width: 1280px;
  background-color: #333;
  position: absolute;
  top: 100px;
  left: 0;
  padding: 37px 23px;
}

.gnb2step li {
  margin-bottom: 10px;
}

.gnb2step > li {
  margin-right: 26px;
}

.gnb2step > li a {
  color: #fff;
  font-size: 18px;
}

.gnb > li a {
  font-size: 12px;
  color: #9b9b9b;
}


/* 러쉬소개 2단메뉴 */
.gnb1step > li:nth-child(2):hover .gnb3step {
  display: flex;
  justify-content: center;
}

.gnb3step::before {
  content: '';
  display: block;
  position: absolute;
  top: -20px;
  left: 53%;
  margin-left: -90px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid #333;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.gnb3step {
  display: none;
  min-width: 1280px;
  background-color: #333;
  position: absolute;
  top: 100px;
  left: 0;
  text-align: center;
  padding: 47px 0;
}

.gnb3step > li {
  margin-right: 64px;
}

.gnb3step > li a {
  color: #fff;
  font-size: 18px;
}

/* 러쉬소개 3단메뉴 */
.gnb3step-1 > li a {
  font-size: 14px;
  color: #9b9b9b;
}

.gnb3step-2  > li a {
  font-size: 14px;
  color: #9b9b9b;
}

/* 헤더 아이콘 메뉴 */
.header-wrap .header-icon {
  display: flex;
}

.header-wrap .header-icon .sch {
  margin-right: 35px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.header-wrap .header-icon .cart {
  margin-right: 30px;
  line-height: 104px;
}

.header-wrap .header-icon .mpg {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.header-wrap .header-icon .mpg-drop {
  display: none;
  width: 200px;
  background-color: #fff;
  color: #666;
  border-radius: 2px;
  position: absolute;
  top: 78px;
  right: 36px;
}

.header-wrap .header-icon .mpg-drop::before {
  content: '';
  display: block;
  position: absolute;
  top: -20px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid #fff;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  right: 9px;
}

.header-icon .mpg:hover .mpg-drop {
  display: block;
}

.header-wrap .header-icon .mpg-drop li a {
  display: block;
  padding: 14px 0;
  font-size: 12px;
  color: #1e1e1e;
  text-align: center;
}

.header-wrap .header-icon .mpg-drop ul li {
  border-bottom: 1px solid #eaeaea;
}

.header-icon .mpg:hover ~ .mpg-drop {
  display: block;
}

.mpg-drop .mpg-drop-inner li:hover a {
  background-color: #000;
  color: #fff;
  transition: 0.3s;
}

/* 검색창 */
.overlay {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 100px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  z-index: 10000;
  cursor: default;
}

.overlay-content {
  height: 100%;
  text-align: center;
}

.overlay-content p {
  display: block;
  margin: 20px 0;
  font-size: 30px;
  color: #fff;
  text-decoration: underline;
}

.overlay-content ul li {
  font-size: 20px;
  margin-bottom: 10px;
}

.overlay-content ul li a {
  color: #fff;
}

.closebtn {
  position: absolute;
  top: 0;
  right: 20px;
  color: #fff;
  font-size: 60px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

#searchbox {
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  font-size: 25px;
  text-align: center;
}

#searchbox:focus {
  color: #fff;
}

`;

export default function Header() {
  const [isMyNavShow, setIsMyNavShow] = useState(false);
  
  return (
    <HeaderWrapper>
      <header>
        <div class="header-wrap">
          <h1>러쉬</h1>
          <div class="header-logo">
            <a href="./index.html">
              <img src={headerLogo} alt="러쉬" />
            </a>
          </div> {/* header-logo */}

          <nav>
            <h2>러쉬 메뉴</h2>
            <div class="header-menu">
              <ul class="gnb1step">
                <li>
                  <a href="javascript:void(0)">제품</a>
                  <ul class="gnb2step">
                    <li>
                      <a href="javascript:void(0)">베스트</a>
                      <ul class="gnb gnb2step-1">
                        <li><a href="javascript:void(0)">주간 베스트</a></li>
                        <li><a href="javascript:void(0)">별 다섯개 후기</a></li>
                        <li><a href="javascript:void(0)">온라인 전용</a></li>
                        <li><a href="javascript:void(0)">국내제조</a></li>
                        <li><a href="javascript:void(0)">네이키드</a></li>
                        <li><a href="javascript:void(0)">여름 쿨링템</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">신제품</a>
                      <ul class="gnb gnb2step-2">
                        <li><a href="javascript:void(0)">퍼퓸 디스커버리 기프트</a></li>
                        <li><a href="javascript:void(0)">버블 바 큐레이션</a></li>
                        <li><a href="javascript:void(0)">비건 메이크업</a></li>
                        <li><a href="javascript:void(0)">기프트</a></li>
                        <li><a href="javascript:void(0)">립스틱</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">베쓰</a>
                      <ul class="gnb gnb2step-3">
                        <li><a href="javascript:void(0)">배쓰 밤</a></li>
                        <li><a href="javascript:void(0)">버블 바</a></li>
                        <li><a href="javascript:void(0)">배쓰 오일</a></li>
                        <li><a href="javascript:void(0)">펀</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">샤워</a>
                      <ul class="gnb gnb2step-4">
                        <li><a href="javascript:void(0)">솝</a></li>
                        <li><a href="javascript:void(0)">샤워 젤&젤리</a></li>
                        <li><a href="javascript:void(0)">보디 컨디셔너</a></li>
                        <li><a href="javascript:void(0)">샤워 밤</a></li>
                        <li><a href="javascript:void(0)">샤워 오일</a></li>
                        <li><a href="javascript:void(0)">스크럽&버터</a></li>
                        <li><a href="javascript:void(0)">펀</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">보디</a>
                      <ul class="gnb gnb2step-5">
                        <li><a href="javascript:void(0)">클렌저</a></li>
                        <li><a href="javascript:void(0)">로션</a></li>
                        <li><a href="javascript:void(0)">핸드 앤 풋</a></li>
                        <li><a href="javascript:void(0)">마사지 바</a></li>
                        <li><a href="javascript:void(0)">더스팅 파우더</a></li>
                        <li><a href="javascript:void(0)">쉐이빙 크림</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">페이스</a>
                      <ul class="gnb gnb2step-6">
                        <li><a href="javascript:void(0)">클렌저</a></li>
                        <li><a href="javascript:void(0)">페이스 마스크</a></li>
                        <li><a href="javascript:void(0)">토너</a></li>
                        <li><a href="javascript:void(0)">모이스춰라이저</a></li>
                        <li><a href="javascript:void(0)">프라이머</a></li>
                        <li><a href="javascript:void(0)">립</a></li>
                        <li><a href="javascript:void(0)">쉐이빙 크림</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">헤어</a>
                      <ul class="gnb gnb2step-7">
                        <li><a href="javascript:void(0)">샴푸 바</a></li>
                        <li><a href="javascript:void(0)">샴푸</a></li>
                        <li><a href="javascript:void(0)">컨디셔너</a></li>
                        <li><a href="javascript:void(0)">트리트먼트</a></li>
                        <li><a href="javascript:void(0)">스타일링</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">메이크업</a>
                      <ul class="gnb gnb2step-8">
                        <li><a href="javascript:void(0)">페이스 파우더</a></li>
                        <li><a href="javascript:void(0)">아이 메이크업</a></li>
                        <li><a href="javascript:void(0)">립</a></li>
                        <li><a href="javascript:void(0)">파운데이션</a></li>
                        <li><a href="javascript:void(0)">스킨 틴트</a></li>
                        <li><a href="javascript:void(0)">비건 브러쉬</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">퍼퓸</a>
                      <ul class="gnb gnb2step-9">
                        <li><a href="javascript:void(0)">보디 스프레이</a></li>
                        <li><a href="javascript:void(0)">퍼퓸 라이브러리</a></li>
                        <li><a href="javascript:void(0)">코어 레인지</a></li>
                        <li><a href="javascript:void(0)">솔리드 퍼퓸</a></li>
                        <li><a href="javascript:void(0)">워시카드</a></li>
                        <li><a href="javascript:void(0)">퍼퓸 낫랩</a></li>
                        <li><a href="javascript:void(0)">르네상스 퍼퓸</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">기프트</a>
                      <ul class="gnb gnb2step-10">
                        <li><a href="javascript:void(0)">기프트 베스트</a></li>
                        <li><a href="javascript:void(0)">1-3만원대</a></li>
                        <li><a href="javascript:void(0)">4-6만원대</a></li>
                        <li><a href="javascript:void(0)">7만원 이상</a></li>
                        <li><a href="javascript:void(0)">낫랩</a></li>
                        <li><a href="javascript:void(0)">스웨그</a></li>
                        <li><a href="javascript:void(0)">악세서리</a></li>
                        <li><a href="javascript:void(0)">북</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">비건</a>
                      <ul class="gnb gnb2step-1">
                        <li><a href="javascript:void(0)">배쓰</a></li>
                        <li><a href="javascript:void(0)">샤워</a></li>
                        <li><a href="javascript:void(0)">보디</a></li>
                        <li><a href="javascript:void(0)">페이스</a></li>
                        <li><a href="javascript:void(0)">헤어</a></li>
                        <li><a href="javascript:void(0)">메이크업</a></li>
                        <li><a href="javascript:void(0)">퍼퓸</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">러쉬 소개</a>
                  <ul class="gnb3step">
                    <li>
                      <a href="javascript:void(0)">러쉬 소개</a>
                      <ul class="gnb3step-1">
                        <li><a href="javascript:void(0)">러쉬 역사</a></li>
                        <li><a href="javascript:void(0)">이념과 가치</a></li>
                      </ul>
                    </li>
                    <li><a href="javascript:void(0)">러쉬 이야기</a></li>
                    <li><a href="javascript:void(0)">채러티 팟</a></li>
                    <li>
                      <a href="javascript:void(0)">커뮤니티</a>
                      <ul class="gnb3step-2">
                        <li><a href="javascript:void(0)">젤러쉬</a></li>
                        <li><a href="javascript:void(0)">덕찌</a></li>
                      </ul>
                    </li>
                    <li><a href="javascript:void(0)">서명 캠페인</a></li>
                    <li><a href="javascript:void(0)">기업선물</a></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0)">매장 안내</a></li>
                <li><a href="javascript:void(0)">스파</a></li>
                <li><a href="javascript:void(0)">이벤트</a></li>
              </ul>
            </div> {/* header-menu */}

          </nav>
          <div class="header-icon">
            <button type="button" class="sch" aria-label="검색" onClick={() => {setIsMyNavShow(true);}}>
              <img src={headerIconSearch} alt="검색하기" />
            </button>

            {
            
            isMyNavShow && (<div class="overlay" id="myNav">
              <button onClick={() => {setIsMyNavShow(false);}} class="closebtn">&times;</button>

              <div class="overlay-content">
                <form action="javascript:void(0)" method="">
                  <label for="searchbox"></label>
                  <input type="text" id="searchbox" placeholder="혹시 더티 마니아인가요?" />
                  <label for="searchbtn"></label>
                  <input type="image" id="searchbtn" src={btnTopsearchSearch} />
                </form>
                <p>지금 가장 많이 찾아요!</p>
                <ul>
                  <li><a href="javascript:void(0)">#퍼퓸</a></li>
                  <li><a href="javascript:void(0)">#보디 스프레이</a></li>
                  <li><a href="javascript:void(0)">#기프트</a></li>
                  <li><a href="javascript:void(0)">#프레시 마스크</a></li>
                  <li><a href="javascript:void(0)">#입욕제</a></li>
                  <li><a href="javascript:void(0)">#더티</a></li>
                </ul>
              </div>

            </div>)}


            <a href="javascript:void(0)" class="cart" aria-label="장바구니">
              <img src={headerIconCart} alt="장바구니" />
            </a>

            <button type="button" class="mpg" aria-label="마이페이지" onClick="location.href='./login.html'">
              <img src={headerIconMypage} alt="마이페이지" />
              <div class="mpg-drop">
                <ul class="mpg-drop-inner">
                  <li><a href="./login.html">로그인</a></li>
                  <li><a href="javascript:void(0)">회원가입</a></li>
                  <li><a href="javascript:void(0)">스카우트</a></li>
                  <li><a href="javascript:void(0)">고객센터</a></li>
                </ul>
              </div>{/* mpg-drop */}
            </button>
          </div> {/* header-icon */}
        </div> {/* header-wrap */}
      </header>

    </HeaderWrapper>
  );
}
