import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

import headerLogo from "../../images/header-logo.png";
import headerIconSearch from "../../images/header-icon-search.png";
import btnTopsearchSearch from "../../images/btn_topsearch_search.png";
import headerIconCart from "../../images/header-icon-cart.png";
import headerIconMypage from "../../images/header-icon-mypage.png";

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
  h1,
  h2,
  h3,
  h4,
  h5 {
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
  .header-wrap .header-nav .gnb1step {
    display: flex;
  }

  .header-wrap .header-nav .gnb1step > li {
    margin-right: 70px;
  }

  .header-wrap .header-nav .gnb1step > li > a {
    display: inline-block;
    height: 100px;
    font-family: "Noto Sans KR";
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
    content: "";
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
    content: "";
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

  .gnb3step-2 > li a {
    font-size: 14px;
    color: #9b9b9b;
  }

  /* 헤더 아이콘 메뉴 */
  .header-wrap .header-icon {
    display: flex;
  }

  .header-wrap .header-icon .schBtn {
    margin-right: 35px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .header-wrap .header-icon .cartBtn {
    margin-right: 30px;
    line-height: 104px;
  }

  .header-wrap .header-icon .mpgBtn {
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
    content: "";
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

  .header-icon .mpgBtn:hover .mpg-drop {
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

  .header-icon .mpgBtn:hover ~ .mpg-drop {
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
    background-color: rgba(0, 0, 0, 0.9);
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

  .closeBtn {
    position: absolute;
    top: 0;
    right: 20px;
    color: #fff;
    font-size: 60px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  #searchBox {
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    font-size: 25px;
    text-align: center;
  }

  #searchBox:focus {
    color: #fff;
  }
`;

export default function Header() {
  const [isMyNavShow, setIsMyNavShow] = useState(false);
  const [gnbLists, setGnbLists] = useState([]);
  const [infoLists, setInfoLists] = useState([]);
  const testRef = useRef();
  useEffect(function () {
    fetch('http://localhost:3000/json/gnbLists.json').then(function (res) {
      res.json().then(function (json) {
        setGnbLists(json);
      }).catch(function (e) {
      });
    });

    fetch('http://localhost:3000/json/infoLists.json').then(function (res) {
      res.json().then(function (json) {
        setInfoLists(json);
      }).catch(function (e) {
      });
    });

  }, []);


  return (
    <HeaderWrapper>
      <header>
        <div className="header-wrap">
          <h1>러쉬</h1>
          <div className="header-logo">
            <Link to="/">
              <img src={headerLogo} alt="러쉬" />
            </Link>
          </div>
          {/* header-logo */}
          <nav>
            <h2>러쉬 메뉴</h2>
            <div className="header-nav">
              <ul className="gnb1step">
                <li>
                  <a href="javascript:void(0)">제품</a>
                  <ul className="gnb2step">
                    {gnbLists.map(function (data) {
                      return (
                        <li>
                          <a href="javascript:void(0)">{data.name}</a>
                          <ul className="gnb gnb2step-1">
                            {data.lists &&
                              data.lists.map(function (detData) {
                                return (
                                  <li>
                                    <Link to={data.url}>
                                      {detData.name}
                                    </Link>
                                  </li>
                                );
                              })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">러쉬 소개</a>
                  <ul className="gnb3step">
                  {infoLists.map(function (data) {
                      return (
                        <li>
                          <a href="javascript:void(0)">{data.name}</a>
                          <ul className="gnb gnb2step-1">
                            {data.lists &&
                              data.lists.map(function (detData) {
                                return (
                                  <li>
                                    <Link to={data.url}>
                                      {detData.name}
                                    </Link>
                                  </li>
                                );
                              })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">매장 안내</a>
                </li>
                <li>
                  <a href="javascript:void(0)">스파</a>
                </li>
                <li>
                  <a href="javascript:void(0)">이벤트</a>
                </li>
              </ul>
            </div>
            {/* header-menu */}
          </nav>
          <div className="header-icon">
            <button
              type="button"
              className="schBtn"
              aria-label="검색"
              onClick={() => {
                setIsMyNavShow(true);
              }}
            >
              <img src={headerIconSearch} alt="검색하기" />
            </button>

            {isMyNavShow && (
              <div className="overlay" id="myNav" ref={testRef}>
                <button
                  onClick={() => {
                    setIsMyNavShow(false);
                  }}
                  className="closeBtn"
                >
                  &times;
                </button>

                <div className="overlay-content">
                  <form action="#" method="GET">
                    <label htmlFor="searchBox"></label>
                    <input
                      type="text"
                      id="searchBox"
                      placeholder="혹시 더티 마니아인가요?"
                    />
                    <label htmlFor="searchBtn"></label>
                    <input
                      type="image"
                      id="searchBtn"
                      src={btnTopsearchSearch}
                    />
                  </form>
                  <p>지금 가장 많이 찾아요!</p>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">#퍼퓸</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">#보디 스프레이</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">#기프트</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">#프레시 마스크</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">#입욕제</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">#더티</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <a
              href="javascript:void(0)"
              className="cartBtn"
              aria-label="장바구니"
            >
              <img src={headerIconCart} alt="장바구니" />
            </a>

            <button type="button" className="mpgBtn" aria-label="마이페이지">
              <img src={headerIconMypage} alt="마이페이지" />
              <div className="mpg-drop">
                <ul className="mpg-drop-inner">
                  <li>
                    <Link to="/Login">로그인</Link>
                  </li>
                  <li>
                    <a href="javascript:void(0)">회원가입</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">스카우트</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">고객센터</a>
                  </li>
                </ul>
              </div>
              {/* mpg-drop */}
            </button>
          </div>{" "}
          {/* header-icon */}
        </div>{" "}
        {/* header-wrap */}
      </header>
    </HeaderWrapper>
  );
}
