import "./Category.css";
import amazon from "./amazon/amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

// 구매 카테고리 예측
import buy_prediction1 from "./amazon/amazon_구매카테고리예측/buy_predict1.json";
import buy_prediction2 from "./amazon/amazon_구매카테고리예측/buy_predict2.json";
import just1 from "./amazon/amazon_구매카테고리예측/just1.json";
import just2 from "./amazon/amazon_구매카테고리예측/just2.json";
import 구매예측4 from "./amazon/amazon_구매카테고리예측/구매예측4.png";

const Category = () => {
  return (
    <body className="category">
      <div className="about_main">
        <h1 className="category_main_title">구매 카테고리 예측</h1>
        <div className="category_main_txt">
          고객의 성별, 연령, 검색 방법, 구매 빈도 등의 정보를 바탕으로 특정
          제품을 구매할 확률을 예측하는 모델을 만들 수 있습니다.
          <br></br> 이를 통해 고객에게 가장 관련성이 높은 제품을 추천하거나
          개인화된 마케팅 메시지를 제공할 수 있습니다.
        </div>

        <div className="category_title">카테고리에 따른 구매빈도</div>
        <div className="category_box">
          <div className="category_plot">
            <Plot // buy_prediction1
              data={buy_prediction1.data}
              layout={buy_prediction1.layout}
              config={{ responsive: true }}
            />
          </div>
          <div className="category_txt">
            ➡ 카테고리에 따른 현재 구매빈도를 보면 옷이 구매횟수가 제일 많고 그
            다음이 뷰티용품인 것으로 보인다.
            <br></br>아마도 아마존의 주 고객이 20대 중후반 여성이 많은 것과
            밀접한 관련이 있다고 보여진다.
          </div>
        </div>

        <div className="category_title">음식 카테고리와 특성간의 상관관계</div>
        <div className="category_box">
          <Plot // buy_prediction2
            data={buy_prediction2.data}
            layout={buy_prediction2.layout}
            config={{ responsive: true }}
          />
          <div className="category_txt">
            ➡ 식료품과 음식 카테고리에 중요한 특성 값들은 쇼핑 만족도,나이,리뷰
            중요도 등이 있다.
          </div>
        </div>

        <div className="category_title">
          고객들이 생각하는 서비스 개선필요 영역 순위
        </div>
        <div className="category_box">
          {" "}
          <img
            className="buy_prediction_img"
            src={구매예측4}
            alt="구매예측4"
          ></img>
          <div className="category_txt">
            ➡ 설문조사 결과 고객 서비스 응답성, 제품 품질 및 정확성, 포장 쓰레기
            줄이기, 배송속도 및 신뢰성 순으로
            <br></br>개선이 필요한 것으로 나타났다.
          </div>
        </div>
      </div>
    </body>
  );
};

export default Category;
