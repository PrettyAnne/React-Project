import styled from "styled-components";

const CategoryWrapper = styled.div`
  .top-banner {
    width: 100%;
    height: 500px;
    background-color: pink;
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
  return (
    <CategoryWrapper>
      <div className="top-banner"></div>
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
            <li>
              <div className="prd-img">
                <img src="https://www.lush.co.kr/data/goods/20/10/43/1000001455/1000001455_main_09.jpg" />
              </div>
              <div className="prd-icon"><span>new</span></div>
              <div className="prd-name">배쓰밤</div>
              <div className="prd-tag">태스용</div>
              <div className="prd-price">25,000 원</div>
            </li>
            <li>
              <div className="prd-img">
                <img src="https://www.lush.co.kr/data/goods/20/10/43/1000001455/1000001455_main_09.jpg" />
              </div>
              <div className="prd-icon">new</div>
              <div className="prd-name">배쓰밤</div>
              <div className="prd-tag">태스용</div>
              <div className="prd-price">25,000 원</div>
            </li>
            <li>
              <div className="prd-img">
                <img src="https://www.lush.co.kr/data/goods/20/10/43/1000001455/1000001455_main_09.jpg" />
              </div>
              <div className="prd-icon">new</div>
              <div className="prd-name">배쓰밤</div>
              <div className="prd-tag">태스용</div>
              <div className="prd-price">25,000 원</div>
            </li>
            <li>
              <div className="prd-img">
                <img src="https://www.lush.co.kr/data/goods/20/10/43/1000001455/1000001455_main_09.jpg" />
              </div>
              <div className="prd-icon">new</div>
              <div className="prd-name">배쓰밤</div>
              <div className="prd-tag">태스용</div>
              <div className="prd-price">25,000 원</div>
            </li>
            <li>
              <div className="prd-img">
                <img src="https://www.lush.co.kr/data/goods/20/10/43/1000001455/1000001455_main_09.jpg" />
              </div>
              <div className="prd-icon">new</div>
              <div className="prd-name">배쓰밤</div>
              <div className="prd-tag">태스용</div>
              <div className="prd-price">25,000 원</div>
            </li>
          </ul>
        </div>
      </div>
    </CategoryWrapper>
  );
}