import './Consulting.css'
import amazon from "./amazon.png"

const Consulting = () =>{
    return (
<body className="consulting">
      <div className='about_main'>
        <h1 className="consulting_main_title">기업 컨설팅</h1>
        
        <div className="consulting_title">고객 이탈 예측
        <img src={amazon} className='amazon_1' alt='amazon'></img>
        </div>
        <div className="consulting_box_2">
          데이터 분석 내용 들어갈 자리
        </div>

        <div className="consulting_title">구매 카테고리 예측
        <img src={amazon} className='amazon_2' alt='amazon'></img>
        </div>
        <div className="consulting_box_2"></div>

        <div className="consulting_title"> 고객 세분화
        <img src={amazon} className='amazon_3' alt='amazon'></img>
        </div>
        <div className="consulting_box_2"></div>   
      </div>
    </body>
    )
}

export default Consulting;