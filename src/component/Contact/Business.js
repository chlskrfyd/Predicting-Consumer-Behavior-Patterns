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

const Business = () => {
  return (
    <body className="business">
      <div className="about_main">
        <h1 className="business_main_title">비즈니스 전략</h1>

        <div className="business_title">고객 이탈 예측</div>
        <div className="business_box">asdfa</div>

        <div className="business_title">구매 카테고리 예측</div>
        <div className="business_box">asdfa</div>

        <div className="business_title">고객 세분화</div>
        <div className="business_box">asdfa</div>

        <div className="business_title">결론 : 비즈니스 제안</div>
        <br />
        <img className="business_img" src={category1} alt="category1" />
        <img className="business_img" src={category2} alt="category2" />
        <img className="business_img" src={customer1} alt="category2" />
        <img className="business_img" src={customer2} alt="customer2" />
        <img className="business_img" src={category2} alt="category2" />
        <img className="business_img" src={category2} alt="category2" />
      </div>
    </body>
  );
};

export default Business;
