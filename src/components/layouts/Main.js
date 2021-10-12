import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from 'react-router-dom';

import styled from "styled-components";

import titleImg from "../../images/content2-title.png";
import consTantin from "../../images/content2-banner1.jpg";
import saltScrub from "../../images/content2-banner2.gif";
import summerIce from "../../images/content2-banner3.jpg";
import covid from "../../images/content2-banner4.jpg";
import tangleTreatment from "../../images/content3-banner.gif";

import slideBanner1 from "../../images/main-banner1.jpg";
import slideBanner2 from "../../images/main-banner2.jpg";
import slideBanner3 from "../../images/main-banner3.jpg";
import slideBanner4 from "../../images/main-banner4.jpg";
import slideBanner5 from "../../images/main-banner5.jpg";
import slideBanner6 from "../../images/main-banner6.jpg";

import { useEffect, useState } from "react";

const MainWrapper = styled.div`
  /* 메인 배너 */
  .main-banner {
    position: relative;
    min-width: 1280px;
    height: 580px;
  }

  .main-banner a {
    display: block;
    min-width: 1280px;
    height: 580px;
  }

  .bannerIcon li {
    display: block;
    margin-bottom: 10px;
  }

  .main-banner .slick-active div {
    background-color: #fff;
  }

  /* 나만 알고싶은향기 wrap */
  .myAroma {
    position: relative;
  }

  .myAroma::after {
    content: "";
    display: block;
    clear: both;
  }

  /* 제품 슬라이더 */
  .product-slide-wrap {
    width: 1000px;
    min-width: 1000px;
    padding: 80px 0 120px;
  }

  .product-slide-wrap img {
    margin-left: 40px;
  }

  .product-slide-wrap .product-slide img {
    width: 270px;
  }

  .product-slide-wrap .product-slide {
    display: block;
    padding: 0 30px;
  }

  .first {
    font-size: 18px;
    color: #333;
  }
  .second {
    font-size: 14px;
    color: #8f8f8f;
  }
  .third {
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }

  .product-slide-wrap .product-slide .slick-dots .slick-active div {
    background-color: #000;
  }

  /* 사이드 리뷰 슬라이더 */
  .product-slide-reviewwrap {
    width: 300px;
    position: absolute;
    top: 642px;
    right: 0;
  }

  .product-slide-reviewwrap .slick-dots .slick-active div {
    background-color: #000;
  }

  /* 안내배너 */
  .info-wrap {
    display: flex;
    padding: 100px 0;
  }

  .info-wrap img {
    width: 100%;
    vertical-align: middle;
  }

  .info-wrap a {
    display: inline-block;
  }

  .info-wrap-left {
    flex-direction: row;
  }

  .info-wrap-right {
    flex-direction: row;
  }

  .info-wrap-right-top {
    height: 50%;
  }

  .info-wrap-right-bottom {
    display: flex;
    height: 50%;
  }

  .info-wrap-right-bottom-left {
    flex-direction: row;
  }

  .info-wrap-right-bottom-right {
    flex-direction: row;
  }

  /* 탱글드 어쩌고 */
  .newprod-adv-wrap {
    display: flex;
    min-width: 1280px;
    height: 700px;
    padding: 40px 100px 0 300px;
  }

  .newprod-adv-wrap .newprod-adv-text {
    margin-right: 40px;
    padding-top: 130px;
  }

  .newprod-adv-wrap .newprod-adv-text strong {
    display: inline-block;
    font-size: 42px;
    padding: 0 0 20px;
    letter-spacing: -3px;
  }

  .newprod-adv-wrap .newprod-adv-text p {
    display: block;
    color: #333;
  }
`;

export default function Main() {
  const settings = {
    fade: true,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "20px",
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <ul className="bannerIcon"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "2px solid #fff",
        }}
      ></div>
    ),
  };

  const settingsProduct = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "40%",
          width: "fit-content",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          border: "1px solid #000",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  const settingsReview = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div style={{}}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          border: "1px solid #000",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  const [slideProducts, setSlideProducts] = useState([]);
  const [slideReviews, setSlideReviews] = useState([]);
  const [slideBanners, setSlideBanners] = useState([]);
  useEffect(function () {
    fetch('http://localhost:3000/json/slideProducts.json').then(function (res) {
      res.json().then(function (json) {
        setSlideProducts(json);
      }).catch(function (e) {
      });
    });

    fetch('http://localhost:3000/json/slideReviews.json').then(function (res) {
      res.json().then(function (json) {
        setSlideReviews(json);
      }).catch(function (e) {
      });
    });

    fetch('http://localhost:3000/json/slideBanners.json').then(function (res) {
      res.json().then(function (json) {
        setSlideBanners(json);
      }).catch(function (e) {
      });
    });
  }, []);

  return (
    <MainWrapper>
      <main>
        <article>
          <h3>메인 광고 배너</h3>
          <div className="main-banner">
            <Slider {...settings}>
              {slideBanners.map(function (data) {
                return (
                  <div style={{
                    backgroundImage: `url(${data.thumbUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '580px'
                  }}
                  >
                    <a href="javascript:void(0)"></a>
                  </div>
                );
              })}
            </Slider>
          </div>
        </article>
        <section classNameName="myAroma">
          <h3>나만 알고 싶은 향기</h3>
          <div className="product-slide-wrap">
            <img src={titleImg} alt="나만 알고 싶은 향기" />
            <div className="product-slide">
              <Slider {...settingsProduct}>
                {slideProducts.map(function (data) {
                  return (
                    <div>
                      <Link to={data.url}>
                        <img src={data.thumbUrl} alt={data.name} />
                        <br />
                        <span className="first">{data.name}</span>
                        <br />
                        <span className="second">{data.tag}</span>
                        <br />
                        <span className="third">\ {data.price.toLocaleString()}</span>
                      </Link>
                    </div>
                  );
                })}
              </Slider>
            </div>
            {/* product-slide */}
          </div>
          {/* product-slide-wrap */}
          <div className="product-slide-reviewwrap">
            <Slider {...settingsReview}>
              {slideReviews.map(function (data) {
                return (
                  <div>
                    <Link>
                      <img src={data.thumbUrl} alt={data.name} />
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
          {/* product-slide-sidewrap */}
        </section>
        <section>
          <h4>소식, 제품소개, 이벤트, 공지사항</h4>
          <div className="info-wrap">
            <div className="info-wrap-left">
              <a href="javascript:void(0)">
                <img
                  src={consTantin}
                  alt="마크 콘스탄틴과 함께하는 퍼퓸 이야기"
                />
              </a>
            </div>
            {/* info-wrap-left */}
            <div className="info-wrap-right">
              <div className="info-wrap-right-top">
                <a href="javascript:void(0)">
                  <img src={saltScrub} alt="부드럽게 소금 롤링 스크럽" />
                </a>
              </div>
              {/* info-wrap-right-top */}
              <div className="info-wrap-right-bottom">
                <div className="info-wrap-right-bottom-left">
                  <a href="javascript:void(0)">
                    <img src={summerIce} alt="EVENT 꽁꽁! 무더위를 얼리다" />
                  </a>
                </div>
                {/* info-wrap-right-bottom-left */}
                <div className="info-wrap-right-bottom-right">
                  <a href="javascript:void(0)">
                    <img
                      src={covid}
                      alt="코로나19 예방을 위한 매장 운영 안내"
                    />
                  </a>
                </div>
                {/* info-wrap-right-bottom-right */}
              </div>
              {/* info-wrap-right-bottom */}
            </div>
            {/* info-wrap-right */}
          </div>
          {/* info-wrap */}
        </section>
        <section>
          <h4>신제품 광고</h4>
          <div className="newprod-adv-wrap">
            <div className="newprod-adv-text">
              <strong>
                NEW 탱글드 헤어 <br />
                트리트 먼트
              </strong>
              <p>
                전통 악기에서 영감을 받은 두피 트리트먼트로,기분 좋은
                <br /> 낮잠에 빠져달듯 부드럽고 편안한 시간을 선사합니다.
              </p>
            </div>
            <a href="javascript:void(0)">
              <img src={tangleTreatment} alt="NEW 탱글드 헤어 트리트먼트" />
            </a>
          </div>{" "}
          {/* newprod-adv-wrap */}
        </section>
      </main>
    </MainWrapper>
  );
}
