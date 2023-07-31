import './About.css'
import building_img from "./building_img.jpg"
import 낙룡 from "./낙룡.jpg"
import 남용 from "./남용.jpg"
import 세희 from "./세희.jpg"
import 보은 from "./보은.jpg"
import 지혜 from "./지혜.jpg"

const About = () =>{
    return (
        <body className="about">
          <div className='main-container'>
            <div class="temp-box-title">
              회사소개
            </div>
            <div class="temp-box">
              <div class ="temp-box-2">
                <img src={building_img} className='building_img' alt='bulding_img'></img>
              </div>
            </div>

            <div class="temp-box-title">팀원소개</div>

            <div class="temp-box-4">4</div>
              <div className='member_pic'></div>
                <img src={보은} className='보은' alt='보은'></img>
                <img src={지혜} className='지혜' alt='지혜'></img>
                <img src={남용} className='남용' alt='남용'></img>
                <img src={낙룡} className='낙룡' alt='낙룡'></img>
                <img src={세희} className='세희' alt='세희'></img>
            <div class="temp-box-title">Contact us</div>

            <div class="temp-box">6</div>
          </div>
          
        </body>
    )
}

export default About;

