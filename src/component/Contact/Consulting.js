import './Consulting.css'
import amazon from "./amazon.png"

const Contact = () =>{
    return (
<body className="consulting">
      <div className='about_main'>
        <h1 className="consulting_main_title">기업 컨설팅</h1>
        
        <div className="consulting_title">소비자 행동분석
        <img src={amazon} className='amazon' alt='amazon'></img>
        </div>
        <div className="consulting_box_2">
          데이터 분석 내용 들어갈 자리
        </div>

        <div className="consulting_title">감정분석
        <img src={amazon} className='amazon_2' alt='amazon'></img>
        </div>
        <div className="consulting_box_2"></div>

        <div className="consulting_title">이탈고객 예측
        <img src={amazon} className='amazon' alt='amazon'></img>
        </div>
        <div className="consulting_box_2"></div>   
      </div>
    </body>
    )
}

export default Contact;