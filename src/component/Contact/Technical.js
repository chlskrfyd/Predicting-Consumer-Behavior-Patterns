import React from "react";
import "./Technical.css";
import starbucks from "./startbucks.png";
import amazon from "./amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import graphData from "./graphData.json";
import Plot from "react-plotly.js";

const Contact = () => {
  return (
    <body className="consulting">
      <div className="about_main">
        <h1 className="consulting_main_title">데이터 분석 기술</h1>

        <div className="consulting_title">
          <span className="title-text">스타벅스 지점 예측</span>
          <img src={starbucks} className="starbucks" alt="starbucks"></img>
        </div>
        <div className="consulting_box_2"></div>

        <div className="consulting_title">
          감정분석
          <img src={amazon} className="starbucks" alt="starbucks"></img>
        </div>
        <div className="consulting_box_2"></div>

        <div className="consulting_title">
          이탈고객 예측
          <img src={amazon} className="starbucks" alt="starbucks"></img>
        </div>
        <div className="consulting_box_2"></div>
        <Plot
          data={graphData.data}
          layout={graphData.layout}
          config={{ responsive: true }}
        />
      </div>
    </body>
  );
};

export default Contact;
