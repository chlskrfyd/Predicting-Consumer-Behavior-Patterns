import "./Category.css";
import amazon from "./amazon/amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

// 구매 카테고리 예측
import buy_prediction1 from "./amazon/amazon_구매카테고리예측/buy_predict1.json";
import buy_prediction2 from "./amazon/amazon_구매카테고리예측/buy_predict2.json";
import just1 from "./amazon/amazon_구매카테고리예측/just1.json";
// import just2 from "./amazon/amazon_구매카테고리예측/just2.json";
// import 구매예측4 from "./amazon/amazon_구매카테고리예측/구매예측4.png";

// 비즈니스 제안 사례
import categoryResult1 from "./business_img/category1.png";
import categoryResult2 from "./business_img/category2.png";

const Category = () => {
  return (
    <body className="category">
      <div className="about_main">
        <h1 className="category_main_title">구매 카테고리 예측</h1>
        <div className="category_main_txt">
          고객의 성별, 연령, 검색 방법, 구매 빈도 등의 정보를 바탕으로 특정
          제품을 구매할 확률을 예측하는 모델
          <br></br> 고객에게 가장 관련성이 높은 제품을 추천하거나 개인화된
          마케팅 메시지를 제공
        </div>

        <div className="category_title">제품 카테고리별 구매빈도</div>
        <div className="category_box">
          <div className="category_plot">
            <Plot // buy_prediction1
              data={buy_prediction1.data}
              layout={buy_prediction1.layout}
              config={{ responsive: true }}
            />
          </div>
          <div className="category_txt">
            이 그래프에서는 의류 카테고리의 구매가 가장 많음을 확인할 수 있으며
            뷰티용품이 그 뒤를 이었습니다.
            <br />
            여성 고객들이 남성보다 쇼핑을 더 활발히 이용하는 경향이 이러한 구매
            패턴을 형성한 것으로 보입니다.
          </div>
        </div>

        <div className="category_title">
          식료품 카테고리와 특성간의 상관관계
        </div>
        <div className="category_box">
          <div className="category_plot">
            <Plot // buy_prediction2
              data={buy_prediction2.data}
              layout={buy_prediction2.layout}
              config={{ responsive: true }}
            />
          </div>
          <div className="category_txt">
            쇼핑 만족도, 고객의 나이, 리뷰에 대한 중요도 평가가 이 카테고리의
            구매 결정에 큰 영향을 미치는 것으로 나타났습니다.
            <br />
            이러한 특성들을 주목하여 식료품 카테고리의 마케팅 전략을 세우는데
            참고할 수 있습니다.
          </div>
        </div>

        <div className="category_title">
          고객들이 생각하는 서비스 개선 필요 영역 순위
        </div>
        <div className="category_box">
          <div className="category_plot">
            <Plot // buy_prediction2
              data={just1.data}
              layout={just1.layout}
              config={{ responsive: true }}
            />
          </div>
          <div className="category_txt">
            설문조사 결과 고객 서비스 응답성, 제품 품질 및 정확성, 과대포장,
            배송속도 및 신뢰성 순으로 개선이 필요한 것으로 <br />
            나타났습니다.
          </div>
          <br />
          <br />
          <br />
        </div>

        <div className="category_title">비즈니스 성공 사례</div>
        <br />
        <br />
        <figure>
          <img
            className="categoryResult"
            src={categoryResult1}
            alt="categoryResult1"
          />
          <br />
          <figcaption>고객세분화 비즈니스 성공 사례 1</figcaption>
        </figure>
        <br />
        <figure>
          <img
            className="categoryResult"
            src={categoryResult2}
            alt="categoryResult2"
          />
          <figcaption>고객세분화 비즈니스 성공 사례 2</figcaption>
        </figure>
      </div>
    </body>
  );
};

export default Category;
