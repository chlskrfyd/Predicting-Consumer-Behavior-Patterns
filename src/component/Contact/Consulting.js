import "./Consulting.css";
import amazon from "./amazon/amazon.png";
import 고객이탈예측1 from "./amazon/amazon_고객이탈예측/고객이탈예측1.png";
import 고객이탈예측2 from "./amazon/amazon_고객이탈예측/고객이탈예측2.png";
import 고객이탈예측3_1 from "./amazon/amazon_고객이탈예측/고객이탈예측3-1.png";
import 고객이탈예측3_2 from "./amazon/amazon_고객이탈예측/고객이탈예측3-2.png";
import 고객이탈예측4 from "./amazon/amazon_고객이탈예측/고객이탈예측4.png";

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
