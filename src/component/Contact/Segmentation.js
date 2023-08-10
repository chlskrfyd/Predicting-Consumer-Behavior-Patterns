import "./Segmentation.css";
import amazon from "./amazon/amazon.png";
import createPlotlyComponent from "react-plotly.js/factory";
import Plot from "react-plotly.js";

// 고객 세분화
import segmentation1 from "./amazon/amazon_고객세분화/customer_segmentation1.json";
import segmentation2 from "./amazon/amazon_고객세분화/customer_segmentation2.json";
import segmentation3 from "./amazon/amazon_고객세분화/customer_segmentation3.json";

const Segmentation = () => {
  return (
    <body className="segmentation">
      <div className="about_main">
        <h1 className="segmentation_main_title">segmentation</h1>

        <div className="segmentation_title">segmentation</div>
        <div className="segmentation_box">asdfa</div>

        <div className="segmentation_title">
          고객 세분화
          <img src={amazon} className="amazon_3" alt="amazon"></img>
        </div>
        <div className="segmentation_box_2"></div>
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
    </body>
  );
};

export default Segmentation;
