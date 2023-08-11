import React, { useEffect } from "react";
import * as echarts from "echarts";

const SimpleBarChart = () => {
  useEffect(() => {
    const chartDom2 = document.getElementById("main2");
    const myChart2 = echarts.init(chartDom2);

    const option2 = {
      xAxis: {
        type: "category",
        data: ["2~3회 / 월", "2~3회 / 주", "2~3회 / 일", "거의 없음"],
      },
      yAxis: {
        type: "value",
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
