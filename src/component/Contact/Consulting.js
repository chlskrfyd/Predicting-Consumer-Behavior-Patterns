import "./Consulting.css";
import amazon from "./amazon/amazon.png";
import 고객이탈예측1 from "./amazon/amazon_고객이탈예측/고객이탈예측1.png";
import 고객이탈예측2 from "./amazon/amazon_고객이탈예측/고객이탈예측2.png";
import 고객이탈예측3_1 from "./amazon/amazon_고객이탈예측/고객이탈예측3-1.png";
import 고객이탈예측3_2 from "./amazon/amazon_고객이탈예측/고객이탈예측3-2.png";
import 고객이탈예측4 from "./amazon/amazon_고객이탈예측/고객이탈예측4.png";
import buy_prediction1 from "./amazon/amazon_구매카테고리예측/buy_predict1.json";
import buy_prediction2 from "./amazon/amazon_구매카테고리예측/buy_predict2.json";
import just1 from "./amazon/amazon_구매카테고리예측/just1.json";
import just2 from "./amazon/amazon_구매카테고리예측/just2.json";
import 구매예측4 from "./amazon/amazon_구매카테고리예측/구매예측4.png";

import segmentation1 from "./amazon/amazon_고객세분화/customer_segmentation1.json";
import segmentation2 from "./amazon/amazon_고객세분화/customer_segmentation2.json";
import segmentation3 from "./amazon/amazon_고객세분화/customer_segmentation3.json";

import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

const Consulting = () => {
  return (
    <body className="consulting">
      <div className="about_main">
        <h1 className="consulting_main_title">Cousultings</h1>
        <div className="consulting_title">
          고객 이탈 예측
          <img src={amazon} className="amazon_1" alt="amazon"></img>
        </div>
        <div className="consulting_box_2">
          <img src={고객이탈예측1} alt="고객이탈예측1"></img>
          <img src={고객이탈예측2} alt="고객이탈예측2"></img>
          <br />
          <img src={고객이탈예측3_1} alt="고객이탈예측3-1"></img>
          <br />
          <img src={고객이탈예측3_2} alt="고객이탈예측3-2"></img>
          <br />
          <img src={고객이탈예측4} alt="고객이탈예측4"></img>
        </div>
        <div className="consulting_title">
          구매 카테고리 예측
          <img src={amazon} className="amazon_2" alt="amazon"></img>
        </div>
        <div className="consulting_box_2"></div>
        <Plot // buy_prediction1
          data={buy_prediction1.data}
          layout={buy_prediction1.layout}
          config={{ responsive: true }}
        />
        <Plot // buy_prediction2
          data={buy_prediction2.data}
          layout={buy_prediction2.layout}
          config={{ responsive: true }}
        />
        <Plot // just1
          data={just1.data}
          layout={just1.layout}
          config={{ responsive: true }}
        />
        <Plot // just2
          data={just2.data}
          layout={just2.layout}
          config={{ responsive: true }}
        />
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
      </div>
    </body>
  );
};

export default Consulting;
