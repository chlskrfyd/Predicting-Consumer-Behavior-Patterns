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
              데이터분석 서비스 제공
            </div>
            <div className="about_txt2">
              비즈니스 성장에 필수적인 인사이트 제공
            </div>

            <div className="about_txt1">성장 가능성 발견</div>
            <div className="about_txt2">
              고객성장 간으성 도출 및 최고 성과 달성
            </div>

            <div className="about_txt1">비즈니스 프로세스 개선</div>
            <div className="about_txt2">
              핵심문제 해결 생산성 향상 비용 절감에 도움
            </div>

            <div className="about_txt1">맞춤형 서비스</div>
            <div className="about_txt2">
              요구사항 맞춤형 반영
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
