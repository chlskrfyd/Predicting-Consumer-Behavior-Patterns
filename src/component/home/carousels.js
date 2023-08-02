import Carousel from 'react-bootstrap/Carousel';
import solution_img from './doors.png'
import insight_img from './insight.jpg'
import revolution_img from './revolution.jpg'
import intelligenc_img from './intelligenc.jpg'



function UncontrolledExample() {
  return (
    <Carousel>
    <Carousel.Item>
        <div className='slidercontents'>
            <img src={solution_img} className='solution_img' alt='solution_img'></img>
            <div className='wrapText'>
                <h1 className="slid_font">Solution</h1>
                <div className="d-none d-md-block">
                    <h3 className="slid_font">대충 업체에게 정확한솔루션을 제공해준다는 말</h3>
                </div>
                
            </div>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div className='slidercontents2'>
            <img src={insight_img} className='insight_img' alt='insight_img'></img>

            <div className='wrapText'>
                <h1 className="slid_font">Insight</h1>
                <div className="d-none d-md-block">
                    <h3 className="slid_font">대충 인사이트 어쩌고 저쩌고</h3>
                </div>
                
            </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='slidercontents3'>
            <img src={revolution_img} className='revolution_img' alt='revolution_img'></img>
            <div className='wrapText'>
                <h1 className="slid_font">Revolution</h1>
                <div className="d-none d-md-block">
                    <h3 className="slid_font">대충 우리업체는 레볼루션 어쩌구</h3>
                </div>
                
            </div>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div className='slidercontents4'>
            <img src={intelligenc_img} className='intelligenc_img' alt='intelligenc_img'></img>
            <div className='wrapText'>
                <h1 className="slid_font">intelligence</h1>
                <div className="d-none d-md-block">
                    <h3 className="slid_font">대충 우리업체 능지 최고 ^.^</h3>
                </div>
                
            </div>
        </div>
    </Carousel.Item>
</Carousel>
  );
}

export default UncontrolledExample;