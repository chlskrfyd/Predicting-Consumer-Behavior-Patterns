import React from "react";
import "./Technical.css";
import starbucks from "./startbucks.png";
import amazon from "./amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import graphData from "./graphData.json";
import Plot from "react-plotly.js";

const Tachnical = () => {
  return (
    <body className="technical">
      <div className="about_main">
        <h1 className="technical_main_title">데이터 분석 기술</h1>
        <div className="technical_title">
          스타벅스 지점 예측
          <img src={starbucks} className="tec_img_star" alt="starbucks"></img>
        </div>

        <div className="technical_box_2">
          <p>개요 : 증가하는 커피 소비량에 맞춰 스타벅스 지점 예측 서비스</p>
          <Plot
            data={graphData.data}
            layout={graphData.layout}
            config={{ responsive: true }}
          />
        </div>

        <div className="technical_title">
          감정분석
          <img src={amazon} className="tec_img_amazon1" alt="amazon"></img>
        </div>
        <div className="technical_box_2"></div>

        <div className="technical_title">
          이탈고객 예측
          <img src={amazon} className="tec_img_amazon" alt="amazon"></img>
        </div>
        <div className="technical_box_2"></div>
      </div>
    </body>
  );
};

export default Tachnical;
