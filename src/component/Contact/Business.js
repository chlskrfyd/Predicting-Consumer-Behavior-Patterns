import "./Business.css";
import amazon from "./amazon/amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

// business_img
// import category1 from "./business_img/category1.png";
// import category2 from "./business_img/category2.png";
// import customer1 from "./business_img/customer1.png";
// import customer2 from "./business_img/customer2.png";
// import segmentation1 from "./business_img/segmentation1.png";
// import segmentation2 from "./business_img/segmentation2.png";

import result_chart from "./business_img/result_chart.png";

const Business = () => {
  return (
    <body className="business">
      <div className="about_main">
        <h1 className="business_main_title">비즈니스 전략</h1>

        {/* <div className="business_title">고객 이탈 예측</div>
        <div className="business_box">asdfa</div>

        <div className="business_title">구매 카테고리 예측</div>
        <div className="business_box">asdfa</div> */}

        <div className="business_title">
          아마존 데이터 소비자 행동분석 결과 및 활용 방안{" "}
        </div>
        <br />
        <br />

        <figure>
          <img
            className="result_chart"
            src={result_chart}
            alt="result_chart"
          ></img>
          <figcaption>비즈니스 전략 제시</figcaption>
        </figure>
        <div className="business_box">
          ➡&nbsp;아마존 소비자의 구매 패턴, 선호도, 행동 데이터를 기반으로
          고객을 깊이 이해하고 행동분석 결과를 바탕으로 효과적인
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;마케팅 및 제품 추천 전략을
          제시합니다.
          <br />
          <br />
          ➡&nbsp;위 그래프를 볼 때 고객들이 잘 세분화되어 나누어져 있는 것을
          확인할 수 있었다.
        </div>
      </div>
    </body>
  );
};

export default Business;
