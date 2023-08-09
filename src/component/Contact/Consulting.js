import "./Consulting.css";
import amazon from "./amazon/amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

// 고객 이탈 예측
import 고객이탈예측1 from "./amazon/amazon_고객이탈예측/고객이탈예측1.png";
import 고객이탈예측2 from "./amazon/amazon_고객이탈예측/고객이탈예측2.png";
import 고객이탈예측3_1 from "./amazon/amazon_고객이탈예측/고객이탈예측3-1.png";
import 고객이탈예측3_2 from "./amazon/amazon_고객이탈예측/고객이탈예측3-2.png";
import 고객이탈예측4 from "./amazon/amazon_고객이탈예측/고객이탈예측4.png";

// 구매 카테고리 예측
import buy_prediction1 from "./amazon/amazon_구매카테고리예측/buy_predict1.json";
import buy_prediction2 from "./amazon/amazon_구매카테고리예측/buy_predict2.json";
import just1 from "./amazon/amazon_구매카테고리예측/just1.json";
import just2 from "./amazon/amazon_구매카테고리예측/just2.json";
import 구매예측4 from "./amazon/amazon_구매카테고리예측/구매예측4.png";

// 고객 세분화
import segmentation1 from "./amazon/amazon_고객세분화/customer_segmentation1.json";
import segmentation2 from "./amazon/amazon_고객세분화/customer_segmentation2.json";
import segmentation3 from "./amazon/amazon_고객세분화/customer_segmentation3.json";

const Consulting = () => {
  return (
    <body className="consulting">
      <div className="about_main">
        <h1 className="consulting_main_title">Cousultings</h1>
        <div className="consulting_title">대주제</div>
        <br />
        asdf
        <div className="consulting_title">
          고객 이탈 예측
          <img src={amazon} className="amazon_1" alt="amazon"></img>
        </div>
        <div className="consulting_box_2">
          <h3>1</h3>
          <img src={고객이탈예측1} alt="고객이탈예측1"></img>
          <h3>2</h3>
          <img src={고객이탈예측2} alt="고객이탈예측2"></img>
          <br />
          <h3>3</h3>
          <img src={고객이탈예측3_1} alt="고객이탈예측3-1"></img>
          <br />
          <img src={고객이탈예측3_2} alt="고객이탈예측3-2"></img>
          <br />
          <h3>4</h3>
          <img src={고객이탈예측4} alt="고객이탈예측4"></img>
        </div>
        <div className="consulting_title">
          구매 카테고리 예측
          <img src={amazon} className="amazon_2" alt="amazon"></img>
        </div>
        <div className="consulting_box_2"></div>
        <h3>1</h3>
        <Plot // buy_prediction1
          data={buy_prediction1.data}
          layout={buy_prediction1.layout}
          config={{ responsive: true }}
        />
        <h3>2</h3>
        <Plot // buy_prediction2
          data={buy_prediction2.data}
          layout={buy_prediction2.layout}
          config={{ responsive: true }}
        />
        <h3>3</h3>
        <Plot // just1
          data={just1.data}
          layout={just1.layout}
          config={{ responsive: true }}
        />
        <h3>4</h3>
        <Plot // just2
          data={just2.data}
          layout={just2.layout}
          config={{ responsive: true }}
        />
        <h3>5</h3>
        <img
          className="buy_prediction_img"
          src={구매예측4}
          alt="구매예측4"
        ></img>
        <div className="consulting_title">
          고객 세분화
          <img src={amazon} className="amazon_3" alt="amazon"></img>
        </div>
        <div className="consulting_box_2"></div>
        <Plot // customer_segmentation1
          data={segmentation1.data}
          layout={segmentation1.layout}
          config={{ responsive: true }}
        />
        <Plot // customer_segmentation2
          data={segmentation2.data}
          layout={segmentation2.layout}
          config={{ responsive: true }}
        />
        <Plot // customer_segmentation3
          data={segmentation3.data}
          layout={segmentation3.layout}
          config={{ responsive: true }}
        />
      </div>
      <div className="consulting_title">결론 : 비즈니스 제안</div>
      <br />
      asdf
    </body>
  );
};

export default Consulting;
