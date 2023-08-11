import React, { useEffect } from "react";
import * as echarts from "echarts";

const ChartComponent = () => {
  useEffect(() => {
    const chartDom = document.getElementById("main");
    const myChart = echarts.init(chartDom);

    const option = {
      dataset: {
        source: [
          ["score", "amount", "product"],
          [93.3, 0.093, "낮은 인터넷 접속 빈도"],
          [61.1, 0.061, "고객 리뷰 중요도"],
          [43.4, 0.043, "쇼핑 만족도"],
          [41.4, 0.041, "낮은 즐겨찾기 빈도"],
          [37.1, 0.037, "제품 검색 키워드"],
          [31.1, 0.031, "성별_남성"],
          [29.6, 0.029, "장바구니에 추가"],
        ],
      },
      grid: { containLabel: true },
      xAxis: { name: "amount" },
      yAxis: { type: "category" },
      visualMap: {
        orient: "horizontal",
        left: "center",
        min: 10,
        max: 100,
        text: ["High Score", "Low Score"],
        dimension: 0,
        inRange: {
          color: ["#65B581", "#FFCE34", "#FD665F"],
        },
      },
      series: [
        {
          type: "bar",
          encode: {
            x: "amount",
            y: "product",
          },
        },
      ],
    };

    option && myChart.setOption(option);

    // Clean up when the component is unmounted
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="main" style={{ width: "100%", height: "400px" }} />;
};

export default ChartComponent;
