import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import titleImg from "../../images/content2-title.png";
import magicCrystals from "../../images/content1-slide1-1.jpg";
import magnerMint from "../../images/content1-slide1-2.jpg";
import oliveBrench from "../../images/content1-slide1-3.jpg";
import consTantin from "../../images/content2-banner1.jpg";
import styled from "styled-components";
import saltScrub from "../../images/content2-banner2.gif";
import summerIce from "../../images/content2-banner3.jpg";
import covid from "../../images/content2-banner4.jpg";
import tangleTreatment from "../../images/content3-banner.gif";
import bodySpary from "../../images/content1-slide2-1.jpg";
import sleepBuble from "../../images/content1-slide2-2.jpg";
import retroStective from "../../images/content1-slide2-3.jpg";
import theOliveBrench from "../../images/content1-slide2-4.jpg";
import catastropyCosmetic from "../../images/content1-slide2-5.jpg";
import maskOfMagnermint from "../../images/content1-slide2-6.jpg";

import slideBanner1 from "../../images/main-banner1.jpg";
import slideBanner2 from "../../images/main-banner2.jpg";
import slideBanner3 from "../../images/main-banner3.jpg";
import slideBanner4 from "../../images/main-banner4.jpg";
import slideBanner5 from "../../images/main-banner5.jpg";
import slideBanner6 from "../../images/main-banner6.jpg";

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

  .main-banner .main-slide1 {
    height: 580px;
    background: url(${slideBanner1}) no-repeat center top;
  }
  .main-banner .main-slide2 {
    height: 580px;
    background: url(${slideBanner2}) no-repeat center top;
  }
  .main-banner .main-slide3 {
    height: 580px;
    background: url(${slideBanner3}) no-repeat center top;
  }
  .main-banner .main-slide4 {
    height: 580px;
    background: url(${slideBanner4}) no-repeat center top;
  }
  .main-banner .main-slide5 {
    height: 580px;
    background: url(${slideBanner5}) no-repeat center top;
  }
  .main-banner .main-slide6 {
    height: 580px;
    background: url(${slideBanner6}) no-repeat center top;
  }

  .active,
  .dot:hover {
    background-color: #fff;
  }

  .dot-wrap {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: block;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  .slick-dots {
    width: fit-content !important;
  }

  .slick-dots li {
    display: block !important;
  }

  .dot {
    display: block;
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 10px 0;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  /* 제품 슬라이더 */
  .product-slide-wrap {
    min-width: 1280px;
    padding: 80px 0 120px;
  }

  .product-slide-wrap img {
    margin-left: 40px;
  }

  .product-slide-wrap .product-slide img {
    width: 270px;
  }

  .product-slide-wrap .product-slide {
    display: flex;
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

  /* 사이드 리뷰 슬라이더 */
  .product-slide-reviewwrap {
    position: absolute;
    top: 650px;
    right: 50px;
  }

  .info-wrap img {
    width: 100%;
    vertical-align: middle;
  }
  .info-wrap a {
    display: inline-block;
  }

  .info-wrap {
    display: flex;
    padding: 100px 0;
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

  /* 광고 ?? */
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
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div className="dot-wrap">
        <ul /*style={{ 
          width: '180px !important', 
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '0',
          display: 'block',
          padding: '0',
          margin: '0',
          listStyle: 'none',
          textAlign: 'center' }}*/> {dots} </ul>
        </div>
    ),
    customPaging: i => (
      <div className="dot" style={{
      }}
      >
        </div>
    )};

  return (
    <MainWrapper>
      <main>
        <article>
          <h3>메인 광고 배너</h3>
          <div class="main-banner">
            <Slider {...settings}>
            <div class="main-slide main-slide1">
              <a href="javascript:void(0)"></a>
            </div>
            <div class="main-slide main-slide2">
              <a href="javascript:void(0)"></a>
            </div>
            <div class="main-slide main-slide3">
              <a href="javascript:void(0)"></a>
            </div>
            <div class="main-slide main-slide4 fade">
              <a href="javascript:void(0)"></a>
            </div>
            <div class="main-slide main-slide5 fade">
              <a href="javascript:void(0)"></a>
            </div>
            <div class="main-slide main-slide6 fade">
              <a href="javascript:void(0)"></a>
            </div>
            </Slider>

            {/* <div class="dot-wrap">
              <span class="dot" onClick="currentSlide(1)"></span>
              <span class="dot" onClick="currentSlide(2)"></span>
              <span class="dot" onClick="currentSlide(3)"></span>
              <span class="dot" onClick="currentSlide(4)"></span>
              <span class="dot" onClick="currentSlide(5)"></span>
              <span class="dot" onClick="currentSlide(6)"></span>
            </div> */}
          </div>
        </article>
        <section>
          <h3>나만 알고 싶은 향기</h3>
          <div class="product-slide-wrap">
            <img src={titleImg} alt="나만 알고 싶은 향기" />
            <div class="product-slide">
              <div class="prod1">
                <a href="./magic-crystal.html">
                  <img src={magicCrystals} alt="매직 크리스탈스 300g/600g" />
                  <br />
                  <span class="first">매직 크리스탈스 300g/600g</span>
                  <br />
                  <span class="second">#스크럽 #민트의마법 #시원해져라</span>
                  <br />
                  <span class="third">\ 32,000</span>
                </a>
              </div>
              <div class="prod2">
                <a href="javascript:void(0)">
                  <img
                    src={magnerMint}
                    alt="마스크 오브 매그너민트 125g/315g"
                  />
                  <br />
                  <span class="first">마스크 오브 매그너민트 125g/315g</span>
                  <br />
                  <span class="second">#꿀의촉촉함 #데일리백 #민트팩</span>
                  <br />
                  <span class="third">\ 20,000</span>
                </a>
              </div>
              <div class="prod3">
                <a href="javascript:void(0)">
                  <img
                    src={oliveBrench}
                    alt="더 올리브 브랜치 100g/250g/500g"
                  />
                  <br />
                  <span class="first">더 올리브 브랜치 100g/250g/500g</span>
                  <br />
                  <span class="second">#오일듬뿍샤워젤 #보습샤워시작</span>
                  <br />
                  <span class="third">\ 17,000</span>
                </a>
              </div>
            </div>{" "}
            {/* product-slide */}
          </div>{" "}
          {/* product-slide-wrap */}
          <div class="product-slide-reviewwrap">
            <div class="review1">
              <a href="javascript:void(0)">
                <img src={bodySpary} alt="더티 보디 스프레이" />
              </a>
            </div>
            <div class="hide review2">
              <a href="javascript:void(0)">
                <img src={sleepBuble} alt="슬리피 버블바" />
              </a>
            </div>
            <div class="hide review3">
              <a href="javascript:void(0)">
                <img src={retroStective} alt="더 레트로 스텍티브" />
              </a>
            </div>
            <div class="hide review4">
              <a href="javascript:void(0)">
                <img src={theOliveBrench} alt="더 올리브 브랜치" />
              </a>
            </div>
            <div class="hide review5">
              <a href="javascript:void(0)">
                <img src={catastropyCosmetic} alt="카타스트로피 코스메틱" />
              </a>
            </div>
            <div class="hide review6">
              <a href="javascript:void(0)">
                <img src={maskOfMagnermint} alt="마스크 오브 매그너민트" />
              </a>
            </div>
          </div>{" "}
          {/* product-slide-sidewrap */}
        </section>
        <section>
          <h4>소식, 제품소개, 이벤트, 공지사항</h4>
          <div class="info-wrap">
            <div class="info-wrap-left">
              <a href="javascript:void(0)">
                <img
                  src={consTantin}
                  alt="마크 콘스탄틴과 함께하는 퍼퓸 이야기"
                />
              </a>
            </div>{" "}
            {/* info-wrap-left */}
            <div class="info-wrap-right">
              <div class="info-wrap-right-top">
                <a href="javascript:void(0)">
                  <img src={saltScrub} alt="부드럽게 소금 롤링 스크럽" />
                </a>
              </div>{" "}
              {/* info-wrap-right-top */}
              <div class="info-wrap-right-bottom">
                <div class="info-wrap-right-bottom-left">
                  <a href="javascript:void(0)">
                    <img src={summerIce} alt="EVENT 꽁꽁! 무더위를 얼리다" />
                  </a>
                </div>{" "}
                {/* info-wrap-right-bottom-left */}
                <div class="info-wrap-right-bottom-right">
                  <a href="javascript:void(0)">
                    <img
                      src={covid}
                      alt="코로나19 예방을 위한 매장 운영 안내"
                    />
                  </a>
                </div>{" "}
                {/* info-wrap-right-bottom-right */}
              </div>{" "}
              {/* info-wrap-right-bottom */}
            </div>{" "}
            {/* info-wrap-right */}
          </div>{" "}
          {/* info-wrap */}
        </section>
        <section>
          <h4>신제품 광고</h4>
          <div class="newprod-adv-wrap">
            <div class="newprod-adv-text">
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
