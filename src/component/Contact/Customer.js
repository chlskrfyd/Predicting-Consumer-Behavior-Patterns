import "./Customer.css";
import amazon from "./amazon/amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

// 고객 이탈 예측 그래프
import ChartComponent from "./amazon/amazon_고객이탈예측/Customer_graph1.js";
// import 고객이탈예측1 from "./amazon/amazon_고객이탈예측/고객이탈예측1.png";
import SimpleBarChart from "./amazon/amazon_고객이탈예측/Customer_graph2.js";
// import 고객이탈예측2 from "./amazon/amazon_고객이탈예측/고객이탈예측2.png";
// import 고객이탈예측3_1 from "./amazon/amazon_고객이탈예측/고객이탈예측3-1.png";
// import 고객이탈예측3_2 from "./amazon/amazon_고객이탈예측/고객이탈예측3-2.png";
// import 고객이탈예측4 from "./amazon/amazon_고객이탈예측/고객이탈예측4.png";

// 비즈니스 전략
import customer_img1 from "./business_img/customer1.png";
import customer_img2 from "./business_img/customer2.png";

const customer = () => {
  return (
    <body className="customer">
      <div className="about_main">
        <h1 className="customer_main_title">고객이탈예측</h1>
        <div className="customer_main_txt">
          고객의 구매 패턴, 브라우징 빈도, 리뷰 남김 여부 등의 정보를 활용하여
          고객 이탈을 예측하는 모델
          <br></br>
          {/* 이를 통해 이탈할 가능성이 높은 고객에게 특별한 제안을 보내거나
          개인화된 경험을 제공하여 이탈을 방지할 수 있습니다. */}
        </div>

        <div className="customer_title">고객 이탈률의 주요 영향 요인</div>
        <div className="customer_box">
          <ChartComponent></ChartComponent>
        </div>
        <br />
        <br />

        <div className="customer_txt">
          ➡ 인터넷 접속 빈도, 고객 리뷰의 중요성, 쇼핑 만족도 등이 고객 이탈률에
          큰 영향을 주는 것으로 나타났습니다.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 이러한 요인들을 중점적으로 관리하면
          고객 이탈률을 줄일 수 있을 것으로 예상됩니다.
        </div>
        <br />
        <br />

        <div className="customer_title">
          인터넷 접속 빈도와 이탈률의 상관관계
        </div>
        <SimpleBarChart></SimpleBarChart>
        <div className="customer_txt">
          ➡ 이전에 살펴본 주요 영향 요인 중 인터넷 접속 빈도가 고객 이탈률에 큰
          영향을 미칩니다.
          <br />➡ 위의 그래프를 통해 인터넷 접속 빈도별로 고객 이탈률의 차이를
          명확하게 확인할 수 있습니다.
        </div>
        <div className="customer_title">비즈니스 성공 사례</div>
        <br />
        <br />
        <br />
        <figure>
          <img
            className="customerResult_img"
            src={customer_img1}
            alt="customer_img1"
          />
          <br />
          <figcaption>고객이탈예측 비즈니스 성공 사례 1</figcaption>
        </figure>
        <br />
        <br />
        <figure>
          <img
            className="customerResult_img"
            src={customer_img2}
            alt="customer_img2"
          />
          <br />
          <figcaption>고객이탈예측 비즈니스 성공 사례 2</figcaption>
        </figure>
      </div>
    </body>
  );
};

export default customer;
