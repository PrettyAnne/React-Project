export default function Main() {
  return(
    <div>
    <main>
    <article>
      <h3>메인 광고 배너</h3>
      <div class="main-banner">
        <div class="main-slide main-slide1 fade">
          <a href="javascript:void(0)"></a>
        </div>
        <div class="main-slide main-slide2 fade">
          <a href="javascript:void(0)"></a>
        </div>
        <div class="main-slide main-slide3 fade">
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

        <div class="dot-wrap">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
          <span class="dot" onclick="currentSlide(4)"></span>
          <span class="dot" onclick="currentSlide(5)"></span>
          <span class="dot" onclick="currentSlide(6)"></span>
        </div>
    
      </div> {/* main-banner */}
      {/* <script>
        $(document).ready(function(){
          $('.main-banner').bxSlider();
        });
      </script> */}
    </article>
    <section>
      <h3>나만 알고 싶은 향기</h3>
      <div class="product-slide-wrap">
        <img src="./images/content2-title.png" alt="나만 알고 싶은 향기" />
        <div class="product-slide">
          <div class="prod1">
            <a href="./magic-crystal.html">
              <img src="./images/content1-slide1-1.jpg" alt="매직 크리스탈스 300g/600g" /><br />
              <span class="first">매직 크리스탈스 300g/600g</span><br />
              <span class="second">#스크럽 #민트의마법 #시원해져라</span><br />
              <span class="third">\ 32,000</span>
            </a>
          </div>
          <div class="prod2">
            <a href="javascript:void(0)">
              <img src="./images/content1-slide1-2.jpg" alt="마스크 오브 매그너민트 125g/315g" /><br />
              <span class="first">마스크 오브 매그너민트 125g/315g</span><br />
              <span class="second">#꿀의촉촉함 #데일리백 #민트팩</span><br />
              <span class="third">\ 20,000</span>
            </a>
          </div>
          <div class="prod3">
            <a href="javascript:void(0)">
              <img src="./images/content1-slide1-3.jpg" alt="더 올리브 브랜치 100g/250g/500g" /><br />
              <span class="first">더 올리브 브랜치 100g/250g/500g</span><br />
              <span class="second">#오일듬뿍샤워젤 #보습샤워시작</span><br />
              <span class="third">\ 17,000</span>
            </a>
          </div>
        </div> {/* product-slide */}
      </div> {/* product-slide-wrap */}
      <div class="product-slide-reviewwrap">
        <div class="review1">
          <a href="javascript:void(0)">
            <img src="./images/content1-slide2-1.jpg" alt="더티 보디 스프레이" />
          </a>
        </div>
        <div class="hide review2">
          <a href="javascript:void(0)">
            <img src="./images/content1-slide2-2.jpg" alt="슬리피 버블바" />
          </a>
        </div>
        <div class="hide review3">
          <a href="javascript:void(0)">
            <img src="./images/content1-slide2-3.jpg" alt="더 레트로 스텍티브" />
          </a>
        </div>
        <div class="hide review4">
          <a href="javascript:void(0)">
            <img src="./images/content1-slide2-4.jpg" alt="더 올리브 브랜치" />
          </a>
        </div>
        <div class="hide review5">
          <a href="javascript:void(0)">
            <img src="./images/content1-slide2-5.jpg" alt="카타스트로피 코스메틱" />
          </a>
        </div>
        <div class="hide review6">
          <a href="javascript:void(0)">
            <img src="./images/content1-slide2-6.jpg" alt="마스크 오브 매그너민트" />
          </a>
        </div>
      </div> {/* product-slide-sidewrap */}
    </section>
    <section>
      <h4>소식, 제품소개, 이벤트, 공지사항</h4>
      <div class="info-wrap">
        <div class="info-wrap-left">
          <a href="javascript:void(0)"><img src="./images/content2-banner1.jpg" alt="마크 콘스탄틴과 함께하는 퍼퓸 이야기" /></a>
        </div> {/* info-wrap-left */}

        <div class="info-wrap-right">
          <div class="info-wrap-right-top">
            <a href="javascript:void(0)">
              <img src="./images/content2-banner2.gif" alt="부드럽게 소금 롤링 스크럽" />
            </a>            
          </div> {/* info-wrap-right-top */}

          <div class="info-wrap-right-bottom">
            <div class="info-wrap-right-bottom-left">
              <a href="javascript:void(0)">
                <img src="./images/content2-banner3.jpg" alt="EVENT 꽁꽁! 무더위를 얼리다" />
              </a>    
            </div> {/* info-wrap-right-bottom-left */}

            <div class="info-wrap-right-bottom-right">
              <a href="javascript:void(0)">
                <img src="./images/content2-banner4.jpg" alt="코로나19 예방을 위한 매장 운영 안내" />
              </a>    
            </div> {/* info-wrap-right-bottom-right */}
          </div> {/* info-wrap-right-bottom */}
        </div> {/* info-wrap-right */}
      </div> {/* info-wrap */}
    </section>
    <section>
      <h4>신제품 광고</h4>
      <div class="newprod-adv-wrap">
        <div class="newprod-adv-text">
          <strong>NEW 탱글드 헤어 <br />트리트 먼트</strong>
          <p>
            전통 악기에서 영감을 받은 두피 트리트먼트로,기분 좋은<br /> 낮잠에 빠져달듯 부드럽고 편안한 시간을 선사합니다.
          </p>
        </div>
        <a href="javascript:void(0)">
          <img src="./images/content3-banner.gif" alt="NEW 탱글드 헤어 트리트먼트" />
        </a>
      </div> {/* newprod-adv-wrap */}
    </section>
  </main>
  </div>

  );
}