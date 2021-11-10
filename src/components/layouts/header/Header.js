import { useEffect, useRef, useState } from "react";

import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

import headerLogo from "../../../images/header-logo.png";
import headerIconSearch from "../../../images/header-icon-search.png";
import btnTopsearchSearch from "../../../images/btn_topsearch_search.png";
import headerIconCart from "../../../images/header-icon-cart.png";
import headerIconMypage from "../../../images/header-icon-mypage.png";

export default function Header() {
  const [isMyNavShow, setIsMyNavShow] = useState(false);
  const [gnbLists, setGnbLists] = useState([]);
  const [infoLists, setInfoLists] = useState([]);
  const testRef = useRef();
  useEffect(function () {
    fetch('/React-Project/json/gnbLists.json').then(function (res) {
      res.json().then(function (json) {
        setGnbLists(json);
      }).catch(function (e) {
      });
    });

    fetch('/React-Project/json/infoLists.json').then(function (res) {
      res.json().then(function (json) {
        setInfoLists(json);
      }).catch(function (e) {
      });
    });

  }, []);


  return (
      <header>
        <div className={styles.header-wrap}>
          <h1>러쉬</h1>
          <div className={styles.header-logo}>
            <Link to="/">
              <img src={headerLogo} alt="러쉬" />
            </Link>
          </div>
          {/* header-logo */}
          <nav>
            <h2>러쉬 메뉴</h2>
            <div className={styles.header-nav}>
              <ul className={styles.gnb1step}>
                <li>
                  <a href="javascript:void(0)">제품</a>
                  <ul className={styles.gnb2step}>
                    {gnbLists.map(function (data) {
                      return (
                        <li>
                          <a href="javascript:void(0)">{data.name}</a>
                          <ul className={`${styles.gnb} ${styles.gnb2step-1}`}>
                            {data.lists &&
                              data.lists.map(function (detData) {
                                return (
                                  <li>
                                    <Link to={detData.url}>
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
                  <ul className={styles.gnb3step}>
                  {infoLists.map(function (data) {
                      return (
                        <li>
                          <a href="javascript:void(0)">{data.name}</a>
                          <ul className={`${styles.gnb} ${styles.gnb2step-1}`}>
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
          <div className={styles.header-icon}>
            <button
              type="button"
              className={styles.schBtn}
              aria-label="검색"
              onClick={() => {
                setIsMyNavShow(true);
              }}
            >
              <img src={headerIconSearch} alt="검색하기" />
            </button>

            {isMyNavShow && (
              <div className={styles.overlay} id={styles.myNav} ref={testRef}>
                <button
                  onClick={() => {
                    setIsMyNavShow(false);
                  }}
                  className={styles.closeBtn}
                >
                  &times;
                </button>

                <div className={styles.overlay-content}>
                  <form action="#" method="GET">
                    <label htmlFor="searchBox"></label>
                    <input
                      type="text"
                      id={styles.searchBox}
                      placeholder="혹시 더티 마니아인가요?"
                    />
                    <label htmlFor="searchBtn"></label>
                    <input
                      type="image"
                      id={styles.searchBtn}
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
              className={styles.cartBtn}
              aria-label="장바구니"
            >
              <img src={headerIconCart} alt="장바구니" />
            </a>

            <button type="button" className={styles.mpgBtn} aria-label="마이페이지">
              <img src={headerIconMypage} alt="마이페이지" />
              <div className={styles.mpg-drop}>
                <ul className={styles.mpg-drop-inner}>
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
  );
}
