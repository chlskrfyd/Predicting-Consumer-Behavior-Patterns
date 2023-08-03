import "./About.css";
import office_space from "./office_space.jpg";
import 낙룡 from "./낙룡.jpg";
import 남용 from "./남용.jpg";
import 세희 from "./세희.jpg";
import 보은 from "./보은.jpg";
import 지혜 from "./지혜.jpg";
import Location from "../Kakao_maps/maps.js";

const About = () => {
  return (
    <body className="about">
      <div className="about_main">
        <div className="about_title">About</div>
        <div className="about_box">
          <img
            src={office_space}
            className="office_space"
            alt="office_space"
          ></img>
          <div className="about_txt_box">
            <div className="about_txt1">
              압도적인 외부 위협 모니터링 커버리지
            </div>
            <div className="about_txt2">
              압도적인 딥/다크웹 데이터 수집력을 기반으로
              <br></br>경쟁사 대비 폭넓은 커버리지를 확보하고 있습니다.
            </div>

            <div className="about_txt1">정확한 위협 탐지</div>
            <div className="about_txt2">
              그래프 기반 관계 분석 엔진과 분석 팀이​
              <br></br>정확하게 위협요소를 탐지하고 근본 원인을 파악합니다.​
            </div>

            <div className="about_txt1">즉시 적용 가능한 인텔리전스</div>
            <div className="about_txt2">
              위협 그룹에 대한 이해를 기반으로 고객에게 특화된
              <br></br>즉시 적용 가능한 인텔리전스를 제공합니다.
            </div>
          </div>
        </div>

        <div className="about_title">Project Members</div>

        <div className="about_box_3">
          <div className="image-group">
            <div className="image-container">
              <img src={보은} alt="보은" className="mem-pic" />
              <div className="image-caption">
                <p className="about_p">박보은</p>
                <p1>팀장</p1>
              </div>
            </div>
            <div className="image-container">
              <img src={지혜} alt="지혜" className="mem-pic" />
              <div className="image-caption">
                <p className="about_p">김지혜</p>
                <p1>데이터분석 담당</p1>
              </div>
            </div>
            <div className="image-container">
              <img src={낙룡} alt="남용" className="mem-pic" />
              <div className="image-caption">
                <p className="about_p">최낙룡</p>
                <p1>데이터분석 담당</p1>
              </div>
            </div>
            <div className="image-container">
              <img src={세희} alt="세희" className="mem-pic" />
              <div className="image-caption">
                <p className="about_p">임세희</p>
                <p1>프론트엔드 담당</p1>
              </div>
            </div>
            <div className="image-container">
              <img src={남용} alt="남용" className="mem-pic" />
              <div className="image-caption">
                <p className="about_p">정남용</p>
                <p1>프론트엔드 담당</p1>
              </div>
            </div>
          </div>
        </div>
        <div className="about_title">Contact us</div>
        <div>
          <div className="about_box">
            <Location className="about_map" />
            <small className="about_contact">
              {" "}
              &#128413; 광주광역시 동구 제봉로 92 대성학원 3층
              <br></br>
              <br></br>
              &#128383; 062-000-0000
              <br></br>
              <br></br>
              &#128387; siridata@gmail.com
            </small>
          </div>
        </div>
      </div>
    </body>
  );
};

export default About;
