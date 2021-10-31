import styled from "styled-components";

import magicCrystalReview1 from "../images/magic-crystal-review1.jpg";
import magicCrystalReview2 from "../images/magic-crystal-review2.jpg";
import magicCrystalReview3 from "../images/magic-crystal-review3.jpg";
import magicCrystalReview4 from "../images/magic-crystal-review4.jpg";

import productImgFirst from "../images/magic-crystal-img1.jpg";
import productImgSecond from "../images/magic-crystal-img2.jpg";
import productImgThird from "../images/magic-crystal-img3.jpg";
import selectArrow from "../images/icon-step.png";
import share from "../images/icon_share.png";
import zzim from "../images/icon-zzim.png";
import magiccrystalVideo from "../images/magic-crystal-video.jpg";
import mainFirst from "../images/magic-crystal-main1.jpg";
import mainSecond from "../images/magic-crystal-main2.jpg";
import mainThird from "../images/magic-crystal-main3.jpg";
import mainFourth from "../images/magic-crystal-main4.jpg";
import mainFifth from "../images/magic-crystal-main5.jpg";
import mainSix from "../images/magic-crystal-main6.jpg";
import mainSalt from "../images/magic-crystal-main-salt.jpg";
import mainPeppermintOil from "../images/magic-crystal-main-peppermint.jpg";
import mainAnise from "../images/magic-crystal-main-anise.jpg";
import packingFirst from "../images/main-packing-check01.png";
import packingSecond from "../images/main-packing-check02.png";
import otherFirst from "../images/magic-crystal-other1.jpg";
import otherSecond from "../images/magic-crystal-other2.jpg";
import iconVegan from "../images/icon_vegan.png";
import iconFresh from "../images/icon_fresh.png";

import iconSpecialVegan from "../images/icon-special-vegan.png";
import iconSpecialSp from "../images/icon-special-sp.png";
import iconCamera from "../images/icon_camera.png";
import { useParams } from "react-router";
import { useEffect } from "react";

const MagicCrystalsWrapper = styled.div`
/* 매직크리스탈스 메인 */
.product-intro-wrap {
  display: flex;
  justify-content: center;
  padding: 100px 0;
}

.intro-right {
  margin-left: 100px;
}

.right1 {
  margin-bottom: 40px;
}

.category {
  width: 150px;
  height: 30px;
  border: 1px solid #8e8e8e;
}

.right2 {
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 20px;
}

.selectArrow {
  display: inline-block;
  margin: 0 10px;
}

.right2 h3 {
  display: inline-block;
  margin-bottom: 20px;
  margin-right: 20px;
  font-size: 28px;
}

.right2 .share-icon {
  margin-left: 200px;
}

.right2 .zzim-icon {
  margin-left: 20px;
}

.right2 p {
  display: block;
  margin-bottom: 20px;
  color: #808080;
  font-weight: bold;
}

.right3 .review-more {
  display: block;
  margin-bottom: 7px;
  color: #1e1e1e;
  font-size: 14px;
  font-weight: bold;
}

.right3 .to-know {
  display: block;
  margin-bottom: 40px;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
}

.right3 .price {
  margin-bottom: 10px;
}

.right3 .price strong {
  display: inline-block;
  margin-left: 100px;
}

.right3 .volume {
  display: inline-block;
  margin: 0 115px 80px 0;
}

#volumeOption {
  width: 280px;
  padding: 10px;
  color: #333;
  font-size: 14px;
}

.btn {
  width: 280px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #000;
}

.btn-fill {
  margin-left: 10px;
  background-color: #000;
  color: #fff;
  border: none;
}

/* 포토리뷰 모아보기 */
section h4 {
  display: inline-block;
  padding: 0 30px;
  margin-bottom: 15px;
  font-size: 20px;
  color: #222;
}

.plus-review-wrap {
  display: flex;
  justify-content: space-between;
  padding: 0 30px 100px;
}

.review-left {
  padding: 30px 15px;
  border: 1px solid #eee;
}

.review-left .more {
  font-size: 12px;
  color: #1e1e1e;
}

.review-left p {
  font-size: 18px;
  font-weight: bold;
}

.review-left a img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.review-right {
  display: flex;
  padding: 62px 50px;
  border: 1px solid #eee;
}

.review-right-left {
  margin-right: 100px;
  text-align: center;
}

.review-right-right {
}

/* 상품상세정보 */
.product-detail-page {
  padding: 0 50px;
}

.product-detail-menu a {
  display: inline-block;
  width: 33%;
  padding: 10px 0;
  border: 1px solid #eee;
  text-align: center;
}

.product-detail-menu a:nth-child(1) {
  border: 1px solid #000;
  border-bottom: none;
}

.product-detail-menu a:nth-child(2),
.product-detail-menu a:nth-child(3) {
  border-bottom: 1px solid #000;
}

.product-video {
  padding: 100px 0;
}

.product-video img {
  width: 100%;
  height: auto;
}

.product-desc {
  text-align: center;
}

.product-desc p {
  display: block;
  margin: 15px;
  font-size: 18px;
}

.product-desc h5 {
  margin-bottom: 15px;
  font-size: 36px;
}

.product-desc strong {
  font-size: 24px;
}

.product-image1 {
  position: relative;
  padding: 100px 0;
}

.product-image1::after {
  content: '';
  display: block;
  clear: both;
}

.product-image1 img {
  float: right;
  width: 986px;
  height: 550px;
  height: auto;
}

.product-image1-desc {
  position: absolute;
  bottom: 80px;
  left: 50px;
  padding: 50px;
  background-color: #fff;
}

.product-image1-desc strong {
  display: block;
  margin-bottom: 15px;
  font-size: 24px;
}

.product-image1-desc p {
  display: block;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.6;
}

.product-image1-desc span {
  font-size: 18px;
  color: #6b6b6b;
}

.product-desc2 {
  margin-bottom: 30px;
}

.product-desc2 .product-desc2-1 {
  display: block;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 2;
  text-align: center;
}

.product-desc2 .product-desc2-2 {
  color: #6b6b6b;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

.product-image2 img {
  width: 100%;
}

.product-ingredient-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 100px 0;
  color: #6b6b6b;
}

.ingredient-left {
  margin-right: 100px;
}

.ingredient-left h5 {
  margin-bottom: 15px;
  color: #000;
  font-size: 36px;
}

.ingredient-left p {
  display: block;
}

.ingredient-left p:nth-of-type(1) {
  margin-bottom: 40px;
}

.ingredient-left p:nth-of-type(2) {
  margin-bottom: 30px;
}

.ingredient-left p:nth-of-type(3) {
  margin-bottom: 60px;
}

.ingredient-left p:nth-of-type(4) {
  margin-bottom: 20px;
}

.ingredient-left p:nth-of-type(4)::before {
  content: '';
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url(${iconSpecialVegan});
  background-repeat: no-repeat;
  background-size: contain;
}

.ingredient-left p:nth-of-type(5)::before {
  content: '';
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url(${iconSpecialSp});
  background-repeat: no-repeat;
  background-size: contain;
}

.ingredient-right {
  display: flex;
}

.ingredient-right img {
  display: block;
  margin-bottom: 10px;
  width: 192px;
  height: 192px;
}

.ingredient-right p {
  display: block;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: center;
}

.ingredient-right span {
  display: block;
  text-align: center;
}

.product-image3 {
  position: relative;
  padding: 100px 30px;
  background-color: #f8f8f8;
}

.product-image3::after {
  content: '';
  display: block;
  clear: both;
}

.product-image3 img {
  float: right;
  width: 919px;
  height: 517px;
}

.product-image3-desc {
  position: absolute;
  bottom: 30px;
  padding: 50px 50px;
  background-color: #fff;
}
.product-image3-desc strong {
  display: block;
  margin-bottom: 15px;
  font-size: 36px;
}

.product-image3-desc p {
  display: block;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 1.6;
  color: #6b6b6b;
}

.product-image3-desc span {
  font-size: 18px;
  line-height: 1.6;
  color: #1ea24d;
}

.product-image4 {
  position: relative;
  padding: 100px 0;
}

.product-image4::after {
  content: '';
  display: block;
  clear: both;
}

.product-image4 img {
  float: right;
  width: 919px;
  height: 517px;
}

.product-image4-desc {
  position: absolute;
  left: 50px;
  bottom: 30px;
  padding: 50px 100px;
  background-color: #fff;
}
.product-image4-desc strong {
  display: block;
  margin-bottom: 5px;
  font-size: 24px;
}

.product-image4-desc p {
  display: block;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: bold;
  line-height: 1.6;
  color: #000;
}

.product-image4-desc a {
  display: block;
  width: 230px;
  padding: 15px 0;
  border: 1px solid #000;
  background-color: #fff;
  font-size: 18px;
  text-align: center;
}

.product-image5 {
  padding: 100px 0;
}

.product-image5-desc strong {
  display: block;
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
}

.product-image5-desc p {
  display: block;
  margin-bottom: 20px;
  text-align: center;
  font-size: 17px;
  line-height: 1.7;
}

.product-image5-desc span {
  display: block;
  margin-bottom: 60px;
  text-align: center;
  font-size: 18px;
  color: #6b6b6b;
}

.product-image5 img {
  display: block;
  margin: 0 auto;
}

.product-image6 {
  padding: 100px 0;
}

.product-image6 img {
  margin-right: 20px;
}

.product-image6 strong {
  display: block;
  margin-bottom: 30px;
  font-size: 42px;
  text-align: center;
}

.product-image6-wrap {
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: #6b6b6b;
}

.product-image6-left {
  display: flex;
  align-items: center;
  margin-right: 100px;
}

.product-image6-right {
  display: flex;
  align-items: center;
}

.product-image7 {
  position: relative;
  padding: 100px 0;
}

.product-image7::after {
  content: '';
  display: block;
  clear: both;
}


.product-image7 img {
  display: block;
  margin: 0 auto;
}

.product-image7 strong {
  display: block;
  margin-bottom: 60px;
  font-size: 36px;
  text-align: center;
}

.product-image7-desc {
  position: absolute;
  left: 150px;
  bottom: 180px;
}

.product-image7-desc p {
  display: block;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.7;
  color: #fff;
}

.product-image7-desc a {
  display: block;
  width: 200px;
  padding: 15px 0;
  border: 1px solid #fff;
  font-size: 16px;
  text-align: center;
  color: #fff;
}

.product-image8 {
  padding: 100px 0;
}

.product-image8-desc {
  margin-bottom: 30px;
}

.product-image8-desc strong {
  display: block;
  margin-bottom: 15px;
  font-size: 36px;
  text-align: center;
}

.product-image8-desc p {
  display: block;
  font-size: 18px;
  text-align: center;
}

.product-image8-both {
  display: flex;
}

.product-image8-both .small-icon {
  display: inline-block;
  width: 74px;
  height: 27px; 
}

.product-image8-left {
  display: flex;
  flex-direction: column;
}

.product-image8-right {
  display: flex;
  flex-direction: column;
}

/**/
.product-detail-page2 {
  padding: 0 50px;
}

.product-detail-menu2 a {
  display: inline-block;
  width: 33%;
  padding: 10px 0;
  border: 1px solid #eee;
  text-align: center;
}

.product-detail-menu2 a:nth-child(2) {
  border: 1px solid #000;
  border-bottom: none;
}

.product-detail-menu2 a:nth-child(1),
.product-detail-menu2 a:nth-child(3) {
  border-bottom: 1px solid #000;
}

.product-review-write-wrap {
  padding: 100px 0;
}

.product-review-write-wrap strong {
  display: block;
  margin-bottom: 15px;
  font-size: 30px;
}

.product-review-write-wrap p {
  display: block;
  margin-bottom: 25px;
  color: #333;
  font-size: 18px;
}

.write-space {
  border: 1px solid #000;
}

.star-score {
  padding: 20px 10px;
  border-bottom: 1px solid #000;
}

.star-score span {
  display: inline-block;
  margin-right: 60px;
}

.textarea {
  width: 100%;
  height: 300px;
  border: none;
}

.privercy-wrap {
  border-top: 1px solid #000;
  font-weight: bold;
  color: #333;
}

.privercy-wrap p {
  display: inline-block;
  margin: 20px 20px;
  font-size: 14px;
}

.privercy-wrap p a {
  display: inline-block;
  margin-left: 15px;
  font-size: 12px;
  font-weight: normal;
  text-decoration: underline;
  color: #1e1e1e;
}

.privercy-desc {
  margin: 0 20px 20px;
  border: 1px solid #000;
  font-size: 14px;
}

.privercy-agree {
  margin: 0 20px 20px;
}

.complete .camera {
  background-image: url(${iconCamera});
  background-repeat: no-repeat;
}

/**/
.product-detail-page3 {
  padding: 0 50px;
}

.product-detail-menu3 a {
  display: inline-block;
  width: 33%;
  padding: 10px 0;
  border: 1px solid #eee;
  text-align: center;
}

.product-detail-menu3 a:nth-child(3) {
  border: 1px solid #000;
  border-bottom: 0;
}

.product-detail-menu3 a:nth-child(1),
.product-detail-menu3 a:nth-child(2) {
  border-bottom: 1px solid #000;
}

.desc-box {
  padding: 80px 50px 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.7;
  color: #252525;
}

.desc-box .desc1 {
  margin-bottom: 40px;
}

.desc-box .desc2,
.desc-box .desc3,
.desc-box .desc4,
.desc-box .desc5,
.desc-box .desc6,
.desc-box .desc7 {
  margin-bottom: 30px;
}

.desc-table {
  padding-bottom: 100px;
}

.desc-table table {
  border-collapse: collapse;
  border: 1px solid #dbdbdb;
  font-size: 14px;
  color: #333;
}

.desc-table table th {
  width: 250px;
  padding: 15px 15px;
  background-color: #f9f9f9;
  border: 1px solid #dbdbdb;
  text-align: left;
}


.desc-table table td {
  padding: 15px 15px;
  border: 1px solid #dbdbdb;
}
`;

export default function MagicCrystals() {
  useEffect(() => { 
  }, []);

  // let { productId } = useParams();
  // useEffect(() => {
  //   fetch(`/product/${productId}`)
  // }, []);
  return (
    <MagicCrystalsWrapper>
      <main>
        <div className="product-intro-wrap">
          <div className="intro-left">
            <div className="slide-img1">
              <img src={productImgFirst} alt="매직 크리스탈스" />
            </div>

            <div className="slide-img2">
              <img src={productImgSecond} alt="매직 크리스탈스" />
              <img src={productImgThird} alt="매직 크리스탈스" />
            </div>
          </div>{/* intro-left */}
          <div className="intro-right">
            <div className="right1">
              <span>홈</span>
              <img src={selectArrow} className="selectArrow" alt="" />
              <select name="" id="" className="category category1">
                <option value="">러쉬</option>
                <option value="">LUSH SPA</option>
              </select>
              <img src={selectArrow} className="selectArrow" alt="" />
              <select name="" id="" className="category category2">
                <option value="">베스트</option>
                <option value="">신제품</option>
                <option value="">배쓰</option>
                <option value="" selected>샤워</option>
                <option value="">보디</option>
                <option value="">페이스</option>
                <option value="">헤어</option>
                <option value="">메이크업</option>
                <option value="">퍼퓸</option>
                <option value="">기프트</option>
                <option value="">비건</option>
              </select>
              <img src={selectArrow} className="selectArrow" alt="" />
              <select name="" id="" className="category category3">
                <option value="">솝</option>
                <option value="">샤워젤&젤리</option>
                <option value="">보디 컨디셔너</option>
                <option value="">샤워밤</option>
                <option value="">샤워오일</option>
                <option value="" selected>스크럽&버터</option>
                <option value="">펀</option>
              </select>
            </div>{/* right1 */}

            <div className="right2">
              <h3>매직 크리스탈스 300g/600g</h3>
              <a href="#" className="share-icon"><img src={share} alt="공유하기" /></a>
              <a href="#" className="zzim-icon"><img src={zzim} alt="찜하기" /></a>
              <p>#스크럽 #민트의마법 #시원해져라</p>
            </div>{/* right2 */}

            <div className="right3">
              <span className="review-more">150개의 후기 보기</span>
              <span className="to-know">Good to Know{/*이미지*/}</span>
              <p className="price">판매가 <strong>\32,000</strong></p>
              <p className="volume">용량</p>
              <select name="" id="volumeOption" className="volume-option">
                <option value="" selected>=옵션:가격=</option>
                <option value="">300g</option>
                <option value="">600g:\+26,000</option>
              </select>
              <div className="btn-group">
                <button type="submit" className="btn">장바구니</button>
                <button type="submit" className="btn btn-fill">주문하기</button>
              </div>{/* btn-group */}
            </div>{/* right3 */}

          </div>{/* intro-right*/}
        </div>{/* product-intro-wrap */}
      </main>

      <section>
        <h4>Plus Review</h4>
        <div className="plus-review-wrap">
          <div className="review-left">
            <p>포토리뷰 모아보기</p>
            <a href="#"><img src={magicCrystalReview1} alt="리뷰 보기" /></a>
            <a href="#"><img src={magicCrystalReview2} alt="리뷰 보기" /></a>
            <a href="#"><img src={magicCrystalReview3} alt="리뷰 보기" /></a>
            <a href="#"><img src={magicCrystalReview4} alt="리뷰 보기" /></a>
            <a href="#" className="more">더보기&gt;</a>
          </div>{/* review-left */}

          <div className="review-right">
            <div className="review-right-left">
              <div>평가</div>
              <div>4.9</div>
              <div>★★★★</div>
            </div>{/* review-right-left */}

            <div className="review-right-right">
              <div>리뷰등록 150건</div>
              <div>포토리뷰 44건</div>
              <div>상품조회수 48320건</div>
            </div>{/* review-right-right */}
          </div>{/* review-right */}

        </div>{/* plus-review-wrap */}
      </section>

      <section>
        <div className="product-detail-page">
          <div className="product-detail-menu" id="detail-info">
            <a href="#detail-info">상품상세정보</a><a href="#prod-review">상품후기 (150)</a><a href="#sub-info">배송/교환 및 반품안내</a>
          </div>{/* product-detail-menu */}
          <div className="product-video">
            <img src={magiccrystalVideo} alt="추울 정도로 시원한 샤워 스크럽을 찾고 있는 당신을 위한 스크럽 동영상" />
          </div>{/* product-video */}

          <div className="product-desc">
            <p>샤워 스크럽</p>
            <h5>매직 크리스탈스</h5>
            <strong>Magic Crystals Shower Scrub</strong>
          </div>

          <div className="product-image1">
            <img src={mainFirst}
              alt="스크럽사진" />
            <div className="product-image1-desc">
              <strong>미리 써 본 후기 ★★★★★</strong>
              <p>
                떨어지면 불안한 저만의 욕실 필수템!<br />
                바닷소금의 입자가 강하지 않아서 부담 없이<br />
                관리할 수 있어요. 시원한 민트 향기가 가득해서<br />
                여름에 쓸 땐 시원함이 2배랍니다~
              </p>
              <span>by. 하트</span>
            </div>{/* product-image1-desc */}
          </div>{/* product-image1 */}

          <div className="product-desc2">
            <p className="product-desc2-1">
              민트와 허브의 상쾌한 향기를 경험해보세요.<br />
              이 제품은 자연에서 얻은 깨끗한 소금을 가득 담아 빛나는 피부로 가꾸는데 도움을 줍니다.<br />
              은하수 별처럼 펼쳐진 고운 바닷소금으로 당신의 피부를 빛내주세요! 신선한 민트,<br />편안한 로즈마리와 세이지 허브의 만남은 거칠어진 피부에 특별한 마법 주문을 외워줄 거예요.
            </p>
            <p className="product-desc2-2">TIP! 피부에 선사하는 보랏빛 마법!</p>
          </div>{/* product-desc2 */}

          <div className="product-image2">
            <img src={mainSecond} alt="" />
          </div>{/* product-image2 */}

          <div className="product-ingredient-wrap">
            <div className="ingredient-left">
              <h5>제품 성분</h5>
              <p>* 원재료의 특성에 한함</p>

              <p>
                대표성분<br />
                바닷소금, 페퍼민트 오일, 스타 아니스 열매
              </p>

              <p>
                전 성분 표기<br />
                마그네슘설페이트,씨솔트,정제수,소듐라우레스설페이트,<br /> 소듐코코암포아세테이트,향료,페퍼민트오일,스피어민트잎오일,<br />멘톨, 스타아니스열매/씨오일,프로필렌글라이콜,라우릴베타인,<br />락틱애씨드, 페퍼민트잎,로즈마리잎,살비아잎,청색1호,<br />적색227호,적색104호의(1)
              </p>

              <p>
                동물성 원료를 전혀 포함하지 않은<br />
                영국 비건협회 인증 제품
              </p>

              <p>
                화학 합성 보존제 없이도 신선함을 유지하는 제품
              </p>
            </div>{/* ingredient-left */}

            <div className="ingredient-right">
              <div className="sea-salt">
                <img src={mainSalt} alt="바닷소금" />
                <p>바닷소금</p>
                <span>부드럽고 촉촉한 피부에 도움 <br />*씨솔트</span>
              </div>

              <div className="peppermint-oil">
                <img src={mainPeppermintOil} alt="페퍼민트 오일" />
                <p>페퍼민트 오일</p>
                <span>상쾌하고 시원한 향기</span>
              </div>

              <div className="star-anise">
                <img src={mainAnise} alt="스타 아니스 열매" />
                <p>스타 아니스 열매</p>
                <span>알싸한 향기</span>
              </div>
            </div>{/* ingredient-right */}
          </div>{/* product-ingredient-wrap */}

          <div className="product-image3">
            <img src={mainThird} alt="" />
            <div className="product-image3-desc">
              <strong>사용 방법</strong>
              <p>
                부드러운 스크럽을 원한다면 적당량을 덜어 샤워 젤처럼<br />
                사용해주세요! 거칠고 강한 것이 좋다면 제품을 한 손에<br />
                듬뿍 덜어내어, 건조한 피부를 시원하게 문질러 준 후<br />
                샤워를 시작하세요!
              </p>
              <span>
                #비건화장품 #블랙팟의환생 #샤워스크럽<br />
                #MagicCrystals #ShowerScrub #매직크리스탈스
              </span>
            </div>{/* product-image3-desc */}
          </div>

          <div className="product-image4">
            <img src={mainFourth} alt="" />
            <div className="product-image4-desc">
              <strong>아티클</strong>
              <p>
                프레쉬 & 핸드메이드 정책
              </p>
              <a href="#">자세히 보기</a>
            </div>
          </div>

          <div className="product-image5">
            <div className="product-image5-desc">
              <strong>친환경 포장</strong>
              <p>
                환경을 생각하는 마음을 담아 신선하게 배송해 드립니다.<br />
                배송 상자는 운송장을 떼어 분리배출하고 완충재는 부피를 줄여 일반 쓰레기로 배출해주세요.<br />
              </p>
              <span>TIP! 냉장배송이 필요한 제품은 100% 물이 담긴 종이 아이스 팩과 함께 출발합니다. (5~9월에 해당)</span>
            </div>
            <img src={mainFifth} alt="" />
          </div>

          <div className="product-image6">
            <strong>Check Point!</strong>
            <div className="product-image6-wrap">
              <div className="product-image6-left">
                <img src={packingFirst} alt="" />
                <p>
                  제품에 부착된 스티커에서<br />
                  제조자와 사용 기한을 확인하세요.<br />
                  스티커 속에서 깜짝 메세지도<br />
                  찾아볼 수 있습니다.
                </p>
              </div>
              <div className="product-image6-right">
                <img src={packingSecond} alt="" />
                <p>
                  러쉬는 정직한 재료를 사용하여<br />
                  모든 제품을 손으로 만듭니다.<br />
                  어떤 모양의 제품이 오더라도<br />
                  사랑해 주실거죠?
                </p>
              </div>
            </div>
          </div>

          <div className="product-image7">
            <strong>블랙 팟의 환생 참여방법</strong>
            <img src={mainSix} alt="" />
            <div className="product-image7-desc">
              <p>
                모두 사용한 블랙 팟 공병을 깨끗이 씻어 매장에 방문해보세요!<br />
                신선한 프레쉬 페이스 마스크 1종을 선물해드립니다.
              </p>
              <a href="#">자세히 보기</a>
            </div>
          </div>

          <div className="product-image8">
            <div className="product-image8-desc">
              <strong>함께하면 더 좋은 제품</strong>
              <p>함께 사용하면 좋습니다.</p>
            </div>
            <div className="product-image8-both">
              <div className="product-image8-left">
                <img src={otherFirst} alt="" />
                <img src={iconVegan} alt="" className="small-icon" />
                <p>채러티 팟 45g/240g</p>
                <span>\ 10,000</span>
              </div>
              <div className="product-image8-right">
                <img src={otherSecond} alt="" />
                <img src={iconVegan} alt="" className="small-icon" />
                <img src={iconFresh} alt="" className="small-icon" />
                <p>더티 보디 스프레이</p>
                <span>\ 50,000</span>
              </div>
            </div>
          </div>
        </div>{/* product-detail-page */}
      </section>

      <section>
        <div className="product-detail-page2">
          <div className="product-detail-menu2" id="prod-review">
            <a href="#detail-info">상품상세정보</a><a href="#prod-review">상품후기 (150)</a><a href="#sub-info">배송/교환 및 반품안내</a>
          </div>
          <div className="product-review-write-wrap">
            <strong>Product Reviews ★★★★ 150</strong>
            <p>나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!</p>
            <div className="write-space">
              <form action="#" method="">
                <div className="star-score">
                  <span>평가</span>
                  <input type="radio" id="5" />
                  <label htmlFor="5">★★★★★</label>
                  <input type="radio" id="4" />
                  <label htmlFor="4">★★★★☆</label>
                  <input type="radio" id="3" />
                  <label htmlFor="3">★★★☆☆</label>
                  <input type="radio" id="2" />
                  <label htmlFor="2">★★☆☆☆</label>
                  <input type="radio" id="1" />
                  <label htmlFor="1">★☆☆☆☆</label>
                </div>

                <div>
                  <input type="textarea" className="textarea" />
                </div>

                <div className="privercy-wrap">
                  <p>비회원 개인정보 수집동의
                    <a href="#">전체보기</a>
                  </p>
                  <div className="privercy-desc">
                    <p>
                      -수집항목:이름,휴대전화번호,작성 비밀번호-수집/이용목적:게시글 접수 및 결과 회신.이용기간:원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단,관계법령의 규정에 의하여 보전할 필요가 있는 경우 일정기간 동안 개인정보를 보관할 수 있습니다. 위와 같이 수집하는 개인정보에 대해,동의하지 않거나 거부할 수 있습니다.다만,동의하지 않거나 거부할 경우 회원에게 제공되는 서비스가 제한될 수 있습니다.그 밖의 사항은 (주)러쉬코리아 개인정보처리방침을 준수합니다.
                    </p>
                  </div>

                  <div className="privercy-agree">
                    <label htmlFor="">작성자</label>
                    <input type="text" />
                    <label htmlFor="">비밀번호</label>
                    <input type="password" />
                    <input type="checkbox" />
                    <label htmlFor="">위 내용에 동의 합니다.</label>
                  </div>

                  <div className="complete">
                    <input type="file" className="camera" />
                    <button type="submit">후기작성</button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>

      </section>

      <section>
        <div className="product-detail-page3">
          <div className="product-detail-menu3" id="sub-info">
            <a href="#detail-info">상품상세정보</a><a href="#prod-review">상품후기 (150)</a><a href="#sub-info">배송/교환 및 반품안내</a>
          </div>

          <div className="desc-box">
            <p className="desc1">
              ■ 배송비:기본배송료는 2,500원 입니다.(도서,산간,오지 일부지역은 배송비가 추가될 수 있습니다)<br />
              ■ 택배사:우체국 택배를 이용합니다.<br />
              ■ 배송가능지역:국내 배송/해외 배송은 불가 합니다.
            </p>

            <p className="desc2">
              ■홈페이지에서 구매한 경우
            </p>

            <p className="desc3">
              러쉬코리아 홈페이지에서 구매한 제품은 홈페이지를 통해서만 교환이 가능합니다.<br />
              고객님의 변심에 의한 반품인 경우 상품 및 서비스를 공급 받은 날로부터 7일 이내 가능하며, 미 개봉 제품만 가능합니다.
            </p>

            <p className="desc4">
              고객센터(1644-2357)로 반품 접수를 받고 있으며,
              지정 택배사를 이용하여 상품 회수 후 교환/반품 여부에 관한 안내가 이루어집니다.
            </p>

            <p className="desc5">
              *고객변심으로 인한 교환시 초도 택배 비용을 포함한 반품 택배 비용이 부과됩니다.<br />
              *상품결함으로 인한 교환의 경우 러쉬코리아에서 택배비용을 부담합니다.<br />
              *택배 비용은 무통장 입금을 통해서만 결제 가능합니다.<br />
              *교환 상품에 스마트 샘플 또는 깜짝 선물이 있는 경우, 함께 반품하여야 교환이 진행됩니다.<br />
              *프레쉬 마스크를 포함하여 냉장배송을 받은 제품은 교환이 불가합니다.
            </p>

            <p className="desc6">
              ■ 휴대폰 소액 결제 시 꼭 참고해주세요.<br />
              휴대폰 소액 결제는 익월 결제 취소가 불가한 통신사 정책으로 인해, 당월 (1일~31일) 에 한한 결제 건만 취소/환불할 수 있습니다.<br />
              또한 부분 결제 취소 불가하오니 주문 시 유의 바랍니다.
            </p>

            <p className="desc7">
              고객센터 1644-2357
            </p>
          </div>

          <div className="desc-table">
            <table>
              <tr>
                <th>사용 방법</th>
                <td>
                  부드러운 스크럽을 원한다면 샤워젤처럼 사용해 주세요!
                  '거칠고 강한 것'이 좋다면 제품을 한 손에 듬뿍 덜어내어, 건조한 피부를 시원하게 문질러 준 후 샤워를 시작하세요!
                </td>
              </tr>{/*1*/}
              <tr>
                <th>보관 시 유의사항</th>
                <td>직사광선을 피해 서늘한 곳에 보관해 주세요.</td>
              </tr>{/*3*/}
              <tr>
                <th>사용상의 주의사항</th>
                <td>
                  1. 화장품 사용 시 또는 직사광선에 의하여 사용부위가 붉은 반점, 부어오름, 가려움증 등의 이상 증상이나 부작용 우려 등이 있는 경우 전문의 등과 상담할 것
                  2. 상처가 있는 부위 등에는 사용을 자제할 것
                  3. 보관 및 취급상의 주의사항    가) 어린이의 손이 닿지 않는 곳에 보관할 것   나) 직사광선을 피해서 보관할 것
                  4. 눈에 들어갔을 때에는 물로 씻어내고, 이상이 있는 경우에는 전문의와 상담할 것
                </td>
              </tr>{/*3*/}
              <tr>
                <th>제조일 및 사용기한</th>
                <td>
                  이 제품의 최적의 사용기한은 제조일자로부터 14개월입니다.
                  당사의 쇼핑몰에서는 제조년월일이 가장 빠른 상품부터 선출고 진행되고 있으며,
                  제품의 입출고가 빈번하여 온라인상에 상세 제조년월일 기재가 어려운 점 양해 바랍니다.
                  수령하신 상품에 부착된 라벨에 제조일자가 년/월/일의 순으로 기재되어 개별 확인이 가능합니다.
                  추가 문의는 고객센터 1644-2357로 문의주시면 상세히 안내 드리겠습니다.
                </td>
              </tr>{/*4*/}
              <tr>
                <th>기능성 제품 식약청 심사 필 유무</th>
                <td>식품의약품안전처 심사 대상 아님</td>
              </tr>{/*5*/}
              <tr>
                <th>품질 보증 기준</th>
                <td>공정거래위원회 고시 소비자분쟁해결기준에 의거 교환 또는 보상 받을 수 있습니다</td>
              </tr>{/*6*/}
              <tr>
                <th>제조국/제조 판매업자</th>
                <td>
                  - 제조원: LUSH JAPAN CO.,LTD. 4027-3, NAKATSU, AIKAWA, AIKO, KANAGAWA, JAPAN - 제조판매업자: ㈜ 러쉬코리아 서울특별시 서초구 서운로 138  www.lush.co.kr
                </td>
              </tr>{/*6*/}
              <tr>
                <th>전성분</th>
                <td>상세페이지 참조</td>
              </tr>{/*7*/}
              <tr>
                <th>용량 또는 중량</th>
                <td>300g, 600g</td>
              </tr>{/*8*/}
              <tr>
                <th>제품 주요 사양</th>
                <td>모든 피부용</td>
              </tr>{/*9*/}
            </table>
          </div>
        </div>
      </section>
    </MagicCrystalsWrapper>
  );
}