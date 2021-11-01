import { useState, useEffect } from "react";
import styled from "styled-components";

const CategoryWrapper = styled.div`
  .top-banner {
    width: 100%;
    height: 500px;
    padding-top: 150px;
    background: url(https://lush.co.kr/data/editor/goods/200617/pc_cate_best01_163505.jpg) no-repeat 50% 0;
  }
  .top-banner-inner p {
    color: #fff;
    font-size: 68px;
    letter-spacing: 0.5em;
    text-indent: 0.5em;
    text-align: center;
  }
  .top-banner-inner span {
    display: block;
    color: #fff;
    font-size: 26px;
    font-family: "notokrL";
    letter-spacing: 0.2em;
    text-indent: 0.2em;
    text-align: center;
}
  }
  .cg-main {
    max-width: 1180px;
    margin: 0 auto;
  }
  .title {
    margin-top: 77px;
    border-bottom: 2px solid #000;
  }
  .title>h2 {
    display: block;
  }
  .lower-category li {
    display: inline-block;
    width: auto;
  }
  .prd-list ul {
    display: flex;
    flex-wrap: wrap;
  }
  .prd-list ul li {
    flex-basis: 25%;
  }
  .prd-list {
    text-align: center;
  }
  .prd-icon span {
    padding: 2px 20px;
    background-color: green;
    color: white;
    border-radius: 15px;
  }
`;

export default function Category(props) {
  const [prdLists, setPrdLists] = useState([]);

  useEffect(function () {
    fetch('/React-Project/json/prdLists.json').then(function (res) {
      res.json().then(function (json) {
        setPrdLists(json);
      }).catch(function (e) {
      });
    });

  });

  return (
    <CategoryWrapper>
      <div className="top-banner">
        <div className="top-banner-inner">
          <p>주간 베스트</p>
          <span>누구나 좋아하는 인기 제품을 만나 보세요!</span>
        </div>
      </div>
      <div className="cg-main">
        <div className="title">
          <h2>주간 베스트</h2>
        </div>
        <div>
          <ul className="lower-category">
            <li>전체(253)</li>
            <li>주간 베스트(30)</li>
          </ul>
        </div>
        <div className="prd-list">
          <ul>
            {prdLists.map(function (data) {
              return (
                <li>
                  <div className="prd-img">
                    <img src={data.thumbUrl} />
                  </div>
                  <div className="prd-icon"><span>{data.btn}</span></div>
                  <div className="prd-name">{data.name}</div>
                  <div className="prd-tag">{data.tag}</div>
                  <div className="prd-price">{data.price}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </CategoryWrapper>
  );
}