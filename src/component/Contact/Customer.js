import "./Customer.css";
import amazon from "./amazon/amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

// 고객 이탈 예측
import 고객이탈예측1 from "./amazon/amazon_고객이탈예측/고객이탈예측1.png";
import 고객이탈예측2 from "./amazon/amazon_고객이탈예측/고객이탈예측2.png";
import 고객이탈예측3_1 from "./amazon/amazon_고객이탈예측/고객이탈예측3-1.png";
import 고객이탈예측3_2 from "./amazon/amazon_고객이탈예측/고객이탈예측3-2.png";
import 고객이탈예측4 from "./amazon/amazon_고객이탈예측/고객이탈예측4.png";

const customer = () => {
  return (
    <body className="customer">
      <div className="about_main">
        <h1 className="customer_main_title">고객이탈예측</h1>
        <div className="customer_main_txt">
        고객의 구매 패턴, 브라우징 빈도, 리뷰 남김 여부 등의 정보를 활용하여 고객 이탈을 예측하는 모델 
        <br></br>이를 통해 이탈할 가능성이 높은 고객에게 특별한 제안을 보내거나 개인화된 경험을 제공하여 이탈을 방지할 수 있습니다.
        </div>

        <div className="customer_title">고객 이탈률을 선정하는데 있어 어떤 특성이 가장 중요한가</div>
          <div className="customer_img">
            <img src={고객이탈예측1} alt="고객이탈예측1"></img>
          </div>
          <div className="customer_txt"> ➡ 검색 횟수,소비자 리뷰 중요도, 쇼핑 만족도 등이 고객 이탈률을 계산하는데 있어서 중요한 경향이 있는 것을 알 수 있었다.</div>
        

        <div className="customer_title">
          검색 횟수와 이탈률의 상관관계</div>
          <div className="customer_img">
            <img src={고객이탈예측2} alt="고객이탈예측2"></img>
          </div>
          <div className="customer_txt"> ➡ 그래프에서 가장 중요한 특성을확인해보기로하였다. 검색 횟수가 낮을수록 고객 이탈률이 높다.</div>
     </div>
    </body>
  );
};

export default customer;
