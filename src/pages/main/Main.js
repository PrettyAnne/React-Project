import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

import styles from './Main.module.css';

import titleImg from "../../images/content2-title.png";
import consTantin from "../../images/content2-banner1.jpg";
import saltScrub from "../../images/content2-banner2.gif";
import summerIce from "../../images/content2-banner3.jpg";
import covid from "../../images/content2-banner4.jpg";
import tangleTreatment from "../../images/content3-banner.gif";

import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserContext } from '../../components/store/UserContext';

export default function Main(props) {
  const user = useRecoilValue(UserContext);
  const setUser = useSetRecoilState(UserContext);

  const [slideProducts, setSlideProducts] = useState([]);
  const [slideReviews, setSlideReviews] = useState([]);
  const [slideBanners, setSlideBanners] = useState([]);
  
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
        <ul className={styles.bannerIcon}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          border: "2px solid #fff",
        }}
      ></div>
    ),
  };

  const settingsProduct = {
    dots: true,
    arrows: false,
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
          width: "15px",
          height: "15px",
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

  useEffect(function () {
    fetch(`https://react-board-exercise-api.herokuapp.com/api/lush/mainProduct?page=1&countPerPage=3`).then(function (res) {
      res
        .json()
        .then(function (json) {
          setSlideProducts(json.list);
        })
        .catch(function (e) {});
    });

    fetch("/React-Project/json/slideReviews.json").then(function (res) {
      res
        .json()
        .then(function (json) {
          setSlideReviews(json);
        })
        .catch(function (e) {});
    });

    fetch(`https://react-board-exercise-api.herokuapp.com/api/lush/mainBanner?page=1&countPerPage=5`).then(function (res) {
      res
        .json()
        .then(function (json) {
          setSlideBanners(json.list);
        })
        .catch(function (e) {});
    });
    setUser({...user, username: 'jsh'});
  }, []);

  return (
      <main>
        <article>
          <h3>메인 광고 배너</h3>
          <div className={styles["main-banner"]}>
            <Slider {...settings}>
              {slideBanners.map(function (data) {
                return (
                  <div>
                    <div
                      style={{
                        backgroundImage: `url(${data.thumb_url})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "580px",
                      }}
                    >
                      <a href="javascript:void(0)"></a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </article>
        <section className={styles.myAroma}>
          <h3>나만 알고 싶은 향기</h3>
          <div className={styles["product-slide-wrap"]}>
            <img src={titleImg} alt="나만 알고 싶은 향기" />
            <div className={styles["product-slide"]}>
              <Slider {...settingsProduct}>
                {slideProducts.map(function (data, index) {
                  return (
                    <div key={index}>
                      <Link to={data.thumb_url}>
                        <img src={data.thumb_url} alt={data.name} />
                        <br />
                        <span className={styles.first}>{data.name}</span>
                        <br />
                        <span className={styles.second}>{data.tag}</span>
                        <br />
                        <span className={styles.third}>
                          \ {data.price.toLocaleString()}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </Slider>
            </div>
            {/* product-slide */}
          </div>
          {/* product-slide-wrap */}
          <div className={styles["product-slide-reviewwrap"]}>
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
          <div className={styles["info-wrap"]}>
            <div className={styles["info-wrap-left"]}>
              <a href="javascript:void(0)">
                <img
                  src={consTantin}
                  alt="마크 콘스탄틴과 함께하는 퍼퓸 이야기"
                />
              </a>
            </div>
            {/* info-wrap-left */}
            <div className={styles["info-wrap-right"]}>
              <div className={styles["info-wrap-right-top"]}>
                <a href="javascript:void(0)">
                  <img src={saltScrub} alt="부드럽게 소금 롤링 스크럽" />
                </a>
              </div>
              {/* info-wrap-right-top */}
              <div className={styles["info-wrap-right-bottom"]}>
                <div className={styles["info-wrap-right-bottom-left"]}>
                  <a href="javascript:void(0)">
                    <img src={summerIce} alt="EVENT 꽁꽁! 무더위를 얼리다" />
                  </a>
                </div>
                {/* info-wrap-right-bottom-left */}
                <div className={styles["info-wrap-right-bottom-right"]}>
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
          <div className={styles["newprod-adv-wrap"]}>
            <div className={styles["newprod-adv-text"]}>
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
  );
}
