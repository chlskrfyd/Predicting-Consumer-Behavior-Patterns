import "./Segmentation.css";
import amazon from "./amazon/amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

// 고객 세분화
import segmentation1 from "./amazon/amazon_고객세분화/customer_segmentation1.json";
import segmentation2 from "./amazon/amazon_고객세분화/customer_segmentation2.json";
import segmentation3 from "./amazon/amazon_고객세분화/customer_segmentation3.json";

// 비즈니스 제안 사례
import segmentation_img1 from "./business_img/segmentation1.png";
import segmentation_img2 from "./business_img/segmentation2.png";

const Segmentation = () => {
  return (
    <body className="segmentation">
      <div className="about_main">
        <h1 className="segmentation_main_title">고객 세분화</h1>
        <div className="segmentation_main_txt">
          고객 세분화는 고객을 공통된 특성을 공유하는 그룹으로 분류하는
          것입니다.
          <br /> <br />
          이 데이터셋을 활용하면, 고객의 구매 패턴, 제품 검색 방법, 리뷰 남김
          여부, '나중에 저장하기' 기능 사용 빈도 등을 바탕으로 고객을 여러
          그룹으로 분류할 수 있습니다.
          <br />
          이런 세분화는 마케팅 전략을 개발하거나 개인화된 경험을 제공하는 데
          유용합니다.
        </div>

        <div className="segmentation_title">
          머신러닝 모델을 사용하여 고객을 4개의 그룹으로 세분화했다.
        </div>
        <div className="segmentation_box">
          <div className="segmentation_plot">
            <Plot // customer_segmentation1
              data={segmentation1.data}
              layout={segmentation1.layout}
              config={{ responsive: true }}
            />
          </div>
          <div className="segmentation_txt">
            ➡&nbsp;고객들을 세분화 한 특성들을 2차원으로 차원 축소하여 보기
            편하게 만들었다.
            <br />
            ➡&nbsp;위 그래프를 볼 때 고객들이 잘 세분화되어 나누어져 있는 것을
            확인할 수 있었다.
          </div>
        </div>

        <div className="segmentation_title">그룹별 특징</div>
        <div className="segmentation_box">
          <div className="segmentation_plot">
            <Plot // customer_segmentation2
              data={segmentation2.data}
              layout={segmentation2.layout}
              config={{ responsive: true }}
            />
          </div>
          <div className="segmentation_txt">
            <div>
              ➡&nbsp;그룹 0: 개인화된 추천 빈도가 높고, 검색 횟수는 낮은 편이다.
            </div>
            <div>
              ➡&nbsp;그룹 1:나이가 가장 어리고 고객 리뷰를 중요하게
              생각하지않는다.
            </div>
            <div>
              ➡&nbsp;그룹 2:검색 횟수가 가장 높으며, 고객 리뷰를 중요하게
              생각하며 개인화된 추천 빈도와 장바구니 완성 빈도는 낮다.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제품을 검색할때 주로 다른
              방법(other)으로 검색한다.
            </div>
            <div>
              ➡&nbsp;그룹 3: 나이가 가장 높으며, 개인화된 추천 빈도와 검색
              횟수가 낮고,장바구니 사용빈도가 낮음
            </div>
          </div>
        </div>

        <div className="segmentation_title">
          제품 선택 방법에 따른 그룹의 특징
        </div>
        <div className="segmentation_box">
          <div className="segmentation_plot">
            <Plot // customer_segmentation3
              data={segmentation3.data}
              layout={segmentation3.layout}
              config={{ responsive: true }}
            />
          </div>
          <div className="segmentation_txt">
            ➡&nbsp;2번 그룹이 다른 고객들에 비해 제품을 고를 때 키워드,태그와
            다른 방법을 사용한 경우가 많았다.
          </div>
        </div>
        <div className="segmentation_title">비즈니스 제안 사례</div>
        <br />
        <br />
        <figure>
          <img
            className="segmentation_img"
            src={segmentation_img1}
            alt="segmentation_img1"
          />
          <br />
          <figcaption>고객세분화 비즈니스 제안 사례 1</figcaption>
        </figure>
        <figure>
          <img
            className="segmentation_img"
            src={segmentation_img2}
            alt="segmentation_img2"
          />
          <figcaption>고객세분화 비즈니스 제안 사례 2</figcaption>
        </figure>
      </div>
    </body>
  );
};

export default Segmentation;
