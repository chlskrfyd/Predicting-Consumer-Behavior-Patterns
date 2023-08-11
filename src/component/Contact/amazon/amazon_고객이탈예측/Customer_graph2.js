import React, { useEffect } from "react";
import * as echarts from "echarts";

const SimpleBarChart = () => {
  useEffect(() => {
    const chartDom2 = document.getElementById("main2");
    const myChart2 = echarts.init(chartDom2);

    const option2 = {
      xAxis: {
        type: "category",
        data: ["월 2~3회", "주 2~3회", "일 2~3회", "거의 없음"],
        name: "인터넷 접속 빈도",
        nameLocation: "middle",
        nameGap: 30,
        nameTextStyle: {
          // x축 이름 스타일 설정
          color: "black", // 이름 색상 설정
          fontSize: 16, // 이름 크기 설정
        },
        axisLabel: {
          fontSize: 14, // 글씨 크기 설정
          color: "black", // 글씨 색상 설정
        },
      },
      yAxis: {
        type: "value",
        name: "이탈률",
        nameLocation: "middle",
        rotate: 90,
        nameGap: 40, // 이름과 그래프 사이의 간격
        min: 0, // 최소값 설정
        max: 100, // 최대값 설정
        interval: 20, // 눈금 간격 설정
        nameTextStyle: {
          // y축 이름 스타일 설정
          color: "black", // 이름 색상 설정
          fontSize: 16, // 이름 크기 설정
        },
        axisLabel: {
          fontSize: 14, // 글씨 크기 설정
          color: "black", // 글씨 색상 설정
        },
      },
      series: [
        {
          data: [40, 25, 13, 78],
          type: "bar",
        },
      ],
    };

    option2 && myChart2.setOption(option2);

    // Clean up when the component is unmounted
    return () => {
      myChart2.dispose();
    };
  }, []);

  return <div id="main2" style={{ width: "100%", height: "400px" }} />;
};

export default SimpleBarChart;
