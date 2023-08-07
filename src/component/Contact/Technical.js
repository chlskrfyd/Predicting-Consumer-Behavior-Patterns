import React from "react";
import "./Technical.css";
import starbucks from "./startbucks.png";
import coffee_consumption from "./starbucks/coffee_consumption.png";
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
          <br />
          <p className="starbucks_text_box">
            분석 주제 : 스타벅스 입점 국가 예측
          </p>
          <p className="starbucks_text_box">
            개요 : 커피 소비량은 전 세계적으로 증가하고 있다. <br></br>
            이러한 추세를 반영하여 국가 별 커피소비량과 국가 별 스타벅스 입점
            지점 데이터를 활용하고 입점국가를 예측하는 서비스를 제공한다.
          </p>
          <br></br>
          <figure>
            <img src={coffee_consumption} alt="coffee_consumption" />
            <figcaption>
              2021년 전 세계 커피 소비량이 커피 생산량을 넘어섰다.
              <br />
              이미지 출처 : ICO(https://www.ico.org)
            </figcaption>
          </figure>

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
