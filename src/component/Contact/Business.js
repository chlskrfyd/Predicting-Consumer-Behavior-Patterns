import "./Business.css";
import amazon from "./amazon/amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

// business_img
import category1 from "./business_img/category1.png";
import category2 from "./business_img/category2.png";
import customer1 from "./business_img/customer1.png";
import customer2 from "./business_img/customer2.png";
import segmentation1 from "./business_img/segmentation1.png";
import segmentation2 from "./business_img/segmentation2.png";

import result_chart from "./business_img/result_chart.png";

const Business = () => {
  return (
    <body className="business">
      <div className="about_main">
        <h1 className="business_main_title">비즈니스 전략</h1>

        {/* <div className="business_title">고객 이탈 예측</div>
        <div className="business_box">asdfa</div>

        <div className="business_title">구매 카테고리 예측</div>
        <div className="business_box">asdfa</div>

        <div className="business_title">고객 세분화</div>
        <div className="business_box">asdfa</div> */}

        <figure>
          <img
            className="result_chart"
            src={result_chart}
            alt="result_chart"
          ></img>
          <figcaption>비즈니스 전략 제시</figcaption>
        </figure>
      </div>
    </body>
  );
};

export default Business;
