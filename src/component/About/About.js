import './About.css'
import building_img from "./building_img.jpg"
import 낙룡 from "./낙룡.jpg"
import 남용 from "./남용.jpg"
import 세희 from "./세희.jpg"
import 보은 from "./보은.jpg"
import 지혜 from "./지혜.jpg"
import Location from '../Kakao_maps/maps.js'

const About = () => {
  return (
    <body className="about">
      <div className='about_main'>
        <div className="about_title">
          회사소개
        </div>
        <div className="about_box">
          <div className="about_box_text">압도적인 외부 위협 모니터링 커버리지</div>
        </div>

        <div className="about_title">팀원소개</div>

        <div className="about_box_3">
          <div className="image-group">
            <div className="image-container">
              <img src={보은} alt="보은" className="mem-pic" />
                <div className="image-caption">
                  <p>박보은</p>
                  <p1 >프로젝트 팀장</p1>
                </div>
            </div>
            <div className="image-container">
              <img src={지혜} alt="지혜" className="mem-pic" />
                <div className="image-caption">
                  <p>김지혜</p>
                  <p1>데이터수집 팀장</p1>
                </div>
            </div>
            <div className="image-container">
              <img src={낙룡} alt="남용" className="mem-pic" />
                <div className="image-caption">
                  <p>최낙룡</p>
                  <p1>데이터분석 팀장</p1>
                </div>
            </div>
            <div className="image-container">
              <img src={세희} alt="세희" className="mem-pic" />
                <div className="image-caption">
                  <p>임세희</p>
                  <p1>프론트엔드 팀장</p1>
                </div>
            </div>
            <div className="image-container">
              <img src={남용} alt="남용" className="mem-pic" />
                <div className="image-caption">
                  <p>정남용</p>
                  <p1>프론트엔드 팀원</p1>
                </div>
            </div>                        
          </div>
        </div>
        <div className="about_title">Contact us</div>
          <div>
          <div className="about_box">
            <Location className="about_map"/>
          </div>
            
          </div>
      </div>
    </body>
  )
}

export default About;

