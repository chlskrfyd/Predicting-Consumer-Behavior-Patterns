import Carousel from "react-bootstrap/Carousel";
import solution_img from "./doors.png";
import insight_img from "./insight.jpg";
import revolution_img from "./revolution.jpg";
import intelligenc_img from "./intelligenc.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="slidercontents">
          <img
            src={solution_img}
            className="solution_img"
            alt="solution_img"
          ></img>
          <div className="wrapText">
            <h1 className="slid_font">Solution</h1>
            <div className="d-none d-md-block">
              <h3 className="slid_font">Effective way to solve problems</h3>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slidercontents2">
          <img
            src={insight_img}
            className="insight_img"
            alt="insight_img"
          ></img>

          <div className="wrapText">
            <h1 className="slid_font">Insight</h1>
            <div className="d-none d-md-block">
              <h3 className="slid_font">Generate innovative ideas</h3>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slidercontents3">
          <img
            src={revolution_img}
            className="revolution_img"
            alt="revolution_img"
          ></img>
          <div className="wrapText">
            <h1 className="slid_font">Revolution</h1>
            <div className="d-none d-md-block">
              <h3 className="slid_font">Provide innovative data solutions</h3>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slidercontents4">
          <img
            src={intelligenc_img}
            className="intelligenc_img"
            alt="intelligenc_img"
          ></img>
          <div className="wrapText">
            <h1 className="slid_font">Intelligence</h1>
            <div className="d-none d-md-block">
              <h3 className="slid_font">Supply actionable intelligence</h3>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
