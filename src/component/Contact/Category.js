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
        <h1 className="category_main_title">카테고리 어쩌구</h1>

        <div className="category_title">아마존 소비자 행동 분석</div>
        <div className="category_box">asdfa</div>

        <div className="category_title">
          구매 카테고리 예측
          <img src={amazon} className="amazon_2" alt="amazon"></img>
        </div>
        <div className="category_box_2"></div>
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
      </div>
    </body>
  );
};

export default Category;
